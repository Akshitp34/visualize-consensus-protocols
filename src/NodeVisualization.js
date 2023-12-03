import * as d3 from 'd3'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import './visualization.css';
import msgSVG from './message.svg'
import { ReplicaNodePair } from './ReplicaNodePair';
import { ReplicaToReplicaView } from './ReplicaToReplicaView';
import { ClientToReplicasView } from './ClientToReplicasView';
import { ReplicasToClientView } from './ReplicasToClientView';

export let NodeVisualization = ( {view, numberOfReplicas} ) => {
    let showView = ( view ) => {
        switch(view) {
            case 0:
                return <ClientToReplicasView numberOfReplicas={numberOfReplicas}/>
            case 1:
                return <ReplicaToReplicaView numberOfReplicas={numberOfReplicas}/>
            case 2:
                return <ReplicasToClientView numberOfReplicas={numberOfReplicas}/>
            default:
                return <></>
        }
    }
    return (
        <svg viewBox='0 0 100 50' style={{
            border: "2px solid gold",
            margin: '30px'}}>
                { showView(view)  }
                
        </svg>
    )
}
