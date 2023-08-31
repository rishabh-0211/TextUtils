import React, { useState } from "react";
export default function Textarea(props) {
  const [text, setText] = useState("");
  const handleUpcase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("changed to upper case", "success");
  };
  const handleLocase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("changed to lower case", "success");
  };
  const handleInversecase = () => {
    if (text[0] >= "a" && text[0] <= "z") {
      let newtext = text.toUpperCase();
      setText(newtext);
    }
    if (text[0] >= "A" && text[0] <= "Z") {
      let newtext = text.toLowerCase();
      setText(newtext);
    }
    props.showalert("your text case is inverted ", "success");
  };
  const handleClearcase = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("your text cleared ", "success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  let Textlength = 0;
  if (text !== "") {
    Textlength = text.split(" ").length;
  }

  return (
    <>
      <div className={` p-3 mb-2 text-${
                props.Mode === "light" ? "dark" : "light"
              }`}>
        <div className="container">
          <div className={`mb-3 `}>
            <h1>{props.heading}</h1>
            <textarea
              className={`form-control `}
              placeholder="enter text"
              value={text}
              onChange={handleonchange}
              id="exampleFormControlTextarea1"
              rows="10"></textarea>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleUpcase}>
              Upper case
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleLocase}>
              Lower case
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleInversecase}>
              Inverse case
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleClearcase}>
              Clear
            </button>
          </div>
        </div>
        <div className="container">
          <h2>Text Summary</h2>
          <p>
            {Textlength} words and {text.length} char
          </p>
          <p>{0.008 * Textlength} minutes to read </p>
          <h2>Preview</h2>
          <p>{text.length === 0 ? "Your text will previewed here" : text}</p>
        </div>
      </div>
    </>
  );
}
