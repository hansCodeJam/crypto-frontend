import React, { Component } from 'react'
import './Navbar';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display: 'flex', marginLeft:'35%'}}>
                <p>Link 1 </p>
                <p>Link 2 </p>
                <p>Link 3 </p>
            </div>
        )
    }
}
