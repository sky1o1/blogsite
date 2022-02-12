import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Box,
} from "@material-ui/core";
import { useFeedPage } from "../../hooks/component/useFeedPage";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles({
  root: {
    borderRadius: "10px",
    minHeight: "250px",
  },
  body: {
    height: "100%",
    width: "95%",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    minWidth: "350px",
    paddingBottom: "50px",
    paddingRight: "50px",
    paddingLeft: "50px",
  },
});

function Feeds() {
  const history = useHistory();
  const classes = useStyles();
  const skeletonArray = [1, 2, 3];
  const { data, isLoading } = useFeedPage();

  return isLoading ? (
    <Card variant="outlined" className={classes.body}>
      <Grid container spacing={2}>
        {skeletonArray.map((x) => (
          <Grid item xs={4} key={x}>
            <Box width={390} marginRight={0.5} my={5}>
              <Box pt={0.5}>
                <Skeleton />
              </Box>
              <Skeleton variant="rect" width={390} height={150} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  ) : (
    <>
      <Card variant="outlined" className={classes.body}>
        <Grid container spacing={2}>
          <CardContent
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
              width: "100%",
            }}>
            <Typography variant="h5">Blogs</Typography>
          </CardContent>

          {data && data.length <= 0 ? (
            <Grid container justifyContent="center">
              <Typography variant="h4">No blogs available.</Typography>
            </Grid>
          ) : (
            <>
              {data &&
                data.map((x, index) => (
                  <Grid
                    key={index}
                    item
                    xs={4}
                    style={{ cursor: "pointer" }}
                    onClick={() => history.push(`/blog-${x._id}`)}>
                    <Card
                      style={{
                        borderWidth: "2px",
                        borderColor: "#000",
                        boxShadow: "4px 4px #C0C0C0",
                      }}
                      className={classes.root}
                      variant="outlined">
                      <CardHeader
                        title={x.title}
                        subheader={moment(x.createdAt).format("MMM Do YY")}
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p">
                          {x.description.length > 250
                            ? `${x.description.slice(0, 250)}... Read More`
                            : x.description}
                        </Typography>
                      </CardContent>
                      <CardContent style={{ textAlign: "right" }}>
                        <Typography>-{x.user.name}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </>
          )}
        </Grid>
      </Card>
    </>
  );
}

export default Feeds;
