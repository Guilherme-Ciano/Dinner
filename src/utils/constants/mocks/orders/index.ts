import {
  Client,
  CreateOrderRequest,
  Order,
  OrderFilters,
} from "../../../models/orders";

interface DishCount {
  [dish: string]: number;
}

export async function getOrders(filters?: OrderFilters) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const allOrders = MockOrders;

  const filteredOrders = allOrders.filter((order) => {
    if (!filters) return;

    return (
      (!filters.id || order.id === parseInt(filters.id)) &&
      (!filters.client ||
        order.client.toLowerCase().includes(filters.client.toLowerCase())) &&
      (!filters.dish ||
        order.order.toLowerCase().includes(filters.dish.toLowerCase()))
    );
  });

  return filteredOrders;
}

export async function createOrder(orderToBeCreated: CreateOrderRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return;
}

export async function getMontlyRevenue() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let allOrdersRevenue: number = 0;
  MockOrders.map((order) => {
    allOrdersRevenue = order.price + allOrdersRevenue;
  });

  return allOrdersRevenue;
}

export async function getMontlyOrders() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return MockOrders.length;
}

export async function getMostOrderedDish() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const dishCount: DishCount = {};

  // Itera sobre os pedidos e incrementa a contagem para cada prato
  MockOrders.forEach((order) => {
    const { order: dish } = order;
    dishCount[dish] = (dishCount[dish] || 0) + 1;
  });

  // Encontra o prato mais pedido
  const mostOrderedDish = Object.keys(dishCount).reduce((a, b) =>
    dishCount[a] > dishCount[b] ? a : b
  );

  return { mostOrderedDish, count: dishCount[mostOrderedDish] };
}

export async function getClients() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return MockClients;
}

export const MockClients: Client[] = [
  {
    id: 1,
    name: "John Smith",
    address: "123 Main St",
    phone: "+10 (212) 555-1234",
    favoriteDish: "Parmesan Steak",
  },
  {
    id: 2,
    name: "Mary Johnson",
    address: "456 Oak St",
    phone: "+10 (212) 555-5678",
    favoriteDish: "Grilled Chicken",
  },
  {
    id: 3,
    name: "Charles Davis",
    address: "789 Pine St",
    phone: "+10 (212) 555-9012",
    favoriteDish: "Caesar Salad",
  },
  {
    id: 4,
    name: "Anna White",
    address: "101 Maple St",
    phone: "+10 (212) 555-3456",
    favoriteDish: "Spaghetti Carbonara",
  },
  {
    id: 5,
    name: "Robert Brown",
    address: "202 Elm St",
    phone: "+10 (212) 555-7890",
    favoriteDish: "Vegetarian Pizza",
  },
  {
    id: 6,
    name: "Linda Anderson",
    address: "303 Birch St",
    phone: "+10 (212) 555-2345",
    favoriteDish: "Sushi Platter",
  },
  {
    id: 7,
    name: "William Martin",
    address: "404 Cedar St",
    phone: "+10 (212) 555-6789",
    favoriteDish: "Fish and Chips",
  },
  {
    id: 8,
    name: "Emily Taylor",
    address: "505 Oak St",
    phone: "+10 (212) 555-0123",
    favoriteDish: "Shrimp Scampi",
  },
];

export const MockOrders: Order[] = [
  { id: 1, client: "John Smith", order: "Parmesan Steak", price: 10.99 },
  { id: 2, client: "Mary Johnson", order: "Grilled Chicken", price: 20.49 },
  { id: 3, client: "Charles Davis", order: "Caesar Salad", price: 15.75 },
  { id: 4, client: "Anna White", order: "Spaghetti Carbonara", price: 12.25 },
  { id: 5, client: "Robert Brown", order: "Vegetarian Pizza", price: 18.99 },
  { id: 6, client: "Linda Anderson", order: "Sushi Platter", price: 25.5 },
  { id: 7, client: "William Martin", order: "Fish and Chips", price: 14.75 },
  { id: 8, client: "Emily Taylor", order: "Shrimp Scampi", price: 30.0 },
  { id: 9, client: "John Smith", order: "Vegetarian Pizza", price: 18.99 },
  { id: 10, client: "Mary Johnson", order: "Sushi Platter", price: 25.5 },
  { id: 11, client: "Charles Davis", order: "Fish and Chips", price: 14.75 },
  { id: 12, client: "Anna White", order: "Shrimp Scampi", price: 30.0 },
  { id: 13, client: "Robert Brown", order: "Parmesan Steak", price: 10.99 },
  { id: 14, client: "Linda Anderson", order: "Caesar Salad", price: 15.75 },
  {
    id: 15,
    client: "William Martin",
    order: "Spaghetti Carbonara",
    price: 12.25,
  },
  { id: 16, client: "Emily Taylor", order: "Grilled Chicken", price: 20.49 },
];
