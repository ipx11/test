import React, {Component} from 'react';
import CardBack from  './components/card-back';
import CardFront from './components/card-front';

export default class App extends Component {
     render() {
         return(
             <div className='card-container'>
                 <div className='card-body'>
                     <CardFront/>
                     <CardBack/>
                 </div>

             </div>
         )
     }

}

