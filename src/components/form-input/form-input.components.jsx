import { Group, Input, FormInputLabel } from "./form-input.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
        <Input className="form-input" {...otherProps} />
    {/* if label exists then render label */}
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
        {label}
        </FormInputLabel>
      )}
      
    </Group>
  );
};

export default FormInput;
