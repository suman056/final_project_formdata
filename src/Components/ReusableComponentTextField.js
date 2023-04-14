import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';

function ReusableComponentTextField(props) {
  return (
    <div>
      <InputLabel id="demo-simple-select-helper-label">{props.placeHolder}</InputLabel>
      <TextField
        id="outlined-basic"
        type={props.type}
        sx={{ width: 320 }}
        variant="outlined"
        value={props.input[props.index]["value"]}
        onChange={(e) =>{ 
          let newArray=[...props.input]
          newArray[props.index]["value"]=e.target.value
          props.setInput([...newArray])}}
      />
    </div>
  );
}

export default ReusableComponentTextField;
