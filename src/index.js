import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import Comp1 from "./header";
import Form from "./form";


function App(){
    return (
        <>
         <Comp1/>
<Form/>
        </>
    )
}
ReactDOM.render(<App/>,document.getElementById('root'))

