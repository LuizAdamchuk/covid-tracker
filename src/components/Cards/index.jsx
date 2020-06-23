import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import { format } from 'date-fns';

import { Container } from './style';

export const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!confirmed) {
    return '';
  } else {
    return (
      <Container>
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className="card infected">
            <CardContent>
              <Typography color="textSecondary" className="title" gutterBottom>
                {' '}
                Infectados
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" className="details">
                {'Última atualização: '}
                {format(new Date(lastUpdate), 'dd-MM-yyy')}
              </Typography>
              <Typography variant="body2">
                {' '}
                Número de casos ativos de COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className="card recovered">
            <CardContent>
              <Typography color="textSecondary" gutterBottom className="title">
                {' '}
                Recuperados
              </Typography>
              <Typography variant="h5">
                {' '}
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" className="details">
                {'Última atualização: '}
                {format(new Date(lastUpdate), 'dd-MM-yyy')}
              </Typography>
              <Typography variant="body2">
                {' '}
                Número de recuperados ativos de COVID-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={3} className="card deaths">
            <CardContent>
              <Typography color="textSecondary" gutterBottom className="title">
                {' '}
                Mortes
              </Typography>
              <Typography variant="h5">
                {' '}
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary" className="details">
                {'Última atualização: '}
                {format(new Date(lastUpdate), 'dd-MM-yyy')}
              </Typography>
              <Typography variant="body2">
                {' '}
                Número de óbitos de COVID-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    );
  }
};
