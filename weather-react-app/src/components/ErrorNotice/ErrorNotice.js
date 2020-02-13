    import React from "react";
    import Button from "../../elements/Button/Button";
    import classes from "./ErrorNotice.module.css";

    const errorNotice =(props) =>{
        return(
        <div className={classes.ErrorNoticeWrapper}>
            <h1 className={classes.NotFound404}>
                404
            </h1>
            <div className={classes.ErrorTextWrapper}>
                <h2 className={classes.NotFoundHeading}>
                    Oops!
                </h2>
                <p className={classes.NotFoundDetails}>
                    We can't find the city you are looking for.
                </p>
                <Button type="button"
                        position="onErrorNotice"
                        name="tryAgain"
                        clicked={props.onClickHandler}>Try Again</ Button>
            </div>
        </div>
        );
    }

    export default errorNotice;