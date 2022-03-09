// import { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/store";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);
  return (
    <UserProvider>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </UserProvider>
  );
}

export default MyApp;
