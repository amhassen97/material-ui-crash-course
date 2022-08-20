import Head from 'next/head'
import Image from 'next/image';

import React from "react";
import styles from '../styles/Home.module.css'
import TourCard from "../components/TourCard";
import { Container, Grid, Typography } from '@mui/material';
import cities from "../data/data.json";


export default function Home() {
  return (
    <div >
      <Container sx={{ marginY: 5 }} >

        {cities.map((city, index) => (
          <React.Fragment key={index}>
            <Typography
              variant='h4'
              component="h2"
              marginTop={5}
              marginBottom={3} >
              Top {city.name} Tours
            </Typography>

            <Grid container spacing={5}>

              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />

              ))}
             
            </Grid>
          </React.Fragment>
        ))
        }

      </Container>
    </div>
  )
}
