import './Post.css';
import { useParams } from "react-router-dom";
import posts from 'json/posts.json';
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";

export default function Post(){
    const parametros = useParams();
    //console.log(parametros);

    const post = posts.find( (post) => {
        return post.id === Number(parametros.id);
    });

    //console.log(post);
    if(!post){
        return <h1>Post não encontrado....</h1>
    }

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className='post-markdown-container'>
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>   
        </PostModelo>     
    )
}