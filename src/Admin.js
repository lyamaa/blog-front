import {useEffect, useState, useContext} from "react"
import './App.css'
import Posts from "./components/admin/Posts"
import PostLoadingComponent from "./components/PostLoading";
import axios from "axios"

const Admin = () => {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: true,
        posts: null,
    });

    useEffect(() => {
       axios.get().then((res) => {
           const allPosts = res.data;
           setAppState({loading: false, posts: allPosts});
           console.log(res.data)
       })
    }, [setAppState]);


    return (
        <div className="App">
            <h1>Latest Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    )
}

export default Admin
