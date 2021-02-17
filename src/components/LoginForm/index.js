import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TextField, Card, Tabs, Tab, CardContent, CardHeader, Button, IconButton, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    padding: 10,
  },
  header: {
    textAlign: "center"
  },
  form: {
    '& > *': {
      margin: "10px 0"
    },
  },
  input: {
    display: 'none',
  },
  tabs: {
    margin: "auto"
  }
}))

export default function Login({onSubmit, onClose, error}) {
  const classes = useStyles()

  const [tabValue, setTabValue] = useState(0)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = event => {
    event.preventDefault()
    if (tabValue === 0) {
      onSubmit({type: "login", username, password})
    } else {
      onSubmit({type: "signUp", email, username, password})
    }
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        title={tabValue === 0 ? "Login" : "Sign Up"}
        action={
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardContent>
      <Tabs 
        variant="fullWidth"
        className={classes.tabs}
        value={tabValue}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
      >
        <Tab label="Login" />
        <Tab label="Sign Up" />
      </Tabs>
      </CardContent>
      <CardContent>
      <form onSubmit={submit} className={classes.form}>
        {tabValue === 1 &&
        <TextField 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        fullWidth
        label="Email"
        variant="filled"
        ></TextField>
        
        }
        <TextField 
        value={username}  
        fullWidth
        onChange={e => setUsername(e.target.value)} 
        label="username"
        variant="filled"
        ></TextField>
        <TextField 
        value={password}  
        type="password"
        fullWidth
        onChange={e => setPassword(e.target.value)} 
        label="password"
        variant="filled"
        ></TextField>

      {!!error && <Typography>{error}</Typography>}
        <Button 
        type="submit" 
        fullWidth
        color="primary"
        >Submit</Button>
      </form>
      
      </CardContent>
    </Card>
  )
}