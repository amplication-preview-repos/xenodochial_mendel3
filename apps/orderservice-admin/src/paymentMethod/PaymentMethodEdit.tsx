import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const PaymentMethodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
