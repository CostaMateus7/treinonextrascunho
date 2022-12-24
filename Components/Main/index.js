import Footer from '../Footer';
import Navbar from '../Navbar';
import Styles from '../../styles/Main.module.css';

export default function Main({ children }) {
  return (
    <>
      <Navbar />
      <div className={Styles.MainStyle}>
        {children}
      </div>
      <Footer />
    </>
  );
}
