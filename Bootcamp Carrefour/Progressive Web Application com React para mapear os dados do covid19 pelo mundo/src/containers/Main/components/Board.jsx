import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Grid from '../../../components/Grid'
import Skeleton from '../../../components/Skeleton'
import Card from './Card';
import { getByDisplayValue } from '@testing-library/react'

function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data;

    const getValue = (value) => value ? value : <Skeleton variant='text' width={182} height={60} />;


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Card value={getValue(todayCases)} label="Casos hoje" color="#F7BB29" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Card value={getValue(recovered)} label="Recuperações" color="#4da000" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Card value={getValue(deaths)} label="Total de mortes" color="#000000" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#E93000" />
            </Grid>
        </Grid>
    )
}


export default Board