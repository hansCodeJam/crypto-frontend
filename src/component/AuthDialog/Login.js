import React, { Component } from 'react'
import validator from 'validator'
import {
   Fade,
   Popper,
   Button,
   TextField, 
   DialogContent, 
   DialogActions
} from '@material-ui/core';


import { login } from '../Helpers/authFunctions'

import './Login.css'


export default class Login extends Component{

   state = {
      loginForm:{
         email: {
            autoFocus: true,
            margin: 'dense',
            name: 'email',
            id: 'email',
            label: 'Enter Email',
            type: 'email',
            fullWidth: true,
            value: ''
         },
         password:{
            autoFocus: false,
            margin: 'dense',
            name: 'password',
            id: 'password',
            label: 'Enter Password',
            type: 'password',
            fullWidth: true,
            value: ''
         }
      },
      popper:{
         currentTarget: null,
         open: false,
         message: ''
      },
      disabled: true
   }


   handleChange = (e) => {
      const popper = {...this.state.popper}

      const loginForm = { ...this.state.loginForm }

      loginForm[e.target.name].value = e.target.value
      
      switch (e.target.name) {
         case 'email':
            const validatedEmail = validator.isEmail(e.target.value)
            if(!validatedEmail){
               popper.currentTarget = e.currentTarget
               popper.open = true
               popper.message = 'Must be an email'
            }else{
               popper.currentTarget = null
               popper.open = false
               popper.message = ''
            }
            break
         case 'password':
            const validatedPassword = validator.isEmpty(e.target.value)
            if(validatedPassword){
               popper.currentTarget = e.currentTarget
               popper.open = true
               popper.message = 'Please type in your password'
            }else{
               popper.currentTarget = null
               popper.open = false
               popper.message = ''
            }
            break
         default:
            break;
      }
      const disabled = loginForm.email.value 
                        && loginForm.password.value 
                        && !popper.message 
                        ? false
                        : true 
      this.setState({...this.state, loginForm, popper, disabled})
   }

   handleSubmit = async(e) => {
      e.preventDefault()
      const { email, password } = this.state.loginForm
      
      let success = await login({email: email.value, password: password.value})

      console.log(success)
   }
   

   render(){
      const { handleClose } = this.props
      const { loginForm, popper, disabled } = this.state
      const loginFormInput = []

      for (let key in loginForm){
         loginFormInput.push({
            loginForm: loginForm[key]
         })
      }

      return (
         <>
            <Popper
               id={null}
               open={popper.open}
               anchorEl={popper.currentTarget}
               placement={'top-end'}
               style={{zIndex: '1500'}}
               transition
            >
            { ({ TransitionProps}) => (
               <Fade {...TransitionProps} timeout={350}>
                  {popper.message 
                     ? <div className='popper'>{popper.message}</div>
                     : <div></div>
                  }
               </Fade>
            )}
            </Popper>
            <DialogContent>
               {loginFormInput.map(({loginForm:{ autoFocus, margin, name, id, label, type, fullWidth, value}}) => {
                  return(
                     <TextField 
                        key={name}
                        autoFocus={autoFocus}
                        margin={margin}
                        name={name}
                        id={id}
                        label={label}
                        type={type}
                        fullWidth={fullWidth}
                        value={value}
                        onChange={this.handleChange}
                     />
                  )
               })}
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} color="primary">
                  Cancel
               </Button>
               <Button onClick={this.handleSubmit} color="primary" disabled={disabled}>
                  Login
               </Button>
            </DialogActions>
         </>
      )
   }
}
