
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'

import styles from './Post.module.css'
import { ptBR } from 'date-fns/locale';


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}


interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[]
}

 interface PostProps {
    post: PostType
}

export function Post({ post} : PostProps) {

    const [comments, setComments] = useState([
        'Post muito banana em'
    ])



    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const isNewCommentEmpty = newCommentText.length === 0;
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })


    function handleCreateNeewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {

        const commentsWithoutDeleteOne = comments.filter((comment) => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }


    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedAtFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>


            <div className={styles.content}>
                {
                    post.content.map(line => {
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