import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const PaymentMethodCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <SelectArrayInput
          label="payment_type"
          source="paymentType"
          choices={[
            { label: "cash on delivery", value: "CashOnDelivery" },
            { label: "Upi", value: "Upi" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
