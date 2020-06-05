import React, { Component } from 'react'
import { Context } from '../Context/Context'
import axios from 'axios';
import Marquee from './Marquee/Marquee';



export default class Main extends Component {
    static contextType = Context
    state = {
        query: '',
        crypto: []
    }

    handleInputChange = () => {
        this.setState({
            query:this.search.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.query !== prevState.query) {
            axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.query}?tickers=true&market_data=true`).then(res => {
                const crypto = res.data;
                // const image = res.data.crypto.image.small
                // console.log(image)
                this.setState({ crypto })
            })
        }
    }

    // componentDidMount() {
    //     axios.get(`https://api.coingecko.com/api/v3/coins/${this.state.query}?tickers=true&market_data=true`).then(res => {
    //         const crypto = res.data;
    //         this.setState({ crypto })
    //     })
    // }


    render() {
        const { image } = this.state;
        return (
            <form>
                <Marquee />
                <input placeholder="Search for crypto..." onChange={this.handleInputChange} ref={input => this.search = input}/>
                {/* <img src={this.state.crypto.image.thumb} /> */}
                {/* <img src={image} /> */}
                <h1>{this.state.crypto.symbol}</h1>
            </form>
        )
    }
}
