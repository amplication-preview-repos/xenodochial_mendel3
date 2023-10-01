export type PaymentMethod = {
  createdAt: Date;
  id: string;
  name: string;
  paymentType?: Array<"CashOnDelivery" | "Upi">;
  updatedAt: Date;
};
