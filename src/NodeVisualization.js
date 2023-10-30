import * as d3 from 'd3'
import { useEffect, useRef } from 'react';
import './visualization.css';
import msgSVG from './message.svg'

let numberOfReplicas = 4;
export let NodeVisualization = () => {
     let xStart = 10;
     let yStart = 10;
     let radius = 3;
     let nodeConnections =
        {
            x1: xStart+radius,
            y1: yStart,
            x2: 100-xStart-radius,
            y2: yStart
        };
        useEffect( () => {
            const smvImg = d3.select( 'image' )
                .transition()
                .duration(2000)
                .attr('x', 100-xStart-radius - 3 )
                .attr('y', nodeConnections.y1 - 1.5)
                .transition()
                .duration(1000)
                .style("visibility", "hidden");
        }, []);
    return (
        <svg viewBox='0 0 100 50' style={{
            border: "2px solid gold",
            margin: '30px'}}>
                {[...Array(numberOfReplicas)].map((x,i) =>
                <g className='replica-node'>
                    <circle cx={xStart} cy={yStart+i*3*radius} r={radius} fill='white'/>
                    <circle cx={100-xStart} cy={yStart+i*3*radius} r={radius} fill='white'/>
                </g>)}
            <line x1={nodeConnections.x1} y1={nodeConnections.y1}
                  x2={nodeConnections.x2} y2={nodeConnections.y2}></line>
                  <image href={msgSVG} width="3" height="3" x={nodeConnections.x1}
                    y={nodeConnections.y1 - 1.5}></image>
        </svg>
    )
}