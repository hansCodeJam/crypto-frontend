import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navbar from '../Navbar/Navbar';
// use divider in profile component 
// import Divider from '@material-ui/core/Divider';
const Main = React.lazy(() => import('../Main/Main'))

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0
   },
   drawerPaper: {
      width: drawerWidth,
      backgroundColor: 'lightgrey',
   },
   // necessary for content to be below app bar
   toolbar: theme.mixins.toolbar,
   content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
   },
   }));

   export default function ProfileDrawer() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
         <Toolbar>
            <Typography variant="h5" noWrap>
               CryptoKnight
            </Typography>
            <Navbar />
         </Toolbar>
      </AppBar>
      <main className={classes.content}>
         <Typography paragraph>
         <div className={classes.toolbar} />
            <Main />
         </Typography>
      </main>
      <Drawer
         className={classes.drawer}
         variant="permanent"
         classes={{
            paper: classes.drawerPaper,
         }}
         anchor="right"
      >
         Login/Register component
      </Drawer>
      </div>
   );
}