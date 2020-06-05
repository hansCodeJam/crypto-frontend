import React, { Component } from 'react'
import Bitcoin from './SubMarquee.js/Bitcoin';
import Ethereum from './SubMarquee.js/Ethereum'

export default class Marquee extends Component {
    render() {
        return (
            <div>
                <Bitcoin />
                <Ethereum />
            </div>
        )
    }
}
