import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Layout from "../components/Layout";

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <Layout>
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 100 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={user.picture}
                    alt="user avatar"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {user.nickname}
                    </Typography>
                    <Typography variant="body2">{user.email}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </>
        </Layout>
      )}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: (error) => <ErrorMessage>{error.message}</ErrorMessage>,
});
