import React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import Image from "./Image";
import theme from "../theme";

const Sidebar = ({social}) => {
  const { colors, fontSizes, fontWeights, sizes, space } = theme;

  const titleStyles = {
    fontSize: fontSizes.xxs,
    fontWeight: fontWeights.bold,
    marginBottom: space.sm,
  };
  
  const listItemStyles = {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 12,
    color: colors.white
  };
  
  const imageStyles = {
    marginRight: 4,
    width: sizes.icons,
  };
  
  return (
    <View style={{
      backgroundColor: colors.text,
      color: colors.white,
      height: "100%",
      padding: space.sm,
    }}>
      <Image src="ava-pdf.png" style={{ marginBottom: space.sm, marginLeft: space.sm, width: sizes.sidebar }}/>
      <View style={{ flexGrow: 1, justifyContent: "space-between" }}>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Contact</Text>
          <View style={listItemStyles}>
            <Image src="message.png" style={imageStyles}/>
            <Text>maxim.gordiyenko@gmail.com</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="call.png" style={imageStyles}/>
            <Text>+380689320050</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="telegram.png" style={imageStyles} />
            <Text>telegram.me/MaximGordiyenko</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="github.png" style={imageStyles}/>
            <Text>github.com/MaximGordiyenko</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="linkedin.png" style={imageStyles} />
            <Text>in/maxim-gordiyenko</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="pointer.png" style={imageStyles}/>
            <Text>Kiev, Ukraine</Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>
            Hobby
          </Text>
          <View style={listItemStyles}>
            <Image src="#" style={{ ...imageStyles, width: 12 }}/>
            <Text></Text>
          </View>
          <View style={listItemStyles}>
            <Image src="#" style={{ ...imageStyles, width: 12 }}/>
            <Text></Text>
          </View>
          <View style={listItemStyles}>
            <Image src="#" style={{ ...imageStyles, width: 12 }}/>
            <Text></Text>
          </View>
          <View style={listItemStyles}>
            <Image src="#" style={{ ...imageStyles, width: 12 }}/>
            <Text></Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={{ ...titleStyles, marginTop: space.md }}>Skills</Text>
          <View style={listItemStyles}>
            {/*<Image src="icon-typescript.png" style={imageStyles} />*/}
            <Text>JS &amp; TypeScript</Text>
          </View>
          <View style={listItemStyles}>
            {/*<Image src="icon-react.png" style={imageStyles} />*/}
            <Text>React &amp; React Native</Text>
          </View>
          <View style={listItemStyles}>
            {/*<Image src="icon-scss.png" style={imageStyles} />*/}
            <Text>SCSS &amp; CSS-in-JS</Text>
          </View>
          <View style={{ ...listItemStyles, marginBottom: 0 }}>
            {/*<Image src="icon-graphql.png" style={imageStyles} />*/}
            <Text>Node.js &amp; GraphQL</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;