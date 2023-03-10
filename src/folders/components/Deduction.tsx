import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { deductionprops } from "../type/Type";

const Deduction = (props: deductionprops) => {
  // deduction change handler
  const deductionhandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: any
  ) => {
    var val = e.currentTarget.value;
    if (val.match(/^[0-9]*$/)) {
      props.deductionInp.map((ele) => {
        if (item.label === ele.label) {
          ele.value = val;
        }
      });
    } else {
      e.currentTarget.value.slice(-1);
    }
    props.setDeductionInp([...props.deductionInp]);
  };
  // change handler for check box
  const checkhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      props.setCheckInp(true);
    } else {
      props.setCheckInp(false);
    }
  };
  // change handler for rent inpu box
  const rentHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.rentInp.value = e.currentTarget.value;
    props.setrentInp({ ...props.rentInp });
  };

  return (
    <div className="deduction">
      <h2>Deductions</h2>
      <form className="deduction__form">
        {/* dynamic rendering of input boxes */}
        {props.deductionInp.map((item, i) => {
          return (
            <TextField
              key={i}
              error={item.error}
              id="outlined-error-helper-text"
              label={item.label}
              value={item.value}
              helperText={`Maximum Value : ${item.max}`}
              onChange={(e) => deductionhandler(e, item)}
            />
          );
        })}
        {/* rendering of disabled input filled with standard value 50000 */}
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Standard Deduction is ₹50,000"
        />
        {/* rendering of checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => checkhandler(e)}
              checked={props.checkInp}
            />
          }
          label="Do you live in Delhi, Mumbai, Kolkata or Chennai?"
        />
        {/* rendering of rent input box */}
        <TextField
          label={props.rentInp.label}
          error={props.rentInp.error}
          value={props.rentInp.value}
          onChange={(e) => rentHandler(e)}
        />
      </form>
    </div>
  );
};

export default Deduction;
