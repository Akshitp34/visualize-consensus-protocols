import { useState } from 'react';
import './form.css'

export let SendClientRequestFrom = ( {startVisualization} ) => {
    let [ requestKey, setRequestKey ] = useState( '' );
    let [ requestValue, setRequestValue ] = useState( '' );

    let updateRequestKey = ( event ) => {
        setRequestKey( event.target.value);
    }

    let updateRequestValue = ( event ) => {
        setRequestValue( event.target.value);
    }

    let sendClientRequest = async ( event ) => {
        event.preventDefault();
        // implement server call to initiate kvservice request
        const keyValueData = {
            key: requestKey,
            value: requestValue
        }
        let consensusDataFromServer = await getConsensusData(keyValueData)
        startVisualization( consensusDataFromServer );
        console.log( requestKey );
        console.log( requestValue );
    }

    const getConsensusData = async ( keyValueData ) => {
        try {
          const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
          }
          const response = await fetch(`http://localhost:8080/api/data?key=${keyValueData.key}&value=${keyValueData.value}`, options );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data)
          return(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }

    return (
        <>
            <form className="request-form">
                <label className='vis-label'>
                    Key:
                    <input type="text" className='vis-input' value={requestKey} onChange={updateRequestKey}></input>
                </label>
                <label className='vis-label'>
                    Value:
                    <input type="text" className='vis-input' value={requestValue} onChange={updateRequestValue}></input>
                </label>
                <button type='submit' className='vis-send-button' onClick={sendClientRequest}>Send</button>
            </form>
        </>
    );
}