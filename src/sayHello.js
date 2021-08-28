import React from 'react'

export const Hello = () => {
    const sayHello = () => {
        console.log('hello');
      };

    return (
        <div>
            {
            /* if we don't add a curly bracket it's html, if we add it's js */
            /*we don't add () to sayHello because it's gonna invoke the function as soon
            as it gets rendered on the screen, so we have a reference to it*/
            }
            <h3>--This is the hello component</h3>
            <button onClick={sayHello}>Hello</button>
        </div>
    )
}

export default Hello;