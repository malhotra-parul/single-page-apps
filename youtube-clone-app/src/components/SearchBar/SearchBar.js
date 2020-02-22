import React from 'react';
import InputField from "../../elements/InputField/InputField";
import Button from "../../elements/Button/Button";
import classes from "./SearchBar.module.css";

const searchBar = (props)=>{
    return(
        <div className={classes.SearchBarWrapper}>
            <InputField type="text"
                        name="inputButton"
                        placeholder="search"
                        handleChange={props.onChangeHandler}/>
            <Button position="on-form"
                    type="submit"
                    name="searchButton"
                    clicked={props.onClickHandler}/>
        </div>
    );
};

export default searchBar;
