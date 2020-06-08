import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Avatar from '@material-ui/core/Avatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Info(props){

   const { open, handleClose } = props
   return (
      <Dialog
         open={open}
         onClose={handleClose}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
         fullWidth
         >
         <DialogTitle id="alert-dialog-title">{"Welcome to our first collab project!"}</DialogTitle>
         <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <a href="https://github.com/hansCodeJam" target='_blank'><Avatar style={{width:'3em', height:'3em'}} alt="Hans" src="https://avatars0.githubusercontent.com/u/54951702?s=400&v=4"/></a>
            &nbsp;<p style={{fontSize:'2em'}}>/</p>&nbsp;
            <a href="https://github.com/ignitikus" target='_blank'><Avatar style={{width:'3em', height:'3em'}} alt="Niko" src="https://avatars0.githubusercontent.com/u/54951587?s=460&u=4"/></a>
         </div>
         <DialogContent>
            <DialogContentText id="alert-dialog-description" >
               <p style={{display:'flex', alignContent:'center', alignItems:'center'}}>Link to frontend repo:  &nbsp;<a href="https://github.com/hansCodeJam/crypto-frontend"><GitHubIcon fontSize='large'/></a></p>
               <p style={{display:'flex', alignContent:'center', alignItems:'center'}}>Link to backend repo:  &nbsp;<a href="https://github.com/hansCodeJam/crypto-backend"><GitHubIcon fontSize='large'/></a></p>
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose} color="primary">
               Close
            </Button>
         </DialogActions>
      </Dialog>
   )
}
