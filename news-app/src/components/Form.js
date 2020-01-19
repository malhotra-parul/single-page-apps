import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.onsubmit}>
                <input type="text" placeholder="Search for News"
                        name="keyword" onChange={this.props.onchange}/>
                <button >Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;