/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Post muito banana em'
    ])

   

    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const isNewCommentEmpty = newCommentText.length === 0;
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNeewComment() {
        event.preventDefault()

        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {

        const commentsWithoutDeleteOne = comments.filter((comment) => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }


    function handleNewCommentInvalid(){
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>


            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content} >{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href="#"> {line.content} </a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNeewComment} className={styles.commentForm}>
                <strong>Deixe seu feeback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    
                />
                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>

                {comments.map(comment => {
                    return <Comment
                        content={comment}
                        key={comment}
                        onDeleteComment={deleteComment}
                    />
                })}
            </div>
        </article>
    )
}