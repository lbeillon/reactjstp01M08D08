import React from "react";

import "./styles.css";
import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import Button from "@material-ui/core/Button";
import DisablableButton from "./DisablableButton";
import TextField from "@material-ui/core/TextField"

const App = () => {
  return (
    <div className="App">
      <h1>TP React</h1>
      <p>Start editing to see some magic happen!</p>
      <CustomButton
        text="Click-me !"
        action={() => alert("You just click me :o")}
      />
      <br />
      <br />
      <TextInput />
      <br />
      <br />
      <Button variant="contained" color="secondary"
        onClick={() => {
          console.log('clicked');
        }}
      >
        Click me
      </Button>
      <br />
      <br />
      <DisablableButton 
        text="Click to disable button 1 !"
      />
      <br />
      <br />
      <DisablableButton text="Click to disable button 2"/>
      <br />
      <br />
      <DisablableButton text="Click to disable button 3"/>
      <br />
      <br />
      <TextField id="outlined-basic" label="Nom" variant="outlined" />
      <br />
      <br />
      <TextField id="outlined-basic" label="Prénom" variant="outlined" />
    </div>
  );
};

export default App;
