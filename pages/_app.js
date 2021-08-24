import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store from '../Redux/Store';
const GloabalStyle = createGlobalStyle`
 
  a,a:hover{
    text-decoration:none;
  }
  .row{
    margin:80px 0 !important;
  }
  h2{
    font-size:18px;
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Viessmann</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://www.designfreelogoonline.com/wp-content/uploads/2018/06/01001-modern-V-Logo-02.png"
        />
      </Head>
      <GloabalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
