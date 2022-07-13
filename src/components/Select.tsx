import { Button } from "flowbite-react";
import { ComponentProps } from "react";

export interface SelectProps extends ComponentProps<'select'> {
}

export default ({value}: SelectProps) => {
  return <Button></Button>;
};
