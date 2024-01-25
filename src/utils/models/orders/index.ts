export interface Order {
  id: number;
  client: string;
  order: string;
  price: number;
}

export interface OrderFilters {
  id: string | null;
  client: string | null;
}

export interface CreateOrderRequest {
  order: string;
  price: number;
  client: string;
}
