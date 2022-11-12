import styles from './Sidebar.module.css'
import { PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"  className={styles.cover}/>
            <div className={styles.profile}>
                <Avatar  hasBorder src="https://xesque.rocketseat.dev/users/avatar/profile-e7447002-cade-4c87-9c6e-09251b8dfcca.jpg"/>
                <strong>Thiago Diógenes</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}