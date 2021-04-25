import React, {useEffect, useState} from "react"
import './App.css'
import axios from "axios"

import Posts from "./components/Posts"
import PostloadingComponent from "./components/PostLoading"

export default function App() {
  const PostLoading = PostloadingComponent(Posts)
  const [appState, setAppState] = useState({
    loading: false,
    posts: null
  })

  useEffect(() => {
    axios.get().then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
  }, [setAppState])
  return (
    <div className="App">
      <h1>Latest Posts</h1>
      <PostLoading isLoading={appState.loading} posts={appState.posts} />
    </div>
  )
}

