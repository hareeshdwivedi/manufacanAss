import ReactECharts from "echarts-for-react";
import React from "react";

interface ChartProps {
  xValues: {
    data: number[];
    name: string;
  };
  yValues: {
    data: number[];
    name: string;
  };
  title: string;
  type: string;
}

const Chart = ({ xValues, yValues, title, type }: ChartProps) => {
  const option = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: [title],
    },
    xAxis: {
      name: xValues.name,
      data: xValues.data,
    },
    yAxis: {
      name: yValues.name,
    },
    series: [
      {
        name: title,
        type: type,
        data: yValues.data,
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: 600 }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default Chart;
