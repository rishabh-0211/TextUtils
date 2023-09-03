import React, { useState } from "react";
export default function Textarea(props) {
  const [text, setText] = useState("");
  const handleUpcase = () => {
    if(text===""){
      props.showalert("please enter text", "danger");
      return ;
    }
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("changed to upper case", "success");
  };
  const handleLocase = () => {
    if (text === "") {
      props.showalert("please enter text", "danger");
      return;
    }
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("changed to lower case", "success");
  };
  const handleAlertnatecase = () => {
    if (text === "") {
      props.showalert("please enter text", "danger");
      return;
    }
    let arr = text.split(" ");
    let newtext1 = "";
    for (let i = 0; i < arr.length; i++) {
      let kii=1;
      for(let j = 0; j < arr[i].length; j++){
        if(kii){
        newtext1 += arr[i][j].toLowerCase();
        kii=0;
        }
      else{
        newtext1 += arr[i][j].toUpperCase();
        kii=1;
      }
      }
      newtext1 +=  " ";
    }
    setText(newtext1);
    props.showalert("your text has Alternating cases ", "success");
  };
  const handleInversecase = () => {
    if (text === "") {
      props.showalert("please enter text", "danger");
      return;
    }
    let newtext = "";
    for(let i=0; i<text.length; i++) {
    if (text[i] >= "a" && text[i] <= "z") {
       newtext += text[i].toUpperCase();
      
    }
    else if (text[i] >= "A" && text[i] <= "Z") {
      newtext += text[i].toLowerCase();
     
    }
    else{
      newtext += text[i];
    }
  }
  setText(newtext);
    props.showalert("your text case is inverted ", "success");
  };

  const handleCapitalizedcase = () => {
if (text === "") {
  props.showalert("please enter text", "danger");
  return;
}
    let arr = text.split(" ");
    let newtext1="";
    for (let i = 0; i < arr.length;i++){
      arr[i]=arr[i].toLowerCase();
      newtext1 += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
    }
    setText(newtext1);
    props.showalert("your text case is Capitalized", "success");
  };
  const handleInversestring = () => {
    if (text === "") {
      props.showalert("please enter text", "danger");
      return;
    }
    let newtext = text.split('').reverse().join('');
    setText(newtext);
    props.showalert("your string is reveresed ", "success");
  };
  const handleCopyText = () => {
    if (text === "") {
      props.showalert("please enter text", "danger");
      return;
    }
    navigator.clipboard.writeText(text);
    props.showalert("your text is copied ", "success");
  };
  const handleClearcase = () => {
    if (text === "") {
      props.showalert("please enter text", "danger");
      return;
    }
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
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  
  msg.lang = "en-US";
  msg.rate = 1.0;
  msg.pitch = 2.0;
 
  if (text === "") {
    msg.text="please enter your text";
     window.speechSynthesis.speak(msg);
    props.showalert("please enter text", "danger");
    
    return;
  }
  
  msg.text = text.toLowerCase();
  
  window.speechSynthesis.speak(msg);
  props.showalert("speaking ", "success");
};
  return (
    <>
      <div
        className={` p-3 mb-2 text-${
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
              UPPER CASE
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleLocase}>
              lower case
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleAlertnatecase}>
              aLtErNaTiNg cAsE
            </button>
            <button
              type="submit"
              onClick={speak}
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}>
              Speak
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleInversecase}>
              Inverse Case
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleCapitalizedcase}>
              Capitalized Case
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleInversestring}>
              Inverse String
            </button>
            <button
              type="button"
              className={`btn btn-${
                props.mode === "light" ? "success" : "light"
              } my-4 mx-1`}
              onClick={handleCopyText}>
              Copy
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
          <p>{text.length === 0 ? "Your text will be previewed here" : text}</p>
        </div>
      </div>
    </>
  );
}
