import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Sidebar from "./Sidebar";
import theme from "../theme";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

const styles = StyleSheet.create({
  document: {},
  page: {
    flexDirection: 'column',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const Resume = ({social, data}) => {
  const { colors, fonts, sizes, space } = theme;
  return (
    <Document style={styles.document}>
      <Page
        size="A4"
        style={{
          backgroundColor: colors.white,
          color: colors.black,
          flexDirection: "row",
          fontFamily: fonts.body,
          padding: space.sm,
        }}>
        <View
          style={{ backgroundColor: colors.background, flexDirection: "row" }}>
          <Sidebar social={social}/>
          <View
            style={{
              padding: space.sm,
              paddingTop: space.xs,
              width: sizes.main,
            }}>
            <Header/>
            <About data={data}/>
            <Experience data={data}/>
            <Education data={data}/>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Resume;