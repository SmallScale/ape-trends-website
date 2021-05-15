import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Link,
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
      "https://plume-smart-milkshake.glitch.me"
    );
    setApeTrends(apeTrends);
    setLoading(false);
  };

  useEffect(() => {
    if (!apeTrends) {
      fetchApeTrends();
    }
  });

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ backgroundColor: "black", minHeight: "100vh" }}
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
          <CardContent>
            <Card>
              <Typography variant="h5" component="h2" align="center">
                Want to know how often strangers on the internet mention
                buying/selling/holding a crypto currency?
              </Typography>
              <Typography variant="body1" component="h2" align="center">
                Look no further, we can get you all the data you need to make
                incredibly poor decisions.
              </Typography>
              <Typography variant="body1" component="h2" align="center">
                That is if that data can be found on{" "}
                <Link
                  href="https://www.reddit.com/r/CryptoCurrency/"
                  component="a"
                  target="_blank"
                >
                  r/CryptoCurrency.
                </Link>
              </Typography>
              <Typography variant="caption" component="h2" align="center">
                Data from other subreddits and social media platforms might come
                soon or never!
              </Typography>
            </Card>
            <div style={{ height: "2rem" }} />
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
            <Link
              href="https://github.com/SmallScale/ape-trends"
              target="_blank"
              component="a"
            >
              <Typography color="error">Learn More</Typography>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default App;
