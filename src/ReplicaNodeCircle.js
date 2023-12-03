import './visualization.css';

export let ReplicaNodeCircle = ({ centerXCord, centerYCord, radius, nodeName, primary }) => {
    let fillColor = 'white'
    if( primary === true ) {
        fillColor = '#5ef4ef'
    }
    return (
        <>
            <circle cx={centerXCord} cy={centerYCord} r={radius} fill={fillColor}/>
            <text dominant-baseline="middle" 
                text-anchor="middle"
                font-size="2"
                x={centerXCord} y={centerYCord}>
                    {nodeName}
            </text>
        </>
    )
}