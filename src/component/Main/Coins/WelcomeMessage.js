import React from 'react';
import {MainContext} from '../MainProvider'

export default function () {
    return (
        <MainContext.Consumer>
            {({firstVisit}) =>
            firstVisit ? <div>
                Welcome to CryptoDash, please select your favorite coins to begin.{' '}
            </div> : null}
        </MainContext.Consumer>
    );
}