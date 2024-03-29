import React from "react";
import { useParams } from "react-router-dom";
import  {data}   from "../eventsData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.scss'
import '../responsive.scss'

const EventShow = () => {
  const { eventname } = useParams();
  const dataPages = data.find((data) =>data.eventname == eventname);

  return (
    <>
    <Navbar/>
      <h2>{dataPages.description}</h2>
      <Footer/>
    </>
  );
};

export default EventShow;
