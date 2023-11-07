import React from "react";
import StateCard from "./StateCard";
import StateChart from "./StateChart";



const StatesInfo = (props) => {
  
  return (
    <>
      <div className="pt-4">
        <StateCard stateResidence={props.stateResidence} Mode ={props.Mode} />
        <div className="py-1">
          <StateChart stateResidence={props.stateResidence} Mode ={props.Mode}/>
        </div>
      </div>
    </>
  );
};

export default StatesInfo;