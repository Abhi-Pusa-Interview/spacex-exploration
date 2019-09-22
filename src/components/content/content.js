import React,{Component} from 'react';
import './content.css';
const ListItems=[{key:"Flight Number",value:"flight_number"},
                {key:"Launch Year",value:"launch_year"},
                {key:"Mission Name",value:"mission_name"},
                {key:"Rocket Details",value:""},
                {key:"Rocket Name",value:"rocket rocket_name"},
                {key:"Rocket Type",value:"rocket rocket_type"},
                {key:"Details",value:"details"}];

class LaunchList extends Component{
    
    getListItems(key,item,value){
        let valueArr = item.value.split(' ');
        let tempval = value;
        for(let i=0;i<valueArr.length;i++){
            if(i<valueArr.length){
                tempval=tempval[valueArr[i]];
            }
        }
        return (<p key={key}><span>{item["key"]}</span><span>{tempval}</span></p>)
    }
    render(){
        return(
            <div>
                {this.props.launchList.map((value,key)=>{
                    return(
                        <div className="content-wrapper" key={key}>
                            <img className="launch-img" src={value.links.mission_patch} />
                            <div className="inner-wrapper">
                                {ListItems.map((item,i)=>{
                                    return this.getListItems(i,item,value);
                                })
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default LaunchList;