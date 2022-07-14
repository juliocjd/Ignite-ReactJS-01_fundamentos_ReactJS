import { Avatar } from './Avatar';
import { Comment } from './Comment.';
import styles from './Post.module.css';

export function Post(props){
  
  const publishedDateFormatted = new Intl.DateTimeFormat  ( 
    'pt-BR', {
      day: '2-digit',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    }
    ).format(props.publishedDateFormatted);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar  src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        
        <time title="22 de maio, às 08h15" dateTime="2022-05-22 08:15:50">{publishedDateFormatted}</time>
      </header>

      <div className={styles.content}>

    
      </div>
      <form className={styles.commentForm} action="">
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe seu comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}