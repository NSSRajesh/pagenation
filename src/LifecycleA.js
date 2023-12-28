import React, {Component} from "react";
import LifecycleB from "./LifecycleB";
import { useState } from "react";
class LifecycleA extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,

        }
        console.log("LIfecycle constructer");
    

     }
     static getDerivedStateFromProps(props,state){
        console.log("LIfecycle getDerivedSateFromProps ");
        return null;
    

     }
     componentDidMount(){
        console.log("LIfecycle componentDidMount ");

     }
     shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate" );
        return true;
     }
     componentDidUpdate(preProps,preState){
        console.log("lifecycleB componetDidupdate ");
     }
     changeState=()=>{
        this.setState({
        count:this.state.count+1
        }
        )
     }
     changeStatemins=()=>{
      this.setState({
      count:this.state.count>0?this.state.count-1:0
      }
      )
   }
   render(){
    console.log("lifecycleA render");
    return(
        <div className="div1">
            <h2>LifecycleA</h2>
        
            <button onClick={this.changeState} >Incrment</button>
            <button onClick={this.changeStatemins} >Decrement</button>

            <h1> {this.state.count}</h1>
            <LifecycleB />
        </div>
    )
   }


}
export default LifecycleA