import App, { AppProps } from 'next/app';

import NavBar from '../navigation/NavBar';
import '../styles/global.css';
import { Footer } from '../templates/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
