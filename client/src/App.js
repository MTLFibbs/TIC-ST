import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import LiveGameList from "./LiveGameList";
import SpecificLiveGame from "./SpecificLiveGame";
import { LiveGameProvider } from "./LiveGameContext";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/livegames/:host" element = {<LiveGameList/>}/>
        <Route path = "/livegame/:_id" element = {<SpecificLiveGame/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
