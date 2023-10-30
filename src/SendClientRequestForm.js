import { useState } from 'react';
import './form.css'

export let SendClientRequestFrom = () => {
    let [ requestKey, setRequestKey ] = useState( '' );
    let [ requestValue, setRequestValue ] = useState( '' );

    let updateRequestKey = ( event ) => {
        setRequestKey( event.target.value);
    }

    let updateRequestValue = ( event ) => {
        setRequestValue( event.target.value);
    }

    let sendClientRequest = ( event ) => {
        event.preventDefault();
        // implement server call to initiate kvservice request
        console.log( requestKey );
        console.log( requestValue );
    }


    return (
        <>
            <form className="request-form" onSubmit={sendClientRequest}>
            <label>
                Key:
                <input type="text" value={requestKey} onChange={updateRequestKey}></input>
            </label>
            <label>
                Value:
                <input type="text" value={requestValue} onChange={updateRequestValue}></input>
            </label>
            <button type='submit'>Send</button>
            </form>
        </>
    );
}