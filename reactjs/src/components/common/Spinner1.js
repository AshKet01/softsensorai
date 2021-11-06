import React from 'react';
import spinner from './spinner1.png';

export default function Spinner1() {
    return (
        <div>
            <img
                className='spinner1'
                src={spinner}
                style={{ width: '100px', margin: 'auto', display: 'block' }}
                alt="Loading..." />
        </div>
    )
}
