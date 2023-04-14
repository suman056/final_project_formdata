import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


function ReusableComponentSelect(props) {
     console.log(props.placeHolder)
  return (
    <div>
        <InputLabel id="demo-simple-select-helper-label">{props.placeHolder}</InputLabel>
        <FormControl sx={{ m: 1, minWidth: 320 }} >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.input[props.index]["value"]}
          
          onChange={(e)=>{
            console.log("select")
            let newArray=[...props.input]
            newArray[props.index]["value"]=e.target.value
            props.setInput([...newArray])}}
        >
            
            {props.option.map((value)=><MenuItem value={value} label={props.placeHolder}>{value}</MenuItem>)}
         
        </Select>
        </FormControl>
    </div>
  )
}

export default ReusableComponentSelect