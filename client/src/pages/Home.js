import React from 'react';
import Navbar from '../component/Navbar';
import Menu from '../component/Menu';
import MessagePanel from '../component/MessagePanel';
import Grid from '@material-ui/core/Grid';

export default function Home()
{

    return (
        <Grid item container xs={12}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item xs={2}>
                <Menu />
            </Grid>
            <Grid item xs={10} >
                <MessagePanel />
            </Grid>
        </Grid>
    );
}