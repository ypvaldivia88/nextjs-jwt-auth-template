import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          <Grid item md={4} key={1}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random/300x200?sig=${Math.floor(
                    Math.random() * 10
                  )}`}
                  title="Amazing product #1"
                ></CardMedia>
                <CardContent>
                  <Typography>Amazing product #1</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>$ {Math.random().toFixed(2)}</Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} key={2}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random/300x200?sig=${Math.floor(
                    Math.random() * 10
                  )}`}
                  title="Amazing product #2"
                ></CardMedia>
                <CardContent>
                  <Typography>Amazing product #2</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>$ {Math.random().toFixed(2)}</Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={4} key={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random/300x200?sig=${Math.floor(
                    Math.random() * 10
                  )}`}
                  title="Amazing product #3"
                ></CardMedia>
                <CardContent>
                  <Typography>Amazing product #3</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>$ {Math.random().toFixed(2)}</Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
