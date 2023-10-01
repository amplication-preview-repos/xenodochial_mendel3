export type PaymentMethodUpdateInput = {
  name?: string;
  paymentType?: Array<"CashOnDelivery" | "Upi">;
};
