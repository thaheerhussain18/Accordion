//single selection

//multiple selection

import { useState } from "react";
import data from './data'
import './index.css'


export default function Accordian(){
    const [selected,setSelected]=useState(null)
    const [selectMultiselction,setmultienable]=useState(false)
    const [multi,setmulti]=useState([])

    function handlesingleSection(id){
        setSelected(id ===selected?null:id)
    }
    function handleMultiSelection(id){
        let mIds=[...multi]
        const findIndexOfId=mIds.indexOf(id)
        if(findIndexOfId===-1) mIds.push(id)
        else mIds.splice(findIndexOfId,1)
        setmulti(mIds)

        console.log(mIds)

    }
    return(
        <>
        
        <div className="wrapper">
        <button onClick={()=>setmultienable(!selectMultiselction)} className="but">{selectMultiselction ? <span>disable multi selection</span>:<span>enable multi selection </span>}</button>
        
        <div className="accordian">
        
            {
                data && data.length>0 ?(
                data.map(dataItem=>
                    <div className="item">
                        <div  className="title">
                            <h3>{dataItem.question} <span onClick={selectMultiselction ?()=>handleMultiSelection(dataItem.id) :()=>handlesingleSection(dataItem.id)}>+</span></h3>
                        
                        </div>
                        {
                            dataItem.id === selected  || multi.indexOf(dataItem.id)!==-1?
                            <div className="answer"><h4>{dataItem.answer}</h4></div> :null
                        }
                        </div>
                )):(<div>No data found !</div>)
            }
        </div>
    </div>
    </>)
}