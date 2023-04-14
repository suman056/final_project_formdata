import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.scss";
import ReusableComponentTextField from "./Components/ReusableComponentTextField";
import ReusableComponentSelect from "./Components/ReusableComponentSelect";
import ReusableComponentCheckbox from "./Components/ReusableComponentCheckbox";
import ReusableComponentAutocomplete from "./Components/ReusableComponentAutocomplete";
import Button from "@mui/material/Button";

function App() {
  const [data, setData] = useState([
    { field: "Fullname", type: "string", value: "" },
    { field: "age", type: "number", value: "" },
    { field: "Address1", type: "string", value: "" },
    { field: "Address2", type: "string", value: "" },
    {
      field: "gender",
      type: "select",
      option: ["male", "female", "other"],
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    {
      field: "state",
      type: "autocomplete",
      option: [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry",
      ],
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "accountNumber", type: "string", value: "" },
    {
      field: "occupation",
      type: "select",
      option: ["service", "businessman", "housewife"],
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
    { field: "country", type: "select", option: ["India", "USA"], value: "" },
    {
      field: "isActive",
      type: "checkbox",
      value: "",
    },
  ]);

  const onClickSubmit = () => {
    console.log(data);
    let finaldata = {};
    data.map((value, index) => {
      finaldata[value.field] = value.value;
    });
    console.log(finaldata);
  };
  return (
    <div className="App">
      <div>
        <h2> Customer Details</h2>
      </div>

      <div className="input_fields">
        {data.map((value, index) => {
          console.log(value.type);

          if (value.type == "string" || value.type == "number") {
            return (
              <div className="div1" key={index + value.field}>
                <ReusableComponentTextField
                  input={data}
                  type={value.type}
                  setInput={setData}
                  index={index}
                  placeHolder={value.field}
                />
              </div>
            );
          } else if (value.type == "select") {
            console.log("select", value);
            return (
              <div className="div1">
                <ReusableComponentSelect
                  input={data}
                  setInput={setData}
                  index={index}
                  placeHolder={value.field}
                  option={value.option}
                  key={index + value.field}
                />
              </div>
            );
          } else if (value.type == "checkbox") {
            return (
              <div className="div1">
                <ReusableComponentCheckbox
                  input={data}
                  setInput={setData}
                  index={index}
                  placeHolder={value.field}
                  key={index + value.field}
                />
              </div>
            );
          } else if (value.type == "autocomplete") {
            return (
              <div className="div1">
                <ReusableComponentAutocomplete
                  input={data}
                  setInput={setData}
                  index={index}
                  placeHolder={value.field}
                  option={value.option}
                  key={index + value.field}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="button_submit">
        <Button
          variant="contained"
          onClick={() => {
            onClickSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
