import { SendClientRequestFrom } from "./SendClientRequestForm";
import { NodeVisualization } from "./NodeVisualization";
import { useState } from "react";

export let MyRootComponent = () => {
    let [startVisFlag, setStartVisFlag] = useState(false);
    let startVisualization = () => {
        setStartVisFlag(true);
    }
    return (
        <>
            <SendClientRequestFrom startVisualization={startVisualization}/>
            <div style={{display: 'flex'}}>
            <NodeVisualization start={startVisFlag}/>
            </div>
        </>
    )
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* return (
        <>
        <div style={{display:'flex',flexDirection: 'row', justifyContent: 'space-between'}}>
            <div className='replica-left'>
            <LeftReplicas/>
            </div>
            <div className='replica-right'>
            <RightReplicas/>
            </div>
        </div>
        </>
    ) */
}