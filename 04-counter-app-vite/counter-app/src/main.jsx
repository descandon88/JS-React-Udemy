import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HelloWorldApp} from './HelloWorldApp';
// import {HelloWorldAppWithArrowFunction} from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import {CounterApp} from './CounterApp/CounterApp';
// function App () {
//     return (<h1>Hola Mundo!!!</h1>);
// }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title="Hola, soy Goku" subtitle="1234"/> */}
        <CounterApp value={20} />

    </React.StrictMode>
)
