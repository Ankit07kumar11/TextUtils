import React, { useState } from "react";

export default function TextForm(props) {
    const handleUPclick = () => {
       
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };
    const handleLOWclick = () => {
    
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };
    const handleCLEARclick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    };
    const Speak = () => {
        const synth = window.speechSynthesis;
        let speech = new SpeechSynthesisUtterance(text);
        speech.pitch = 0.2;

        synth.speak(speech);

        props.showAlert("Speaker is Reading Text", "success");
        
    };
    const COPY = () => {

        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    };

    const RemoveSpace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    };

    const handleONchange = (event) => {
        
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleONchange}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                        id="myBox"
                        rows="3"
                    ></textarea>
                </div>

                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleUPclick}
                >
                    {" "}
                    Convert to Uppercase
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleLOWclick}
                >
                    {" "}
                    Convert to Lowercase
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={handleCLEARclick}
                >
                    {" "}
                    Clear
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={Speak}
                >
                    Speak
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={COPY}
                >
                    Copy Text
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-1 my-1"
                    onClick={RemoveSpace}
                >
                    Remove Extra Space
                </button>
            </div>

            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h1>Text Summary</h1>
                <p>
                    {
                        text.split(/\s+/).filter((element) => {
                            return element.length !== 0;
                        }).length
                    }{" "}
                    words and {text.length} characters
                </p>

                <p>
                    {0.008 *
                        text.split(/\s+/).filter((element) => {
                            return element.length !== 0;
                        }).length}{" "}
                    Minutes read
                </p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0
                        ? text
                        : "Nothing to preview !"}
                </p>
            </div>
        </>
    );
}
