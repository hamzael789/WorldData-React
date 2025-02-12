import { useState, useEffect } from 'react'
import {  Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./components/input/Input";
import Card from "./components/card/Card";


function App() {

  return (
    <>
      <Input></Input>
      <Card></Card>
    </>
  )
}

export default App
