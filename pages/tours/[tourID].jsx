import { Box, Paper, Typography } from "@mui/material";
import { Container, display } from "@mui/system";
import { BottomNavigation } from "@mui/material";
import CustomizedAccordions from "../../components/Accordion";
import ImageCollage from "../../components/ImageCollage";
import data from "../../data/data.json";
import BasicModal from "../../components/Modal";

export async function getServerSideProps(ctx) {

    // console.log("context:", ctx);

    let { tourID } = ctx.params

    let tours = data.map(x => { return x.tours })
    tours = [].concat.apply([], tours);;

    // console.log("tours: ", tours)

    let tour = tours.filter(x => x.id == tourID)[0];

    // console.log("tour: ", tour)
    return {
        props: {
            tour,
        }, // will be passed to the page component as props
    }
}

const Tour = ({ tour }) => {
    // console.log("tour prop: ", tour)


    return (

        <Container sx={{ width: 900 }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                {tour.name}
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img src={tour.image} alt="" height={325} width={570} />
                <ImageCollage className="hideScrollBar" />
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque obcaecati omnis repellendus quidem et eos quaerat ipsa nemo optio, accusamus adipisci aliquid quia!
                    Iusto odit, eum dolore porro commodi pariatur optio ex eveniet soluta eligendi, illum vero animi at tempora!
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently asked questions
                </Typography>
                <Box marginBottom={2}>
                    <CustomizedAccordions  >
                    </CustomizedAccordions>
                </Box>
            </Box>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                >
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    );
};

export default Tour;