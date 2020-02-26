import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import ShopPage from "./components/pages/ShopPage/ShopPage";
import StockPage from "./components/pages/StockPage/StockPage";
import StockCreatePage from "./components/pages/StockCreatePage/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage/StockEditPage";
import ReportPage from "./components/pages/ReportPage/ReportPage";
import TransactionPage from "./components/pages/TransactionPage/TransactionPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(3)
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <div className={classes.root}>
          <Header />
          <Menu />
          <Container className={classes.content} maxWidth={false}>
            <div className={classes.toolbar} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/stock" component={StockPage} />

            <Route
              exact={true}
              path="/"
              component={() => <Redirect to="/login" />}
            />
          </Container>
        </div>
      </Switch>
    </Router>
  );
}
