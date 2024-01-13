
import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from "./components/Sidebar";


import styles from './App.module.css';
import './global.css'


export function App() {


  return (
    <>
      <Header />

      <div className={styles.wraper}>
        <Sidebar/>
        <main>
          <Post
            author="Paulo Henrique"
            content="Lorem uhduash dusaduhsaudhasdh as hduas hduash duash  d asdasdashduashd uashdu ashdu" />
          <Post
            author="Teste"
            content="Lorem uhduash dusaduhsaudhasdh as hduas hduash duash  d asdasdashduashd uashdu ashdu" />
        </main>
      </div>

    </>

  )
}

