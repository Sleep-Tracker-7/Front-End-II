import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import SleepHist from './SleepHist'
import { useHistory } from "react-router-dom";
// import {BrowserRouter as Route} from 'react-router-dom'
// import AddSleepData from './AddSleepData'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export function Album() {
  let history = useHistory()
  const classes = useStyles();

  const [mySleep, setMySleep] = useState([])

  useEffect(() => {
    axiosWithAuth()
      .get('/sleep/')
      .then(results => {
        localStorage.setItem('token', results)
        console.log('SleepTracker.js', results)
        setMySleep(results.data)
      })
      .catch(error => console.log('Error is: ', error))
  }, [])

  function handleClick() {
    history.push("/add-sleep");
  }

  return (
    <React.Fragment>
    {/* <Route path='/add-sleep' component={AddSleepData} /> */}
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Your Sleep
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              No longer guestimate your ideal sleep, measure it!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handleClick}>
                    Get Some sleep
                  </Button>
                </Grid>
                <Grid item>
                  {/* <Button variant="outlined" color="primary">
                    Secondary action
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            {mySleep.length > 0 ? <SleepHist /> : null}
            <Grid container spacing={4}>
              {mySleep.map((sleep, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {sleep.start ? sleep.start.split(' ')[0] : null}
                      </Typography>
                      <Typography>
                        {sleep.hours ? `Total hours of sleep ${sleep.hours}` : null}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                        </Button>
                      <Button size="small" color="primary">
                        Edit
                        </Button>
                      {sleep.end ? null : <Button size="small" color="primary">
                        Wake Up
                        </Button>}
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Album
