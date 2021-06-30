import React from 'react';
import { utils } from './utils';

export const Comenzar = props => (
    <>
        {utils.range(1, props.count).map(starId => (
            <div key={starId} className="star" />
        ))}
    </>
);
