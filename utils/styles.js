import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  navbarItem: {
    marginRight: 10,
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "85vh",
  },
  footer: {
    marginTop: 10,
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
});

export default useStyles;
