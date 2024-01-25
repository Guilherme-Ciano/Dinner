import {
  CreateOrderRequest,
  Order,
  OrderFilters,
} from "../../../models/orders";

export async function getOrders(filters?: OrderFilters) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const allOrders = MockOrders;

  const filteredOrders = allOrders.filter((order) => {
    if (!filters) return;

    return (
      (!filters.id || order.id === parseInt(filters.id)) &&
      (!filters.client ||
        order.client.toLowerCase().includes(filters.client.toLowerCase()))
    );
  });

  return filteredOrders;
}

export async function createOrder(orderToBeCreated: CreateOrderRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return;
}

export const MockOrders: Order[] = [
  { id: 1, client: "John Smith", order: "Parmesan Steak", price: 10.99 },
  { id: 2, client: "Mary Johnson", order: "Grilled Chicken", price: 20.49 },
  { id: 3, client: "Charles Davis", order: "Caesar Salad", price: 15.75 },
  { id: 4, client: "Anna White", order: "Spaghetti Carbonara", price: 12.25 },
  { id: 5, client: "Robert Brown", order: "Vegetarian Pizza", price: 18.99 },
  { id: 6, client: "Linda Anderson", order: "Sushi Platter", price: 25.5 },
  { id: 7, client: "William Martin", order: "Fish and Chips", price: 14.75 },
  { id: 8, client: "Emily Taylor", order: "Shrimp Scampi", price: 30.0 },
  { id: 9, client: "Daniel Wilson", order: "Chicken Alfredo", price: 22.5 },
  {
    id: 10,
    client: "Olivia Moore",
    order: "Mango Tango Smoothie",
    price: 19.99,
  },
];
