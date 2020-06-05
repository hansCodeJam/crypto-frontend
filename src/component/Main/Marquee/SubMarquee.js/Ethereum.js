import React, { Component } from 'react'
import axios from 'axios';



export default class Bitcoin extends Component {
    state = {
        currency: null,
        marquee: null
    }

    getMarquee = async () =>{
        await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum?tickers=true&market_data=true`).then(res => {
            const crypto = res.data.name;
            const percentage = res.data.market_data.price_change_percentage_24h.toFixed(2)
            const marketPrice = res.data.market_data.current_price.usd
            this.setState({ crypto, percentage, marketPrice }, () => {
            }
            )
        })

  

    }

    componentDidMount() {
        this.getMarquee()
    }


    render() {
        const { crypto, percentage, marketPrice } = this.state
        return (
        <>
           <marquee style={{  color: percentage < 0 ? "red" : "green"}}>{ crypto } ${marketPrice} { percentage }%</marquee>  


        </>
        )
    }
}
