import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";
import { moderateScale } from "@utils/scale";

const StyledTextInput = ({
  size = 14,
  style = {},
  fontFamily = "Myriad Pro",
  accessibilityLabel,
  ...rest
}) => {
  return (
    <TextInput
      {...rest}
      accessibilityLabel={accessibilityLabel}
      style={[
        {
          fontSize: moderateScale(size),
          fontFamily: fontFamily,
        },
        style,
      ]}
    />
  );
};

StyledTextInput.propTypes = {
  size: PropTypes.number,
};

StyledTextInput.defaultProps = {
  size: 14
};

export default StyledTextInput;
