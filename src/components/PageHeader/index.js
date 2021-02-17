import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Avatar, Link, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [search, setSearch] = useState("")

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const signOut = () => {
    handleClose()
    props.signOut()
  }


  const profile = () => {
    handleClose()
    props.profile()
  }

  const onSearch = event => {
    event.preventDefault()
    props.onSearch({search})
  }



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          { !!props.user &&
            <>
            <IconButton
              aria-label="add a new post"
              onClick={props.newPost}
              color="inherit"
            >
              <AddIcon />
            </IconButton>
            </>
          }
        
          <Link color="inherit" className={classes.title} component="button" onClick={props.titleClicked} variant="h6" >
              {props.title}
          </Link>
          { !!props.user &&
          <form className={classes.search} onSubmit={onSearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </form>
          }
          <div className={classes.grow} />
          
              {
                props.user ?
                <>
                <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
                <Menu
                id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={profile}>Profile</MenuItem>
              <MenuItem onClick={signOut}>Sign Out</MenuItem>
              
              </Menu>
              </>
              :
              <Link
                component="button"
                variant="body2"
                color="inherit"
                onClick={props.login}
              >
                Login
              </Link>

              }
              
            
        </Toolbar>
      </AppBar>
    </div>
  );
}