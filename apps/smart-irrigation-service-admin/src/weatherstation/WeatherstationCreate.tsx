import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AlertTitle } from "../alert/AlertTitle";

export const WeatherstationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="alerts"
          reference="Alert"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlertTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
