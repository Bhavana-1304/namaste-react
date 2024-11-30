const heading=React.createElement("parent",{},[
    React.createElement("child",{id:"heading"},[React.createElement("heading1",{},"hello from header1"),React.createElement("heading2",{},"hello from header2")]),
    React.createElement("child",{id:"heading"},React.createElement("heading1",{},"hello from reactjs"))]);
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

