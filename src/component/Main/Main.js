import React, { Component } from 'react'
import { Context } from '../Context/Context'
import './Main.css'


export default class Main extends Component {
    static contextType = Context
    render() {
        return (
            <h1>Main</h1>
        )
    }
}
