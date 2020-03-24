import React from "react";
import keywords from "./keywords";
import AutoCompleteSearch from "./AutoCompleteSearch";

 const App = ()=>{

  return (
    <div>
        Hello from App component!
        <AutoCompleteSearch items={keywords}/>
        
    </div>
  );  
};

export default App;