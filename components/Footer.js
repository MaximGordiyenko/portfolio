import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { darken } from "polished";
import theme from "../theme";

const Footer = () => {
  const { colors, fontSizes, fontWeights, space } = theme;
  
  const titleStyles = {
    color: colors.white,
    backgroundColor: darken(0.1, colors.qantasRed),
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.extraBold,
    marginBottom: space.sm,
    paddingLeft: space.xxs,
  };

  return (
    <View style={{ fontSize: fontSizes.xxxs }}>
      <Text style={titleStyles}>https://maximhordiienko.vercel.app</Text>
    </View>
  );
};

export default Footer;