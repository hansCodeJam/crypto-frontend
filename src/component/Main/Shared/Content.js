import React from 'react';
import { MainContext } from '../MainProvider';

export default function(props) {
    return <MainContext.Consumer>
            {({coinList}) => {
                if(!coinList) {
                    return <div> Loading Coins </div>
                }
                return <div> {props.children} </div>
            }}
           </MainContext.Consumer>
}