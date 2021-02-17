import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import LoginForm from "./components/LoginForm";
import NewPost from "./components/NewPost";
import PageHeader from "./components/PageHeader";
import Post from "./components/Post";
import PostDetails from "./components/PostDetails";

import fakeData from "./fakeData";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 100,
    "& > *": {
      margin: "20px 0"
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <PageHeader
        user={{ _id: 1, username: "User" }}
        title="App Name"
      ></PageHeader>
      <main className={classes.main}>
        <Typography variant="h2">Login Form:</Typography>
        <LoginForm
          onSubmit={(data) => console.log("submit login", data)}
          onClose={() => console.log("close login")}
        ></LoginForm>

        <Typography variant="h2">New Post Form:</Typography>
        <NewPost
          onSubmit={(data) => console.log("submit new post", data)}
          onClose={() => console.log("close new post")}
        ></NewPost>

        <Typography variant="h2">Single Post:</Typography>
        <PostDetails
          submitComment={(data) => console.log("Submit Comment", data)}
          likeClicked={(data) => console.log("like clicked", data)}
          post={fakeData[0]}
        ></PostDetails>

        <Typography variant="h2">Posts:</Typography>
        {fakeData.map((post) => (
          <Post
            key={post._id}
            cardClicked={(data) => console.log("card clicked", data)}
            likeClicked={(data) => console.log("like clicked", data)}
            commentClicked={(data) => console.log("comment clicked", data)}
            post={post}
          ></Post>
        ))}
      </main>
    </div>
  );
}
