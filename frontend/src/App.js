import React from "react";
// import socketIO from "socket.io-client";
import Navbar from "./components/Navbar";
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import ChatPage from "./components/ChatPage.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/chats",
      element: <ChatPage />,
    },
  ]);


function App(){

    return (
        <div className="mainContainer">
            {/* <Navbar/> */}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;