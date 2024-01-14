
import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css';
import './global.css'

// author: { avatar_url: "", name: "" , role: ""}
// publishedAt:  Date
// content: String


const posts = [
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Mayk Brito',
      role: 'Educator @RockeSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir um novo projeto em meu portifólio' },
      { type: 'link', content: 'jane.design/doctorcars' }
    ]
    ,
    publishedAt: new Date('2024-01-13 16:35:33')
  },
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Paulo Henrique',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir um novo projeto em meu portifólio' },
      { type: 'link', content: 'jane.design/doctorcars' }
    ]
    ,
    publishedAt: new Date('2023-01-10 16:35:33')
  },

]


export function App() {


  return (
    <>
      <Header />

      <div className={styles.wraper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                 />
            )
          })}
        </main>
      </div>

    </>

  )
}

