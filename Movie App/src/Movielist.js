import {Component} from "react";
import Moviecard from "./Moviecard";

class Movielist extends Component {
  render() {
    return (
        <>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        <Moviecard/>
        </>
    )
  }
}

export default Movielist;
