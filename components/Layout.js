import React, { useContext, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import useStyles from "../utils/styles";
import { Store } from "../utils/store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Layout({ title, children, description }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: "dark",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };
  const logoutClickHandler = async () => {
    setAnchorEl(null);
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    router.push("/");
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title} - APPTITLE` : "APPTITLE"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Company Name</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <Switch checked={true}></Switch>
            <NextLink href="#/cart" passHref>
              <Link>
                <Badge color="secondary" badgeContent={3}>
                  Cart
                </Badge>
              </Link>
            </NextLink>
            {userInfo ? (
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={loginClickHandler}
                  className={classes.navbarButton}
                >
                  {userInfo.name}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={loginMenuCloseHandler}
                >
                  <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                  <MenuItem onClick={loginMenuCloseHandler}>
                    My account
                  </MenuItem>
                  <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            )}
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Company Name 2022.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
