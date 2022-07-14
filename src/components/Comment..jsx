import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBord={false} src="https://github.com/juliocjd.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Julio Justini</strong>
              <time title="22 de maio, às 08h15" dateTime="2022-05-22 08:15:50">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>

            </button>
          </header>
          <p>
            Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}