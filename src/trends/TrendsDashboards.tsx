import React from "react";
import { Grid } from "@material-ui/core";
import Trend from "./Trend";
import { IndicatorCollection } from "ape-trends/dist/utils";

type TrendsDashboardProps = {
  apeTrends: IndicatorCollection;
};

const TrendsDashboard: React.FC<TrendsDashboardProps> = ({ apeTrends }) => {
  return (
    <Grid container spacing={2} direction="row" justify="center">
      {Object.values(apeTrends).map(({ name, symbol, buy, hold, sell }, i) => {
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
      })}
    </Grid>
  );
};

export default TrendsDashboard;
