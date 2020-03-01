import React from "react";
import TextField from '@material-ui/core/TextField';

class SearchBar extends React.Component{

    state = {
        term : ""
    };

    onInputChange = (event)=>{
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit = (event)=>{
        event.preventDefault(); 
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        
        return(
            <div>
            <form  onSubmit={this.onFormSubmit} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Search" size="small" 
            variant="outlined" margin="normal" color="primary" value = {this.state.term}
            onChange={this.onInputChange} style={{width: 700}}/>
           </form>
           </div>
        )
    }
}

export default SearchBar;