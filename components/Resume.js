import React from 'react';
import { Page, View, Document } from '@react-pdf/renderer';
import Sidebar from "./Sidebar";
import theme from "../theme";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";


const Resume = ({ data }) => {
  const { colors, fonts, sizes, space } = theme;
  return (
    <Document
      creator="Maxim Hordiienko"
      keywords="front-end, full-stack, developer, cv, resume"
      title="Maxim's Hordiienko Resume">
      <Page
        size="A4"
        style={{
          backgroundColor: colors.white,
          color: colors.black,
          flexDirection: "row",
          fontFamily: fonts.body,
          padding: space.xxs,
        }}>
        <View style={{ backgroundColor: colors.background, flexDirection: "row" }}>
          <Sidebar data={data}/>
          <View style={{ paddingRight: space.xxs, paddingLeft: space.xxs, width: sizes.main}}>
            <Header/>
            <About data={data}/>
            <Experience data={data}/>
            <Footer/>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Resume;