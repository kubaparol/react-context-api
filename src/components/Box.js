import React from 'react';
import Div from './Div';
import { ColorContext } from '../context';

const Box = function () {
    const { Provider } = ColorContext;
    return (
        <Provider value="red">
            <Div />
        </Provider>
    );
};

export default Box;
