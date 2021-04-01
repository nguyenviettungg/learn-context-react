import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Submit" : "Fuckyou";
    console.log(this.context);
    return <button className="ui primary">{text}</button>;
  }
}

export default Button;
