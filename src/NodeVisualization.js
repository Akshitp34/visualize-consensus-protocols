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
            {start && showCommunication( [0, 1, 2, 3], [0, 1, 2, 3] )}
        </svg>
    )
}

let showCommunication = ( fromNodes, toNodes ) => {
    const svgSelector = d3.select( 'svg' );

    // x co-ordinate is same for all nodes
    let fromNodeCoord_Y;
    const toNodeStartCoord_Y = nodeConnections.y2;

    // render all communication lines
    for( let i=0; i < fromNodes.length; i++ ) {
        fromNodeCoord_Y = nodeConnections.y1 + fromNodes[i]*3*radius;
        for( let j=0; j < toNodes.length; j++ ) {
            svgSelector.append( 'line' )
                    .attr('x1', nodeConnections.x1)
                    .attr('y1', fromNodeCoord_Y)
                    .attr('x2', nodeConnections.x2)
                    .attr('y2', toNodeStartCoord_Y + (toNodes[j]*3*radius) )
        }
    }

    // render all message icon images
    for( let i=0; i < fromNodes.length; i++ ) {
        fromNodeCoord_Y = nodeConnections.y1 + fromNodes[i]*3*radius;
        for( let j=0; j < toNodes.length; j++ ) {
            svgSelector.append( 'image' )
                        .attr( 'id', `line_${fromNodes[i]}${toNodes[j]}`)
                        .attr( 'href', msgSVG )
                        .attr( 'width', 3 )
                        .attr( 'height', 3 )
                        .attr('x', nodeConnections.x1)
                        .attr('y', fromNodeCoord_Y - 1.5);
        }
    }

    // transition message icons along the communication lines
    for(let i=0; i < fromNodes.length; i++ ) {
        for( let j=0; j < toNodes.length; j++ ) {
            const smvImg = d3.select( `#line_${fromNodes[i]}${toNodes[j]}` )
                        .transition()
                        .duration(1000)
                        .attr('x', 100-xStart-radius - 3 )
                        .attr('y', toNodeStartCoord_Y + (toNodes[j]*3*radius) - 1.5)
                        .transition()
                        .duration(1000)
                        .style("visibility", "hidden");
        }
    }

    // hide all communication lines 
    // todo: maybe use .remove() instead of hiding 
    svgSelector.selectAll( 'line' )
                .transition()
                .duration(2000)
                .transition()
                .duration(2000)
                .style('visibility', 'hidden');
}