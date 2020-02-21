import React, { useContext } from 'react';

import { SmurfContext } from '../App';

export const SmurfList = () => {
    const value = useContext(SmurfContext);
    return (
        <>
        {value.map(smurf => (
            <div>
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
            </div>
        ))}
        </>
    )
}