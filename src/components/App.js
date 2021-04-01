import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { language: "enlish" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag vn"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
