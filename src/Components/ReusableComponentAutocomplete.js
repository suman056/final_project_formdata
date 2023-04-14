import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';

function ReusableComponentAutocomplete(props) {
  return (
    <div>
        <InputLabel id="demo-simple-select-helper-label">{props.placeHolder}</InputLabel>
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.option}
      sx={{ width: 320 }}
      onChange={(e,value)=>{
        console.log(e)
        let arrayValue=[...props.input]
            arrayValue[props.index]["value"]=value
              props.setInput([...arrayValue])
      }}
      renderInput={(params) => <TextField {...params}  />}
    />
    </div>
  )
}

export default ReusableComponentAutocomplete