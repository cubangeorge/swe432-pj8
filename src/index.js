// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import React, { useState, useCallback } from "react"; // https://reactjs.org/docs/hooks-intro.html
import ReactDOM from "react-dom";
import "./styles.css";
function PickRandomString() {
  const [value, setValue] = React.useState(
    localStorage.getItem("myValueInLocalStorage") || ""
  );
  React.useEffect(() => {
    localStorage.setItem("myValueInLocalStorage", value);
  }, [value]);
  //const onChange = (event) => setValue(event.target.value);
  const [input, setInput] = useState(""); //holds input
  const [output, setOutput] = useState(""); //holds output
  const [policy, setPolicy] = useState(""); //holds state for radio
  const [history, setHistory] = useState(""); //holds first string input

  const handleInputChange = useCallback(
    //set up the input textarea
    (event) => {
      // function (event){
      setInput(() => {
        return event.target.value; //lets us write into the textbox
      });
    }
  );
  const handleString = useCallback((event) => {
    if (input === "") {
      setValue(() => {
        return input;
      }); //storage of old input
    }
    if (history === "") {
      setHistory(() => {
        return input;
      });
    }
    var arrString = input.split(" ");
    arrString = arrString.filter(Boolean);
    var a = Math.floor(Math.random() * arrString.length);
    if (policy === "withR" || policy === "") {
      //with replace
      setOutput(() => {
        return arrString[a];
      });
    } else if (policy === "withOutR") {
      //without replace
      var string = arrString[a];
      console.log(string);
      console.log(input);
      setInput(() => {
        return input.replace(string, "");
      });
      setOutput(() => {
        return string;
      });
    }
    //console.log(arrString[a]);
    console.log(value);
  });
  const replacepol = useCallback((event) => {
    setPolicy(() => {
      return event.target.value;
    });
  });

  const handleReset = useCallback((event) => {
    setInput(history);
    setOutput("");
    setValue("");
  });
  const handleClear = useCallback((event) => {
    setInput("");
    setOutput("");
    setHistory("");
    setValue("");
  });
  return (
    <div class="center">
      <h1>Welcome To Random String Selector!</h1>
      <input
        required
        type="radio"
        name="radio"
        value="withOutR"
        onChange={replacepol}
      />
      Without Replacement
      <br />
      <input
        required
        type="radio"
        name="radio"
        value="withR"
        onChange={replacepol}
        // checked
      />
      With Replacement is default
      <br />
      !Seperate Strings by Space for proper output!
      <br />
      <textarea name="input" value={input} onChange={handleInputChange} />
      <textarea value={output} disabled />
      <br />
      <button
        name="btn"
        value="Pick Random String"
        class="round"
        onClick={handleString}
      >
        Pick Random String
      </button>
      <button onClick={handleReset} class="button2">
        Reset
      </button>
      <button onClick={handleClear} class="button1">
        Clear history
      </button>
      <br />
      <br />
      <strong>Collobartion Summary</strong>
      <table class="center1">
        <tr>
          <td class="left">Jorge L Martinez:</td>
          <br />
        </tr>
        >Set up the boiler plate JS for this assignment 
        <br />
        >Worked on the without replacement radio button
        <br />
        >Helped in setting environment local setup
        <br />
        >Tested final functionality and behaviours
        <br />
        >Did button and string replacement debugging 
        <br />
        >Worked on deployment 
        <br />

        <tr>
          <td class="left">Sifaw Bouylazane:</td>
          <br />
        </tr>
        >Set up the the layout of the UI
        <br />
        >Worked on the pick random button
        <br />
        >Worked on the clear history button
        <br />
        >Worked on getting the output box to work
        <br />
        >Worked on debugging santizing the input
        <br />
        >Worked on the reset button
        <br />

      </table>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <PickRandomString />
  </React.StrictMode>,

  document.querySelector("#root")
);

// If you got here, please check the Material UI version of this example:
// https://codesandbox.io/s/swe-432-react-two-buttons-example-mui-yohyi

