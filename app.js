import React from "react";
import ReactDOM from "react-dom";


const HeaderComponent=()=>(
     <div id='container'><h1>This is Header Component</h1>
      <InnerComponent/>
     </div>
);

const InnerComponent=()=>(
    <div><h1>Welcome to React</h1></div>
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);