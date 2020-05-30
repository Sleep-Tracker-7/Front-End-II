import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

// import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
// import CardMedia from '@material-ui/core/CardMedia';
// import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';

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

function SleepCard(props) {
    const [data, setData] = useState({ hits: [] });
    const classes = useStyles();

    useEffect(async () => {
        const results = await axiosWithAuth()
            .get(`/sleep/`)
            .then(res => setData(res.data[props.match.params.index]))
            .catch(error => console.log('Error is: ', error))
    }, [])

    // console.log(data)
    return (
        <div className='sleepcard-page'>
            <h1>Hey</h1>
            <div>{data.start}</div>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {data.start ? data.start.split(' ')[0] : null}
                </Typography>
                <Typography>
                    {data.hours ? `Total hours of sleep ${data.hours}` : null}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small" color="primary">
                    View
                        </Button>
                <Button size="small" color="primary">
                    Edit
                        </Button>
                {data.end ? null : <Button size="small" color="primary">
                    Wake Up
                        </Button>}
            </CardActions> */}
        </div>
    )
}

export default SleepCard