import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

// function App(){
//     return <h1>Hola desde  React!</h1>
// }

root.render(<App/>);

//para salir ctrl + c 2 veces
