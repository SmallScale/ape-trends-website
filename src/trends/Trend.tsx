import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

type TrendProps = {
  name: string;
  symbol: string;
  trend: "buy" | "hold" | "sell";
  i: number;
};

const getTrendColor = (trend: "buy" | "hold" | "sell"): string => {
  let color = "";

  switch (trend) {
    case "buy":
      color = "primary";
      break;
    case "hold":
      color = "textSecondary";
      break;
    case "sell":
      color = "error";
      break;
  }
  return color;
};

const Trend: React.FC<TrendProps> = ({ name, trend, i, symbol }) => {
  return (
    <Card>
      <CardHeader
        title={
          <>
            <Typography
              variant="h5"
              component="h1"
              align="left"
              color="primary"
            >
              #{i}
            </Typography>
            <Typography variant="h4" component="h1" align="center">
              {name}
            </Typography>
            <Typography variant="caption" component="p" align="center">
              ${symbol}
            </Typography>
          </>
        }
      />
      <CardContent>
        <Typography variant="caption" component="p" align="center">
          TREND
        </Typography>
        <Typography
          variant="h4"
          component="p"
          color={
            getTrendColor(trend) as
              | "inherit"
              | "initial"
              | "primary"
              | "secondary"
              | "textPrimary"
              | "textSecondary"
              | "error"
              | undefined
          }
          align="center"
        >
          {trend}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Trend;
