import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react';
import { Avatar } from './Avatar';
export function Comment({content, onDeleteComment}) {

 const [ likeCount, setLikeCount] = useState(0)

function handleDeleteComment (){
    console.log("Deletar")
    onDeleteComment(content)
}

function handleLikeCount (){

    setLikeCount(likeCount + 1)
}

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>paulo Henrique</strong>
                            <time title='11 de maio de 2024' dateTime='22-11-21 23:22:11'>
                                A cerca de uma hora atras  </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}