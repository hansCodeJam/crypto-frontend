import React, { Component } from 'react'
import { Context } from '../Context/Context'
import './Drawer.css';

export default class Drawer extends Component {
    static contextType = Context
    render() {
        return (
            <div>
                <h2>Drawer</h2>
            </div>
        )
    }
}
