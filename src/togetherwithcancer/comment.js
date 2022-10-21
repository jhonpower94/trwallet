import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

function Comments() {
  return (
    <Grid container spacing={2}>
      {[
        {
          title: "Surviving metastatic testicular cancer",
          discription:
            "Thanks for this wonderful medication recipe i was able to overcome metastatic testicular cancer in 2019 as adviced by a a medical oncologist from toppers",
          name: "Maxine Nunneta",
          rating: 5,
        },
        {
          title: "Colorblindness and colon cancer",
          discription:
            "Three days before Christmas 2017, i was diagnosed with Stage 4 colorectal cancer that had metastasized to my liver, After exploring so treatment, i was finally able to get through it thanks to this wonder medication and support from my family and friends ",
          name: "Abe Rosemary",
          rating: 4,
        },
        {
          title: "Breast cancer survivor",
          discription:
            "In 2011, i was losing weight for no apparent reason, an ultrasound discovered cancer at enlarged lymph nodes, after some treatment and surgery with no good tesults, i finally discovered about this wonder medicines which helped me recover fully",
          name: "Baharemi Buhadin",
          rating: 4,
        },
      ].map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card variant="outlined" sx={{height: "100%"}}>
            <CardContent>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                }}
              >
                <Rating name="read-only" value={item.rating} readOnly />
                <Typography ml={2}>{item.rating}+</Typography>
              </Box>

              <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
                {item.title}
              </Typography>

              <Typography variant="body1" sx={{ mb: 1.5 }}>
                {item.discription}
              </Typography>

              <Typography variant="body2">{item.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Comments;
