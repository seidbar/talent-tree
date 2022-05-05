import { FC, ChangeEvent } from "react";
import styled from "styled-components";

const FormFieldStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: space-between;
  margin: 20px 0;
`;

const FormField: FC<FormFieldProps> = ({ id, label, onChange, value }) => {
  return (
    <FormFieldStyles>
      <label htmlFor={id}>{label}</label>
      <input title={id} value={value} onChange={onChange} />
    </FormFieldStyles>
  );
};

export default FormField;

type FormFieldProps = {
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
