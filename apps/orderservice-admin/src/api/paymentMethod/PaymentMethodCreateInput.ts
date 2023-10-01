export type PaymentMethodCreateInput = {
  name: string;
  paymentType?: Array<"CashOnDelivery" | "Upi">;
};
