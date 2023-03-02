import { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import productsOperations from 'redux/products/productsOperations';

// Components
import InputField from 'components/InputField/InputField';
import { AiOutlineDelete } from 'react-icons/ai';

// Styles
import s from './CommentsList.module.scss';

export default function CommentsList({ comments, productId }) {
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  // Handlers
  const handleOnChangeComment = e => {
    setComment(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(productsOperations.addCommentByProductId({ productId, comment }));

    setComment('');
  };

  const handleDeleteBtn = commentId => {
    dispatch(
      productsOperations.deleteCommentByProductId({ productId, commentId })
    );
  };

  return (
    <div className={s.sectionWrapper}>
      <h2 className={s.titleComments}>Comments</h2>
      <div className={s.commentsWrapper}>
        <ul className={s.listComments}>
          {comments.map(item => (
            <li className={s.itemComment} key={item._id}>
              <p className={s.description}>{item.description}</p>
              <p className={s.date}>{item.date}</p>
              <button
                className={s.buttonDelete}
                onClick={() => {
                  handleDeleteBtn(item._id);
                }}
              >
                <AiOutlineDelete size={20} />
              </button>
            </li>
          ))}
        </ul>
        <form className={s.form}>
          <InputField
            inputTitle="Add comment"
            type="text"
            name="comment"
            onChange={handleOnChangeComment}
            value={comment}
          />
          <button className={s.btnSubmit} onClick={handleOnSubmit}>
            Add comment
          </button>
        </form>
      </div>
    </div>
  );
}
