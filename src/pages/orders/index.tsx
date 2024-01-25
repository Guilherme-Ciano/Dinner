import { Button, Table, Text } from "@geist-ui/core";
import { Column, Row, Wrapper } from "./styles";

import { MdAddCircle } from "react-icons/md";
import { getOrders } from "@/utils/constants/mocks/orders";
import NewOrderModal from "@/pages/orders/modal";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Filters from "./filters";

export default function OrdersPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const client = searchParams.get("client");
  const isVisible = searchParams.get("modalIsVisible") === "true";

  const definedQueryKey = () => {
    if (!id && !client) return ["orders"];
    return ["orders", id, client];
  };

  const { data: orders } = useQuery({
    queryKey: definedQueryKey(),
    queryFn: () =>
      getOrders({
        id,
        client,
      }),
  });

  function handleOpenModal() {
    setSearchParams((state) => {
      state.set("modalIsVisible", "true");
      return state;
    });
  }

  function handleCloseModal() {
    setSearchParams((state) => {
      state.delete("modalIsVisible");
      return state;
    });
  }

  return (
    <Wrapper>
      <Column>
        <Text
          h1
          style={{
            margin: "0",
          }}
        >
          Orders
        </Text>
        <Text
          small
          style={{
            fontWeight: "200",
          }}
        >
          All orders that you received
        </Text>
      </Column>
      <Row>
        <Filters />

        <Button
          type="secondary"
          iconRight={<MdAddCircle />}
          placeholder={undefined}
          onClick={handleOpenModal}
        >
          New order
        </Button>
      </Row>
      <Column>
        <Table data={orders} hover emptyText="No orders yet">
          <Table.Column prop="id" label="ID" />
          <Table.Column prop="client" label="Client" />
          <Table.Column prop="order" label="Order" />
          <Table.Column
            prop="price"
            label="Price"
            render={(price: number) => (
              <div>
                {price.toLocaleString("us", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            )}
          />
        </Table>
      </Column>

      <NewOrderModal
        handleCloseModal={handleCloseModal}
        isVisible={isVisible}
        key={"newOrderModal"}
      />
    </Wrapper>
  );
}
