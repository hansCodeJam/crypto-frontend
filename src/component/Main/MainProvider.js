import React, { Component } from 'react';

export const MainContext = React.createContext();

export default class MainProvider extends Component {
   constructor(props){
       super(props);
       this.state = {
           page: 'main'
       }
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

