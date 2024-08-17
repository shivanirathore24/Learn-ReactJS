import React from "react";
import Movielist from "./Movielist";
import Navbar from "./Navbar";

class App extends React.Component{
  render(){
  return (
    <>
      <Navbar />
      <Movielist />
    </>
  );
}}

export default App;
