import { Button, Input } from "@geist-ui/core";
import { Filters } from "../styles";
import { FormState, useForm } from "@/utils/hooks/useForm";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

export default function OrderFilters() {
  const [_, setSearchParams] = useSearchParams();
  const initialValues = {
    id: "",
    client: "",
  };

  const { values, handleChange } = useForm(initialValues);

  function handleFilterOrders(values: FormState) {
    const { client, id } = values;

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
      <Button
        type="abort"
        iconRight={<IoSearchSharp />}
        placeholder={undefined}
        onClick={() => handleFilterOrders(values)}
      >
        Apply filters
      </Button>
    </Filters>
  );
}
