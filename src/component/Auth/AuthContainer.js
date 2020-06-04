import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import jwt_decode from 'jwt-decode'
import Cookies from 'js-cookie'

import AuthDialog from '../AuthDialog/AuthDialog'
import { Consumer, Context } from '../Context/Context'

import './AuthContainer.css'

export default class AuthContainer extends Component {
   static contextType = Context
   state = {
      open: false,
      mode: 'Login'
   }

   
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

   getUserFromCookie(){
      const cookie = Cookies.get('jwt-access-token')

      if(cookie){
         const user = jwt_decode(cookie)

         this.context.dispatch({
         type: "SUCCESS_SIGNED_IN",
         payload: user
         })
      }
   }

   componentDidMount(){
      this.getUserFromCookie()
   }

   render() {
      const { open, mode } = this.state
      return (
         <Consumer>
            {({isAuth:{user, auth} }) => {
               return(
                  <>
                  {user && auth ? <div>{user.username}/{user.walletUSD}</div>
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
