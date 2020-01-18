import React from "react";

class Forms extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.getW}>
                        <input type="text" name="city" placeholder="City..." />
                        <input  type="text" name="country" placeholder="Country..." />
                        <button>Get Weather</button>
                </form>
            </div>
        );
    }
}

export default Forms;