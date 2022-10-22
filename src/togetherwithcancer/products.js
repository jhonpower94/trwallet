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
            image: require("./productimages/bitterkola.jpeg"),
          },
          {
            image: require("./productimages/scale.jpg"),
          },
          {
            image: require("./productimages/bags.jpg"),
          },
          {
            image: require("./productimages/cans.jpg"),
          },
          {
            image: require("./productimages/images.jpg"),
          },
          {
            image: require("./productimages/download.jpg"),
          },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant="outlined" >
              <CardMedia
                component="img"
                
                image={item.image}
                alt="green iguana"
              />

              <CardActions>
                <Button
                  size="small"
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    window.open(
                      "https://tawk.to/chat/6352ec70daff0e1306d3446e/1gftun61r",
                      "_blank"
                    );
                  }}
                >
                  Order now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;

/*
 <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.discription}
                </Typography>
              </CardContent>
              */
