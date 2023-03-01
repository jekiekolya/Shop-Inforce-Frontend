// Styles
import s from './CommentsList.module.scss';

export default function CommentsList({ comments }) {
  return (
    <div className={s.commentsWrapper}>
      <h2 className={s.titleComments}>Comments</h2>
      <ul className={s.listComments}>
        {comments.map(item => (
          <li className={s.itemComment} key={item.id}>
            <p className={s.description}>{item.description}</p>
            <p className={s.date}>{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
