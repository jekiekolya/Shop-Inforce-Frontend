// React
import { Link } from 'react-router-dom';

// Icons
import logoImg from '../../assets/Images/logo.png';

// Styles
import s from './Logo.module.scss';

export default function Logo() {
  return (
    <Link to="/" className={s.link}>
      <img className={s.logo} src={logoImg} alt="logo" />
    </Link>
  );
}
