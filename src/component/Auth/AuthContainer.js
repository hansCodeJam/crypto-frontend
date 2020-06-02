import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import AuthDialog from '../AuthDialog/AuthDialog'
import { Consumer, Context } from '../Context/Context'

import './AuthContainer.css'

export default class AuthContainer extends Component {
   state = {
      open: false,
      mode: 'Login'
   }

   static contextType = Context
   
   handleClose = () =>{
      this.setState({open: false})
   }

   handleClick = () =>{
      this.setState({open: true})
   }

   changeMode = () =>{
      const mode = this.state.mode === 'Login' ? 'Register' : 'Login'
      this.setState({mode})
   }

   render() {
      const { open, mode } = this.state
      return (
         <Consumer>
            {({isAuth:{user, auth} }) => {
               return(
                  <>
                  {user && auth ? 'user profile component' 
                  : ( <>
                        <AuthDialog mode={mode} open={open} handleClose={this.handleClose} changeMode={this.changeMode}/>
                        <Button variant="contained" color="primary" onClick={this.handleClick}>
                           Login/Register
                        </Button>
                     </>
                  )
                  }
                  </>
               )
            }}
         </Consumer>
      )
   }
}
