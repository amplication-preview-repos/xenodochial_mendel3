import { SortOrder } from "../../util/SortOrder";

export type PaymentMethodOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  paymentType?: SortOrder;
  updatedAt?: SortOrder;
};
