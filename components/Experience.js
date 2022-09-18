import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { darken } from "polished";
import theme from "../theme";

const Experience = ({ data }) => {
  const { colors, fontSizes, fontWeights, space } = theme;
  
  const titleStyles = {
    backgroundColor: darken(0.1, colors.cwgYellow),
    color: colors.white,
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.extraBold,
    paddingLeft: space.xxs,
    marginBottom: space.sm,
  };
  
  const listItemStyles = {
    flexDirection: "row",
    fontSize: fontSizes.xxxs,
    marginBottom: space.xxs,
  };
  
  return (
    <View style={{ fontSize: fontSizes.xxxs }}>
      <Text style={titleStyles}>Professional Experience</Text>
      {data?.projects?.map(e =>
        <View key={e.id} style={listItemStyles}>
          <View wrap={false} style={{ marginLeft: space.sm, maxWidth: 312 }}>
          <Text style={{ fontSize: fontSizes.xxxs, fontWeight: fontWeights.bold }}>{e.company}, {e.period}</Text>
          <Text style={{ fontWeight: fontWeights.body, marginBottom: space.xxs, }}>
            {e.title} {e.description}
          </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Experience;