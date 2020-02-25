import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginTop: 80
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default props => {
  const classes = useStyles();

  const showForm = ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting
  }) => {
    return (
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={handleChange}
          value={values.username}
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          onChange={handleChange}
          value={values.password}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <div style={{ textAlign: "center" }}>
          {/* Ternery condition */}
          {isSubmitting && (
            <CircularProgress size={30} style={{ color: "#F0F" }} />
          )}
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          className={classes.submit}
        >
          Register
        </Button>

        <Button
          type="button"
          fullWidth
          variant="text"
          onClick={() => props.history.goBack()}
        >
          Cancel
        </Button>

        <Grid container justify="flex-end"></Grid>
      </form>
    );
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        image={`${process.env.PUBLIC_URL}/images/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Register
        </Typography>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            // alert(JSON.stringify(values))
            // setSubmitting(false);
          }}
        >
          {props => showForm(props)}
        </Formik>
      </CardContent>
    </Card>
  );
};
