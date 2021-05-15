import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Trend from "./Trend";
import { IndicatorCollection } from "ape-trends/dist/utils";

type TrendsDashboardProps = {
  apeTrends: IndicatorCollection;
};

const TrendsDashboard: React.FC<TrendsDashboardProps> = ({ apeTrends }) => {
  const fullList = Object.values(apeTrends).sort(
    (trendA, trendB) => trendB.mentions - trendA.mentions
  );
  const mostPopular = Object.values(apeTrends)
    .sort((trendA, trendB) => trendB.mentions - trendA.mentions)
    .splice(0, 10);
  console.log(mostPopular);
  const [showFullList, setShowFullList] = useState<boolean>(false);

  const changeShowFullList = (): void => setShowFullList(!showFullList);

  return (
    <>
      <Grid container spacing={2} direction="row" justify="center">
        <Grid item>
          <Button
            variant="contained"
            color={showFullList ? "default" : "primary"}
            onClick={changeShowFullList}
          >
            List most popular
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={showFullList ? "primary" : "default"}
            onClick={changeShowFullList}
          >
            List all
          </Button>
        </Grid>
      </Grid>
      <div style={{ height: "2rem" }} />
      <Grid container spacing={2} direction="row" justify="flex-start">
        {Object.values(showFullList ? fullList : mostPopular).map(
          ({ name, symbol, buy, hold, sell }, i) => {
            const possibleTrends = [
              { name: "buy", value: buy },
              { name: "hold", value: hold },
              { name: "sell", value: sell },
            ];
            return (
              <Grid item style={{ width: "25%", height: "25%" }} xs={6}>
                <Trend
                  name={name}
                  symbol={symbol}
                  trend={
                    possibleTrends.sort((a, b) => b.value - a.value)[0].name as
                      | "buy"
                      | "hold"
                      | "sell"
                  }
                  i={i + 1}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </>
  );
};

export default TrendsDashboard;
