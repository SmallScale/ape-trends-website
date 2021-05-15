import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { IndicatorCollection } from "ape-trends/dist/utils";
import TrendsDashboard from "./trends/TrendsDashboards";

const App: React.FC = () => {
  const [apeTrends, setApeTrends] = useState<IndicatorCollection | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchApeTrends = async (): Promise<void> => {
    const { data: apeTrends } = await axios.get<IndicatorCollection>(
      "http://localhost:5000"
    );
    setApeTrends(apeTrends);
    setLoading(false);
  };

  useEffect(() => {
    fetchApeTrends();
  });

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "black" }}
      spacing={2}
    >
      <Grid item>
        <Card style={{ backgroundColor: "black" }}>
          <CardHeader
            title={
              <Card>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="column"
                >
                  <Grid item>
                    <Typography variant="h5" component="h1" align="center">
                      APE TRENDS
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Editorial_cartoon_depicting_Charles_Darwin_as_an_ape_%281871%29.jpg"
                      width="128px"
                      alt="OG APE"
                    />
                  </Grid>
                </Grid>
              </Card>
            }
          />
          <Typography variant="h5" component="h2" align="center">
            COINS
          </Typography>
          <CardContent>
            {loading || !apeTrends ? (
              <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item>
                  <CircularProgress color="secondary" />
                </Grid>
              </Grid>
            ) : (
              <TrendsDashboard apeTrends={apeTrends} />
            )}
          </CardContent>

          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default App;
