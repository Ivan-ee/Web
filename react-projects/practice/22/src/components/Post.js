import './Post.css'

function Post({id, title, body}) {

    return (
        <div className="post">
            <h2>{title}</h2>
            <h2>My Id: {id}</h2>
            <p>{body}</p>
        </div>

    )
}

export default Post