import React from 'react';

const SlotMach = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    if (x === y && y === z) {
        return (<>
            <div className='slot_inner'>
                <h1> {props.x}{props.y}{props.z}</h1>
                <h1>This is matching</h1>
                <hr />
            </div>
        </>
        )
    }
    else {
        return (<>
            <div className='slot_inner'>
                <h1> {props.x}{props.y}{props.z}</h1>
                <h1>This is Not matching</h1>
                <hr />
            </div>
        </>
        )
    }
}

export default SlotMach;