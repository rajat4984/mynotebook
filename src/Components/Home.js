import React from "react";
import { Notes } from "./Notes";

export const Home = (props) => {
  const {showAlert} = props    //destructuring showalert from props
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};
