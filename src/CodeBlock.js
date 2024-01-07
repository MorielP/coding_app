import React from "react";
//import OnClick from "../../../myfirstreactapp/src/Handlers";
//import CodeCase1 from "./CodeCase1";

function CodeBlock(props){
    let targetCase="./Users/morielpeleg/Projects/VSCode/React/CodingApp/coding_app/src/CodeCase1.html";

    //if (props.name === "CodeCase1" ){
    //    targetCase = "./Users/morielpeleg/Projects/VSCode/React/CodingApp/coding_app/src/CodeCase1.html";
    //}

    //function HandleClick(){
    //    window.open("https://google.com", "_blank");
   // }

    return (
        <button href="Case1.html">
           {props.name}
        </button>

    );
}

export default CodeBlock;