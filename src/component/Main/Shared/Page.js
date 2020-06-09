import React from 'react';
import {MainContext} from '../MainProvider';

export default function ({name, children}) {
    return <MainContext.Consumer>
            {({page}) => {
                if (page !== name) 
                    return null;
                    return <div> {children} </div>
            }}
           </MainContext.Consumer>
}