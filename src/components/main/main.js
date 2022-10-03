import styled from "styled-components";
import {
  COLORS,
  FontSize,
  LineHeight,
  FontWeight,
} from "../../css/global/global";
import Footer from "../footer/footer";
import Header from "../header/header";
import Contact from "./contact";
import Planner from "./planner";

export default function Main() {
  return (
    <>
      <Header />
      <Planner />
      <Contact />
      <Footer />
    </>
  );
}
