import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import Home from "./Home";
import LiveGameList from "./LiveGame/LiveGameList";
import SpecificLiveGame from "./LiveGame/SpecificLiveGame"
import { LiveGameProvider } from "./LiveGameContext";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import StatsLanding from "./StatsPages/StatsLanding";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";

const App = () => {

  const { isAuthenticated} = useAuth0();

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        {isAuthenticated
        ?
        <>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/profile/:user" element = {<ProfilePage/>}/>
        <Route path = "/livegames/:host" element = {<LiveGameList/>}/>
        <Route path = "/livegame/:_id" element = {<SpecificLiveGame/>} />
        <Route path = "/stats" element = {<StatsLanding/>}/>
        </>
        :<></>
      }
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
