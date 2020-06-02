import React from 'react'
import { 
   Button, 
   TextField, 
   DialogContent, 
   DialogActions 
} from '@material-ui/core';

export default function Register(props) {
   const {handleClose} = props
   return (
      <>
         <DialogContent>
            <TextField
               autoFocus
               margin="dense"
               id="name"
               label="Name"
               type="text"
               fullWidth
            />
            <TextField
               margin="dense"
               id="email"
               label="Email Address"
               type="email"
               fullWidth
            />
            <TextField
               margin="dense"
               id="password"
               label="Password"
               type="password"
               fullWidth
            />
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose} color="primary">
               Cancel
            </Button>
            <Button onClick={null} color="primary">
               Register
            </Button>
         </DialogActions>
      </>
   )
}
