import React, { Component } from 'react'
import { Consumer, Context } from '../Context/Context'
import Avatar from '@material-ui/core/Avatar';
import picture from '../../assets/logo.png'


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
                           <div>{crypto}</div>
                        )
                     })}
                  </div>
               )
            }}
         </Consumer>
      )
   }
}
