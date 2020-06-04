import React, { Component } from 'react'
import { Context } from '../Context/Context'
import axios from 'axios';



export default class Main extends Component {
    static contextType = Context
    state = {
        query: '',
        currency: []
    }

    handleInputChange = () => {
        this.setState({
            query:this.search.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.query !== prevState.query) {
            axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.query}?tickers=true&market_data=true`).then(res => {
                const currency = res.data;
                this.setState({ currency })
            })
        }
    }

    // componentDidMount() {
    //     axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.query}?tickers=true&market_data=true`).then(res => {
    //         const currency = res.data;
    //         this.setState({ currency })
    //     })
    // }


    render() {
        return (
            <form>
                <input placeholder="Search for crypto..." onChange={this.handleInputChange} ref={input => this.search = input}/>
                {/* <img src={this.state.currency.image.thumb} /> */}
                <img src='' />
                <h1>{this.state.currency.name}</h1>
                <h1>{this.state.currency.symbol}</h1>
            </form>
        )
    }
}
