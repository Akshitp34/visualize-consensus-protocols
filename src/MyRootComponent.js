import { SendClientRequestFrom } from "./SendClientRequestForm";
import { NodeVisualization } from "./NodeVisualization";

export let MyRootComponent = () => {
    
    
    return (
        <>
            <SendClientRequestFrom/>
            <div style={{display: 'flex'}}>
            <NodeVisualization/>
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