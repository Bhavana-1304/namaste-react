import React from "react";
import ReactDOM from "react-dom";


const HeaderComponent=()=>(
     <div><h1>This is Header Component</h1></div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);