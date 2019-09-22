import React,{Component} from 'react';
import './controller.css';

  
class Controller extends Component{

    render(){
        var filterComponent = [];
        for(let option in this.props.filterOption){
            filterComponent.push(
                (<div key={Math.random()} className="filter-wrapper">
                    <label>{this.props.filterOption[option]["displayName"]}</label>
                    <select className="filter-selection" name={option} value={this.props.filterOption[option]["selectedValue"]} onChange={this.props._onSelectFilterOption}>
                        <option key="-1">select</option>
                        {this.props.filterOption[option].values.map((value,key)=>{
                            if(value!=null){
                                return(
                                    <option key={key}>{value.toString()}</option>
                                )
                            }
                        })}
                    </select>
                </div>) 
            )
        }
        return(
            <div id="drawer" style={!this.props.toggle?{left:"-200px"}:{left:"0px"}}>
                <h2>Filter Option</h2> 
                <div className="controller-radio">
                    <input type="radio" name="all" checked={this.props.launchType==="all"} onChange={this.props._onChangeHandler}/>
                    <label name="All launches">All launches</label>
                </div>
                <div className="controller-radio">
                    <input type="radio" name="prev" checked={this.props.launchType==="prev"} onChange={this.props._onChangeHandler}/>
                    <label name="All Previous launches">All Previous launches</label>
                </div>
                <div className="controller-radio">
                    <input type="radio" name="next" checked={this.props.launchType==="next"} onChange={this.props._onChangeHandler}/>
                    <label name="All Upcoming launches">All Upcoming launches</label>
                </div>
                <div className="filter-controller">
                    {filterComponent}    
                </div>
            </div>
        )
    }
}

export default Controller;