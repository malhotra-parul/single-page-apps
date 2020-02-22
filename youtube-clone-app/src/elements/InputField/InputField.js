import React from "react";
import classes from "./InputField.module.css";

const inputField = (props)=>{
    return(
        <div className={classes.InputFieldWrapper}>
            <input type={props.type}
                   value={props.value}
                   name={props.name}
                   id={props.name}
                   placeholder={props.placeholder}
                   onChange={props.handleChange} required />
        </div>
    );
};

export default inputField;