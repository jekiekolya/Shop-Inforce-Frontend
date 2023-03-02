// Styles
import s from './InputField.module.scss';

export default function InputField(props) {
  const { inputTitle, ...inputSetting } = props;

  return (
    <label className={s.label}>
      <p className={s.inputTitle}>{inputTitle}</p>
      <input className={s.inputField} {...inputSetting} />
    </label>
  );
}
