import React,{Component} from 'react';
import './App.css';
import Controller from './components/controller/controller';
import Content from './components/content/content';

class App extends Component {
  constructor(){
    super();
    this.state={
        launchType:"all",
        selectedFilter:"select",
        filterText:"",
        launchList:[],
        offset:0,
        limit:5,
        toggle:false,
        fliterOption:{"launch_success":{"selectedValue":"","displayName":"Successful Launch","values":[]},
                      "rocket_name":{"selectedValue":"","displayName":"Rocket Name","values":[]}}
    }
    this._onChangeHandler = this._onChangeHandler.bind(this);
    this._onSelectHandler = this._onSelectHandler.bind(this);
    this._onSelectFilterOption = this._onSelectFilterOption.bind(this);
    this._loadMore = this._loadMore.bind(this);
    this.fetchLaunchList = this.fetchLaunchList.bind(this);
  }
  componentDidMount(){
    this.fetchLaunchList();
  }
  _onChangeHandler(e){
    this.setState({launchType:e.target.name,launchList:[],offset:0},this.fetchLaunchList);
  }
  _onSelectHandler(e){
    this.setState({selectedFilter:e.target.value});
  }
  _onSelectFilterOption(e){
    var newobj = this.state.fliterOption;
    newobj[e.target.name]["selectedValue"] = e.target.value==="select"?"":e.target.value;
    this.setState({filterOption:newobj,launchList:[],offset:0},this.fetchLaunchList);
  }
  fetchLaunchList(){
    var apicallType = "";
    switch(this.state.launchType){
      case "all": apicallType=""; break;
      case "prev": apicallType="/past"; break;
      case "next": apicallType="/upcoming"; break;
      default: apicallType="";
    }
    var url = `https://api.spacexdata.com/v3/launches${apicallType}?offset=${this.state.offset}&limit=${this.state.limit}`;
    for(let item in this.state.fliterOption){
      if(this.state.fliterOption[item].selectedValue !== ""){
        url=url+"&"+item+"="+this.state.fliterOption[item].selectedValue;
      }
    }
    fetch(url)
    .then(response => response.json())
    .then(response => {
      let tempOption = this.state.fliterOption;
      response.forEach((item,index)=>{
        for(let key in tempOption){
          if(key === "rocket_name"){
            let index = tempOption[key]["values"].indexOf(item["rocket"][key]);
            if(index === -1){
              tempOption[key]["values"].push(item["rocket"][key]);
            }
          }else{
            let index = tempOption[key]["values"].indexOf(item[key]);
            if(index === -1){
              tempOption[key]["values"].push(item[key]);
            }
          }
        }
      })
      this.setState({launchList:[...this.state.launchList,...response],fliterOption:tempOption,offset:this.state.offset+this.state.limit});
    })
  }
  _loadMore(){
    this.fetchLaunchList();
  }
  _toggleDrawer(){
    this.setState({toggle:!this.state.toggle});
  }
  render(){
    return (
      <div className="App">
        <h1>Space Exploration Space-X</h1>
        <Controller 
          launchType={this.state.launchType}
          selectedFilter={this.state.selectedFilter}
          filterText={this.state.filterText}
          filterOption={this.state.fliterOption}
          _onChangeHandler={this._onChangeHandler}
          _onSelectHandler={this._onSelectHandler}
          _onSelectFilterOption={this._onSelectFilterOption}
          toggle={this.state.toggle}
        />
        <button id="toggle-btn" onClick={this._toggleDrawer.bind(this)} style={!this.state.toggle?{left:"5px"}:{left:"205px"}}>
        {!this.state.toggle?<i className="glyphicon glyphicon-chevron-right"></i>:<i className="glyphicon glyphicon-chevron-left"></i>}
        </button>
        <Content 
          launchList={this.state.launchList}
        />
        <button id="loadmorebtn" onClick={this._loadMore}>LoadMore</button> 
      </div>
    );
  }
}

export default App;
