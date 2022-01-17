import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props: { dataPoints: { value: number; label: string }[] }) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  /* The spread operator will pull all the values in the dataPointsValues array and feed them as an argument to the Math.max function */
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className={"chart"}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
