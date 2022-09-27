import React from "react";
import { Text, View } from "@react-pdf/renderer";
import theme from "../theme";
import { calcDate } from "../helper/calcDate";

const About = ({ data }) => {
  const { fontSizes, lineHeights, space, colors, fonts } = theme;
  return (
    <View style={{ marginBottom: space.xxs }}>
      <Text style={{ fontSize: fontSizes.xxxs, lineHeight: lineHeights.sm, paddingHorizontal: space.sm }}>
        {data.about}
        {"\n"}
        <View>
          <Text>JavaScript <Text style={{ color: colors.cwgBlue }}>|</Text> React <Text style={{ color: colors.cwgBlue }}>|</Text> React-Hooks: <Text style={{ color: colors.paradisePink, fontFamily: fonts.body }}>
            {calcDate("06/01/2019", Date.now())}</Text>
          </Text>
        </View>
        {"\n"}
        <View>
          <Text>Redux <Text style={{ color: colors.cwgBlue }}>|</Text> Styled-Components: <Text style={{ color: colors.paradisePink, fontFamily: fonts.body }}>
            {calcDate("10/01/2019", Date.now())}</Text>
          </Text>
        </View>
        {"\n"}
        <View>
          <Text>NextJS <Text style={{ color: colors.cwgBlue }}>|</Text> React-Testing-Library: <Text style={{ color: colors.paradisePink, fontFamily: fonts.body }}>
            {calcDate("01/03/2022", Date.now())}</Text>
          </Text>
        </View>
        {"\n"}
        <View>
          <Text>NodeJS <Text style={{ color: colors.cwgBlue }}>|</Text> MongoDB <Text style={{ color: colors.cwgBlue }}>|</Text> TypeScript: <Text style={{ color: colors.paradisePink, fontFamily: fonts.body }}>
            {calcDate("09/01/2019", "01/01/2021")}</Text>
          </Text>
        </View>
        {"\n"}
        <View>
          <Text>English: <Text style={{ color: colors.paradisePink, fontFamily: fonts.body }}>intermediate <Text style={{ color: colors.cwgBlue }}>(B1)</Text></Text>
          </Text>
        </View>
      </Text>
    </View>
  );
};

export default About;