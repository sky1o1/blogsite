import React from "react";
import { useHistory } from "react-router";
import { Grid, Button, Card, Typography } from "@material-ui/core";

function UnauthorizedPage() {
  const history = useHistory();
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Card>
          <Button
            onClick={() => history.push("/login")}
            type="primary"
            key="console">
            Go Back to home
          </Button>
          <Typography variants="h1">
            You are unauthorized to view this page
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UnauthorizedPage;
