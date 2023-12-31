import {useEffect, useState} from "react";
import Post from "./Post";


const API_URL = 'httceholder.typicode.com/posts'

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('httceholder.typicode.com/posts')
                const posts = await res.json()
                setPosts(posts)
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (<div>

        <h1>Posts</h1>
        <hr/>

        {isLoading
            ? <h1>Loading...</h1>
            : posts.map((post) => {
                return <Post key={post.id} {...post}/>
            })
        }

    </div>)
}

export default Posts