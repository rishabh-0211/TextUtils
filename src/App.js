import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  function toggleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(46 45 56)";
      showAlert("this is dark mode", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("this is light mode", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          About="About"
          Mode={mode}
          ToggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About Mode={mode} />
            </Route>

            <Route exact path="/">
              <Textarea
                showalert={showAlert}
                heading="Enter your text here"
                Mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
