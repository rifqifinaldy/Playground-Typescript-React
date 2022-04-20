import * as React from "react";
import NumberFormat, { NumberFormatState } from "react-number-format";

interface INumberFormatter {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const NumberFormatCustom = React.forwardRef<
  NumberFormatState,
  INumberFormatter
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="Rp."
    />
  );
});
