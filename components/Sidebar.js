import React from "react";
import { Text, View } from "@react-pdf/renderer";
import Image from "./Image";
import theme from "../theme";

const Sidebar = () => {
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
    <View style={{ backgroundColor: colors.text, color: colors.white, height: "100%", padding: space.sm }}>
      <Image src="ava-pdf.png" style={{ marginBottom: space.sm, marginLeft: space.sm, width: sizes.sidebar }}/>
      <View style={{ flexGrow: 1, justifyContent: "flex-start" }}>
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
            <Image src="telegram.png" style={imageStyles}/>
            <Text>telegram.me/MaximGordiyenko</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="github.png" style={imageStyles}/>
            <Text>github.com/MaximGordiyenko</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="linkedin.png" style={imageStyles}/>
            <Text>in/maxim-gordiyenko</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="pointer.png" style={imageStyles}/>
            <Text>Kiev, Ukraine</Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Skills</Text>
          <View style={listItemStyles}>
            <Image src="pagination.png" style={imageStyles}/>
            <Text>JS, React, Next, Type Script</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="painting.png" style={imageStyles}/>
            <Text>SCSS, CSS-in-JS, Styled-Co.</Text>
          </View>
          <View style={{ ...listItemStyles }}>
            <Image src="database.png" style={imageStyles}/>
            <Text>Node.js, Express, MongoDB</Text>
          </View>
          <View style={{ ...listItemStyles }}>
            <Image src="bookshelf.png" style={imageStyles}/>
            <Text>React-PDF, Formik, Ant Design</Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Hobby Project</Text>
          <View style={listItemStyles}>
            <Image src="bitcoin.png" style={imageStyles}/>
            <Text>Cryptofy</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="video-file.png" style={imageStyles}/>
            <Text>Movify</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="blogging.png" style={imageStyles}/>
            <Text>Blog</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="form.png" style={imageStyles}/>
            <Text>Portfolio</Text>
          </View>
        </View>
        <View style={{ fontSize: fontSizes.xxxs }}>
          <Text style={titleStyles}>Education</Text>
          <View style={listItemStyles}>
            <Image src="book.png" style={imageStyles}/>
            <Text>edX: Computer Science</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="book.png" style={imageStyles}/>
            <Text>Udemy: JavaScript Weird Parts</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="book.png" style={imageStyles}/>
            <Text>Udemy: Microservices NodeJS</Text>
          </View>
          <View style={listItemStyles}>
            <Image src="book.png" style={imageStyles}/>
            <Text>Udemy: React Testing Library</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;