///import area 
import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import A from './A'
    
function My({student}){ 
  return <React.Fragment> 
            <span><strong>Types Related Searches{student} Here, Helpful Information, Compare Search Results.</strong></span>
            <A />
  </React.Fragment>
}
ReactDOM.render(
  <React.StrictMode>
    <span><strong>English proofreading: english  proofreading is done after editing and layout, after the page proofs</strong></span>
    <My student={123444433243214} />
 </React.StrictMode>,
  document.getElementById('root')
);

