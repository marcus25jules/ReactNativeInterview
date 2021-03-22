import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "react-native";
import { moderateScale } from "@utils/scale";

const StyledButton = ({
  label = "",
  size = 14,
  bgColor,
  textColor,
  style = {},
  fontFamily = "Myriad Pro",
  accessibilityLabel,
  ...rest
}) => {
  return (
    <Pressable
      {...rest}
      style={
        [
          {
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 15,
            backgroundColor: bgColor,
            alignSelf: "center",
            marginHorizontal: "1%",
            marginBottom: 6,
            minWidth: "48%",
            textAlign: "center",
          },
        ]
      }
    ><Text
      style={[
        {
          fontSize: moderateScale(size),
          fontFamily: fontFamily,
          color: textColor,
          textAlign:'center'
        },
        style,
      ]}
    >{label}</Text></Pressable>
  );
};

StyledButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.number,
};

StyledButton.defaultProps = {
  size: 14,
  bgColor: "#0087E1",
  textColor: "#FFFFFF"
};

export default StyledButton;
