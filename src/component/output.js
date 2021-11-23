import React from "react";
import OutputRow from "./outputRow";

const Output = props =>{
    return(
        <div>
            <OutputRow value ={props.answer} textSize ={{fontSize:'15px'}}/>
            <OutputRow value ={props.user} textSize ={{fontSize:'15px'}}/>
        </div>
    )
}

export default Output;