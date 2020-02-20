import React from "react";
import classes from "./SearchBar.module.css";
import Button from "../../elements/Button/Button";

const searchBar = (props)=>{
    return(
        <Button type="submit"
                position="onForm"
                clicked={props.onClickHandler}
                name="submit">
            Submit
        </Button>
    );
}

export default searchBar;