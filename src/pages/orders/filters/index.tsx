import { Button, Input, useToasts } from "@geist-ui/core";
import { Filters } from "../styles";
import { FormState, useForm } from "@/utils/hooks/useForm";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

import { FaEraser } from "react-icons/fa6";

export default function OrderFilters() {
  const [_, setSearchParams] = useSearchParams();
  const { setToast } = useToasts();
  const initialValues = {
    id: "",
    client: "",
    dish: "",
  };

  const { values, handleChange, resetForm } = useForm(initialValues);

  function handleFilterOrders(values: FormState) {
    const { client, id, dish } = values;

    setSearchParams((state) => {
      if (id) {
        state.set("id", id.toString());
      } else {
        state.delete("id");
      }

      return state;
    });

    setSearchParams((state) => {
      if (client) {
        state.set("client", client.toString());
      } else {
        state.delete("client");
      }

      return state;
    });

    setSearchParams((state) => {
      if (dish) {
        state.set("dish", dish.toString());
      } else {
        state.delete("dish");
      }

      return state;
    });
  }

  function handleClearFilters() {
    resetForm();

    setSearchParams((state) => {
      state.delete("id");
      state.delete("dish");
      state.delete("client");

      return state;
    });

    setToast({
      text: "✅ Filter has been cleaned successfully!",
      delay: 2000,
      type: "default",
    });
  }

  return (
    <Filters>
      <Input
        name="id"
        placeholder="Search for order ID"
        value={values.id}
        onChange={handleChange}
        crossOrigin={undefined}
      />
      <Input
        name="client"
        placeholder="Search for client"
        value={values.client}
        onChange={handleChange}
        crossOrigin={undefined}
      />
      <Input
        name="dish"
        placeholder="Search for dishes"
        value={values.dish}
        onChange={handleChange}
        crossOrigin={undefined}
      />
      <Button
        type="abort"
        iconRight={<IoSearchSharp />}
        placeholder={undefined}
        onClick={() => handleFilterOrders(values)}
      >
        Apply filters
      </Button>
      <Button
        type="abort"
        iconRight={<FaEraser />}
        placeholder={undefined}
        onClick={() => handleClearFilters()}
      >
        Reset filters
      </Button>
    </Filters>
  );
}
