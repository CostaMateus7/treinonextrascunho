import Main from '../Components/Main';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}
