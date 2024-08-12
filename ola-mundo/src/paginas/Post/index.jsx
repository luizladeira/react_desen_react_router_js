import './Post.css';
import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json';
import styles from "./Post.module.css";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    const parametros = useParams();
    //console.log(parametros);

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    //console.log(post);
    if (!post) {
        return <NaoEncontrada />
    }

    const postRecomendados = posts.filter( (post) => post.id !== Number(parametros.id)).sort( (a,b) => b.id - a.id ).slice(0,4);
    //console.log(postRecomendados);
    
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Posts Recomendados:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postRecomendados.map( (post) => 
                                    <li key={post.id}>
                                        <PostCard post={post} />
                                    </li>
                                )
                            }
                        </ul>

                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}