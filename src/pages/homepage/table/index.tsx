import { getClients } from "@/utils/constants/mocks/orders";
import { Card, Divider, Table, Text } from "@geist-ui/core";
import { useQuery } from "@tanstack/react-query";

export default function ClientTable() {
  const { data: clients } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClients(),
  });

  return (
    <Card
      shadow
      style={{
        width: "100%",
      }}
    >
      <Text h2>Clients</Text>
      <Text
        small
        style={{
          fontWeight: "200",
        }}
      >
        All informations about your clients
      </Text>
      <Divider />
      <Table data={clients} hover emptyText="No clients yet">
        <Table.Column prop="id" label="ID" />
        <Table.Column prop="name" label="Client" />
        <Table.Column prop="address" label="Address" />
        <Table.Column prop="phone" label="Phone" />
        <Table.Column prop="favoriteDish" label="Favorite Dish" />
      </Table>
    </Card>
  );
}
