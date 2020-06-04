import React, { Component } from 'react'
import { Consumer, Context } from '../Context/Context'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { logout } from '../Helpers/authFunctions'
import picture from '../../assets/logo.png'
import './Profile.css'


const avatarStyle={
   width: '10em',
   height: '10em',
}

const profileContainer={
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}

export default class Profile extends Component {
   static contextType = Context
   
   logout = async ()=>{
      await logout()
      
      this.context.dispatch({
      type: "LOGGED_OUT"
      })
   }

   render() {
      return (
         <Consumer>
            {({isAuth:{user, auth} }) => {
               console.log(user)
               return(
                  <div style={profileContainer}>
                     <Avatar alt="avatar picture" src={picture} style={avatarStyle}/>
                     <div>{user.username}</div>
                     <div>{user.email}</div>
                     <div>{user.walletUSD}$</div>
                     {user.crypto.map(crypto=> {
                        return(
                           <>
                              <div>{crypto.name}</div>
                              <div>{crypto.amount}</div>
                           </>
                        )
                     })}
                     <Button onClick={this.logout} className='my-button' variant="contained" color="primary">
                        Logout
                     </Button>
                  </div>
               )
            }}
         </Consumer>
      )
   }
}
