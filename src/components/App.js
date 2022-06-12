import React from 'react';
import Box from './Box';
import { TextContext } from '../context';

const App = function () {
    const { Provider } = TextContext;
    return (
        <Provider value="Context API">
            <Box />
        </Provider>
    );
};

export default App;
