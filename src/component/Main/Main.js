import React, { Component } from 'react'
import { Context } from '../Context/Context'
import axios from 'axios';



export default class Main extends Component {
    static contextType = Context
    state = {
        bitcoin: []
    }

    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true').then(res => {
            const bitcoin = res.data;
            // console.log(bitcoin)
            this.setState({ bitcoin })
        })
    }


    render() {
        return (
            <h1>{this.state.bitcoin.name}</h1>
        )
    }
}
