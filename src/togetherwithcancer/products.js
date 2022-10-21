import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

function Products() {
  return (
    <div className="elementor-container elementor-column-gap-extended">
      <Grid container spacing={3}>
        {[
          {
            title: "Bitter kola",
            image: require("./bitterkola.jpeg"),
            discription:
              "This is medication for centuries in folk medicine to treat cancer, its a species of flowering plant belonging to the Mangosteen genus Garcinia of the family Clusiaceae",
          },
          {
            title: "Kola nut",
            image: require("./kolanut.webp"),
            discription:
              "The kola nut is a very high medication for batteling cancer which is a caffeine-containing nut of evergreen trees of the genus Cola, primarily of the species Cola acuminata and Cola nitida.",
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant="outlined" sx={{height: "100%"}}>
              <CardMedia
                component="img"
                sx={{ height: "200px" }}
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.discription}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
