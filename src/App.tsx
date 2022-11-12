import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://xesque.rocketseat.dev/users/avatar/profile-e7447002-cade-4c87-9c6e-09251b8dfcca.jpg',
      name: 'Thiago Diógenes',
      role: 'Front End Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' , content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link' , content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
      name: 'Amanda Sales',
      role: 'UX'
    },
    content: [
      {type: 'paragraph', content: 'Postagem sensacional!'},
      {type: 'paragraph' , content: 'Consegui aprender e praticar muito...'},
      {type: 'link' , content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-11-07 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
         {
           posts.map(post => {
             return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}

              />
             )
           })
         }
        </main>
      </div>
     
    </div>
  );
}
