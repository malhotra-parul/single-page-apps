import React from "react";

const Forms = props =>(
        <div>
            <form onSubmit={props.getW}>
                    <input type="text" name="city" placeholder="City..." />
                    <input  type="text" name="country" placeholder="Country..." />
                    <button>Get Weather</button>
            </form>
        </div>
    );


export default Forms;