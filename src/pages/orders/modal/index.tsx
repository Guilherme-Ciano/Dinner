import { createOrder } from "@/utils/constants/mocks/orders";
import { FormState, useForm } from "@/utils/hooks/useForm";
import { Button, Input, Modal, useToasts } from "@geist-ui/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  MdAddCircle,
  MdFastfood,
  MdOutlineAttachMoney,
  MdPersonAdd,
} from "react-icons/md";

interface NewOrderModalProps {
  isVisible: boolean;
  handleCloseModal: () => void;
}

export default function NewOrderModal({
  isVisible,
  handleCloseModal,
}: NewOrderModalProps) {
  const queryClient = useQueryClient();
  const { setToast } = useToasts();
  const initialValues = {
    order: "",
    price: "",
    client: "",
  };

  const { values, handleChange, resetForm } = useForm(initialValues);

  const { mutateAsync: createOrderFn } = useMutation({
    mutationFn: createOrder,
    onSuccess(_, variables) {
      queryClient.setQueryData(["orders"], (cached: any) => {
        return [
          ...cached,
          {
            id: cached.length + 1,
            client: variables.client,
            order: variables.order,
            price: variables.price,
          },
        ];
      });
    },
  });

  async function createNewOrder(data: FormState) {
    const { client, order, price } = data;

    try {
      await createOrderFn({
        client: client,
        order: order,
        price: parseInt(price),
      });

      setToast({
        text: "✅ Order created successfully!",
        delay: 2000,
        type: "default",
      });
    } catch (error) {
      console.error(error);

      setToast({
        text: "❌ Order failed to create!",
        delay: 5000,
        type: "error",
      });

      setToast({
        text: `❌ ${error}`,
        delay: 5000,
        type: "error",
      });
    }

    resetForm();
    handleCloseModal();
  }

  return (
    <Modal visible={isVisible} onClose={handleCloseModal}>
      <Modal.Title>Creating a new order</Modal.Title>
      <Modal.Subtitle>Enter the following informations</Modal.Subtitle>
      <Modal.Content
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Input
          width={23}
          name="client"
          value={values.client}
          icon={<MdPersonAdd />}
          placeholder="Who is the client?"
          onChange={handleChange}
          crossOrigin={undefined}
        />
        <Input
          width={23}
          name="order"
          value={values.order}
          icon={<MdFastfood />}
          placeholder="What is the dish?"
          onChange={handleChange}
          crossOrigin={undefined}
        />
        <Input
          width={23}
          name="price"
          value={values.price}
          icon={<MdOutlineAttachMoney />}
          placeholder="What is the price?"
          onChange={handleChange}
          crossOrigin={undefined}
        />
      </Modal.Content>
      <Button
        type="secondary"
        iconRight={<MdAddCircle />}
        placeholder={undefined}
        onClick={() => createNewOrder(values)}
      >
        Save Order
      </Button>
    </Modal>
  );
}
