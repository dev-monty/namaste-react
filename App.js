
//  <div id="parent">
//    <div id="child">
//      <h1>Hello React From Monty</h1>
//    </div>
//   </div>

const parent = React.createElement("div" , {id : "parent"} ,
  React.createElement("div" , {id : "child"} ,
   React.createElement("h1" , {} ,"This is h1 Tag" ) ))


const heading = React.createElement("h1",{id:"heading"},"Hello React From Monty");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
