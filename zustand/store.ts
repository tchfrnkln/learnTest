import { create } from 'zustand';

interface OrderState {
  orders: any;
  orderId: string | null;
  setOrders: (data: any) => void;
  setOrderId: (id: string) => void;
}

export const useOrders = create<OrderState>((set) => ({
  orders: null,
  orderId: null,
  setOrders: (data) => set({ orders: data }),
  setOrderId: (id) => set({ orderId: id })
}));
