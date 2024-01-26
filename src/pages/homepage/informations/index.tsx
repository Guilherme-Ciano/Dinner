import {
  getMontlyOrders,
  getMontlyRevenue,
  getMostOrderedDish,
} from "@/utils/constants/mocks/orders";
import { Card, Text, Tooltip } from "@geist-ui/core";
import { useQuery } from "@tanstack/react-query";
import { Row } from "./styles";

export default function Informations() {
  const { data: montlyRevenue } = useQuery({
    queryKey: ["montlyRevenue"],
    queryFn: () => getMontlyRevenue(),
  });

  const { data: montlyOrders } = useQuery({
    queryKey: ["montlyOrders"],
    queryFn: () => getMontlyOrders(),
  });

  const { data: mostOrderedDish } = useQuery({
    queryKey: ["mostOrderedDish"],
    queryFn: () => getMostOrderedDish(),
  });

  return (
    <Row>
      <Card
        shadow
        style={{
          width: "100%",
        }}
      >
        <Text h4>Montly Revenue</Text>
        <Text h2>
          {montlyRevenue?.toLocaleString("us", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </Card>

      <Card
        shadow
        style={{
          width: "100%",
        }}
      >
        <Text h4>Montly Orders</Text>
        <Text h2>{montlyOrders} orders in total</Text>
      </Card>

      <Card
        shadow
        style={{
          width: "100%",
        }}
      >
        <Text h4>Most Ordered Dish</Text>
        <Tooltip
          text={`it had been ordered ${mostOrderedDish?.count}x time`}
          placement="bottom"
        >
          <Text h2>{mostOrderedDish?.mostOrderedDish}</Text>
        </Tooltip>
      </Card>
    </Row>
  );
}
