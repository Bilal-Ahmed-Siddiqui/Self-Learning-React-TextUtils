import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  
  const [Text, SetText] = useState("Enter Text Here!");

  const handleOnChange = (event) => {
    console.log("onchange ");
    SetText(event.target.value);
  };

  const UpperCase = (event) => {
    console.log("Uppercase clicked");
    let temp = Text.toUpperCase();
    SetText(temp);
    props.alert('Converted to uppercase', 'success');
  };

  const Lowercase = (event) => {
    console.log("Lowercase clicked");
    let temp = Text.toLowerCase();
    SetText(temp);
    props.alert('Converted to lowercase', 'success');

  };

  const ClearText = (event) => {
    console.log("Clear text clicked");
    SetText("");
    props.alert('Text Cleared!', 'success');

  };

  const CopyText = (event) => {
    console.log("Copy text clicked");
    navigator.clipboard.writeText(Text)
    props.alert("Text copied to clipboard!", 'success');
    document.getSelection().removeAllRanges();

  };

  return (
    <>
      <div className=" container mb-3">
        <h1>{props.Heading1}</h1>
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          id="mybox"
          rows="5"
        ></textarea>
        <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={UpperCase}>
          Convert to Uppercase
        </button>
        <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={Lowercase}>
          Convert to Lowercase
        </button>
        <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={ClearText}>
          Clear Text
        </button>
        <button disabled={Text.length===0} className="btn btn-primary my-2 mx-2" onClick={CopyText}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{Text.split(" ").filter((element) => {return element.length !== 0}).length} Words.</p>
        <p>{Text.length} letters.</p>
        <p>{0.008 * (Text.split(" ").filter((element) => {return element.length !== 0}).length)} to read.</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  Heading1: PropTypes.string,
};
