import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, Grid, Typography, Box, Rating } from '@mui/material';
import { AccessTime } from "@mui/icons-material";

import Image from 'next/image'
import Link from 'next/link';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    },
                },

                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    },
                }
            ]
        }
    }
})
const TourCard = ({tour}) => {

    return (
        <Grid item xs={3} >
            <ThemeProvider theme={theme}>

                <Paper elevation={3}  >
                    <img src={tour.image} className="img" alt='' />
                    <Box padding={1}>
                        <Typography variant="subtitle1" component="h2">
                        <Link href={`/tours/${tour.id}`}>{tour.name}</Link>  
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <AccessTime sx={{
                                width: 12.5,
                            }} />
                            <Typography variant='body2' component="p" marginLeft={0.5} >
                                {tour.duration} hours
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingX: 1,

                    }}
                        marginTop={3}
                    >
                        <Rating name='read-only' value={tour.rating} precision={0.5} size="small" readOnly />
                        <Typography variant='body2' component="p" marginLeft={0.5} >
                            {tour.rating}
                        </Typography>
                        <Typography variant='body3' component="p" marginLeft={1.5} >
                            ({tour.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    <Box marginX={1}>
                        <Typography variant='h6' component="h3" marginTop={0} >
                            From R{tour.price}
                        </Typography>
                    </Box>
                </Paper>

            </ThemeProvider></Grid>)
}

export default TourCard;