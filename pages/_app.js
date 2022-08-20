import '../styles/globals.css';

import SearchAppBar from '../components/AppBar';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <SearchAppBar />

      <Component {...pageProps} />


    </>
  )
}

export default MyApp
