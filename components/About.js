import React from "react";
import { Text, View } from "@react-pdf/renderer";
import theme from "../theme";

const About = ({ data }) => {
  const { fontSizes, lineHeights, space } = theme;
  return (
    <View style={{ marginBottom: space.xxs }}>
      <Text style={{ fontSize: fontSizes.xxxs, lineHeight: lineHeights.sm, paddingHorizontal: space.sm }}>
        {data.about}
      </Text>
    </View>
  );
};

export default About;