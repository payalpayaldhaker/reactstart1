///import area 
//import something from somelibary;
import React from 'react';
import ReactDOM from 'react-dom';
import A from './components/A'




function App(){ 
    return<> 
    <h1>hello<A/></h1>
    </>
}






ReactDOM.render(
   
        <App/>
    ,document.querySelector('#container')
);