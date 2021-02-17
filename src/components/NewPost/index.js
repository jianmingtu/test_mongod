import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { TextField, Card, Tabs, Close, Tab, CardContent, CardHeader, Button, IconButton, Typography, CardMedia } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
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
  },
  imagePreview: {
    maxWidth: 200,
    maxHeight: 300,
    margin: 0,
    position: "relative"
  },
  imagePreviewHeader: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    padding: 0
  }
}))

export default function NewPost({onSubmit, onClose, error}) {
  const classes = useStyles()

  const [tabValue, setTabValue] = useState(0)
  const [imageUrl, setImageUrl] = useState("")
  const [description, setDescription] = useState("")

  const [file, setFile] = useState();
  const [filePreview, setFilePreview] = useState();

  const deleteImage = image => {
    setFile(null)
    setFilePreview(null)
  }
	const fileSelected = (event) => {
    const file = event.target.files[0]
		setFile(file)
    const reader = new FileReader()
    reader.onload = e => setFilePreview(e.target.result)
    reader.readAsDataURL(file)
	}

  const submit = event => {
    event.preventDefault()
    if (tabValue === 0) {
      onSubmit({type: "url", imageUrl, description})
    } else {
      onSubmit({type: "file", file, description})
    }
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header}
        title="Post Image"
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
        <Tab label="Image URL" />
        <Tab label="File Upload" />
      </Tabs>
      </CardContent>
      <CardContent>
      <form onSubmit={submit} className={classes.form}>
        {tabValue === 0 ?
        <TextField 
        value={imageUrl} 
        onChange={e => setImageUrl(e.target.value)} 
        fullWidth
        label="Image URL"
        variant="filled"
        ></TextField>
        :
        <>
        <input accept="image/*" className={classes.input} onChange={fileSelected} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        {!!file && 
          <Card className={classes.imagePreview}>
            <CardHeader className={classes.imagePreviewHeader}
              action={
                <IconButton aria-label="close" onClick={deleteImage}>
                  <CloseIcon />
                </IconButton>
              }
            />
            <CardMedia
              component="img"
              image={filePreview}
            />
          </Card>
        }
        </>
        }
        <TextField 
        value={description} 
        multiline 
        fullWidth
        onChange={e => setDescription(e.target.value)} 
        label="Description"
        rowsMax={4}
        variant="filled"
        ></TextField>
        { !!error && <Typography>{error}</Typography>}
        <Button 
        type="submit" 
        fullWidth
        color="primary"
        >Post</Button>
      </form>
      </CardContent>
    </Card>
  )
}