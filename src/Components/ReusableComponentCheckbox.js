import React from 'react'


function ReusableComponentCheckbox(props) {
  return (
    <div>

        <label>{props.placeHolder}</label>
        <input type="checkbox" value={props.input} onChange={(e)=>{
        let newArray=[...props.input]
        
        newArray[props.index]["value"]=e.target.checked?true:false
            props.setInput([...newArray])
        }} ></input></div>
  )
}

export default ReusableComponentCheckbox