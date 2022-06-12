import React from 'react';
import { TextContext, ColorContext } from '../context';

const Div = function () {
    const { Consumer: TextConsumer } = TextContext;
    const { Consumer: ColorConsumer } = ColorContext;

    return (
        <TextConsumer>
            {(text) => (
                <ColorConsumer>
                    {(color) => (
                        <div style={{ backgroundColor: color }}>
                            {text}:{color}
                        </div>
                    )}
                </ColorConsumer>
            )}
        </TextConsumer>
    );
};

export default Div;
