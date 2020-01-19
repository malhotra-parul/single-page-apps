import React from "react";

class Article extends React.Component{
   
    render(){
            const { keyword, data } = this.props;
            let desc;
            console.log(keyword);
           if(keyword){
            desc = data.filter((article)=>(
                article.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            )).map(article => (
                <li keys={article}>Title:  {article.title} <br /><br />
                        Description: {article.description} </li> 
            ));
           }
           else{
           desc = data.map(article => (
                <li keys={article}>Title:  {article.title} <br /><br />
                        Description: {article.description} </li> 
            ));
           }
        
    
    
        return(
            <div>
                {keyword}
                <ul>
                    {desc} 
                </ul>
            </div>
        );
        
    }
}

export default Article;