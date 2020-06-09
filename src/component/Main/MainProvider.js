import React, { Component } from 'react';

export const MainContext = React.createContext();

const cryptoCompare = require('cryptocompare')
cryptoCompare.setApiKey('89a69c7da231f52dd93e4953c15539283d6271b433350b1eb31cded57c72d58f')

export default class MainProvider extends Component {
   constructor(props){
       super(props);
       this.state = {
           page: 'main',
           ...this.savedSettings(),
           setPage: this.setPage,
           confirmFavorites: this.confirmFavorites
       }
   }

   componentDidMount = () => {
       this.fetchCoins();
   }

   fetchCoins = async () => {
       let coinList = (await cryptoCompare.coinList().Data)
       this.setState({coinList})
    //    console.log(coinList.Data)
   }

   confirmFavorites = () => {
       this.setState({
           firstVisit: false,
           page: 'dashboard'
       })
       localStorage.setItem('crypto', JSON.stringify({
           test: 'hello'
       }))
   }

   savedSettings() {
       let cryptoData = JSON.parse(localStorage.getItem('cryptoData'));
       if(!cryptoData){
           return{page: 'coins', firstVisit: true}
       }
       return {}
   }

   setPage = page => this.setState({page})

   render() {
       return(
           <MainContext.Provider value={this.state}>
               {this.props.children}
           </MainContext.Provider>
       )
   }
}

