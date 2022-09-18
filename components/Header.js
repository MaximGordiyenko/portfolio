import React from "react";
import { Text, View } from "@react-pdf/renderer";
import theme from "../theme";

const Header = () => {
  const { colors, fontSizes, fontWeights, space } = theme;
  
  return (
    <View style={{ marginBottom: space.sm }}>
      <Text style={{ fontSize: fontSizes.xl, fontWeight: fontWeights.extraBold, marginBottom: space.xs }}>
        Maxim Hordiienko
      </Text>
      <Text style={{
        backgroundColor: colors.primary,
        color: colors.white,
        fontSize: fontSizes.md,
        fontWeight: fontWeights.extraBold,
        letterSpacing: 0.5,
        padding: space.xxs,
      }}>
        Front-End Developer
      </Text>
    </View>
  );
};

export default Header;