import { useState, useEffect } from 'react'
import {  Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./components/input/Input";
import Card from "./components/card/Card";


function App() {

  return (
    <>
      <h1 className='text-white text-center mt-12 font-bold text-3xl cursor-pointer'>WorlData - حمزة</h1>
      <Input></Input>
      <div className='absolute'>
        <Card></Card>
      </div>
      
    </>
  )
}

export default App
