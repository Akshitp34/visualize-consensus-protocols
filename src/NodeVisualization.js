import * as d3 from 'd3'
import { useEffect, useRef } from 'react';
import './visualization.css';
import msgSVG from './message.svg'

import { ReplicaNodePair } from './ReplicaNodePair';

let numberOfReplicas = 4;
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
export let NodeVisualization = ( {start} ) => {
     
        /* useEffect( () => {
            showCommunication();            
        }, []); */
    return (
        <svg viewBox='0 0 100 50' style={{
            border: "2px solid gold",
            margin: '30px'}}>
                {[...Array(numberOfReplicas)].map((x,i) =>
                <ReplicaNodePair index={i}/>
                )}
            {/* <line x1={nodeConnections.x1} y1={nodeConnections.y1}
                  x2={nodeConnections.x2} y2={nodeConnections.y2 +(2*3*radius)}
                  style={{visibility:'hidden'}}>
            </line> */}
                  {/* <image href={msgSVG} width="3" height="3" x={nodeConnections.x1}
                    y={nodeConnections.y1 - 1.5}></image> */}
            {start && showCommunication()}
        </svg>
    )
}

let showCommunication = () => {
    const svgSelector = d3.select( 'svg' );
    svgSelector.append( 'line' )
                .attr('x1', nodeConnections.x1)
                .attr('y1', nodeConnections.y1)
                .attr('x2', nodeConnections.x2)
                .attr('y2', nodeConnections.y2)
    svgSelector.append( 'line' )
                .attr('x1', nodeConnections.x1)
                .attr('y1', nodeConnections.y1)
                .attr('x2', nodeConnections.x2)
                .attr('y2', nodeConnections.y2 + (1*3*radius))
    svgSelector.append( 'line' )
                .attr('x1', nodeConnections.x1)
                .attr('y1', nodeConnections.y1)
                .attr('x2', nodeConnections.x2)
                .attr('y2', nodeConnections.y2 + (2*3*radius))
    svgSelector.append( 'line' )
                .attr('x1', nodeConnections.x1)
                .attr('y1', nodeConnections.y1)
                .attr('x2', nodeConnections.x2)
                .attr('y2', nodeConnections.y2 + (3*3*radius))
    for(let i=0; i<numberOfReplicas;i++) {
        svgSelector.append( 'image' )
                    .attr( 'id', `for_R${i}`)
                    .attr( 'href', msgSVG )
                    .attr( 'width', 3 )
                    .attr( 'height', 3 )
                    .attr('x', nodeConnections.x1)
                    .attr('y', nodeConnections.y1 - 1.5);
    }
    for(let i=0; i < numberOfReplicas; i++ ) {
        const smvImg = d3.select( `#for_R${i}` )
                    .transition()
                    .duration(1000)
                    .attr('x', 100-xStart-radius - 3 )
                    .attr('y', nodeConnections.y1 + (i*3*radius) - 1.5)
                    .transition()
                    .duration(1000)
                    .style("visibility", "hidden");
    }
    svgSelector.selectAll( 'line' )
                .transition()
                .duration(2000)
                .transition()
                .duration(2000)
                .style('visibility', 'hidden');
}