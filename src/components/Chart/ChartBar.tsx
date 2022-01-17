import "./ChartBar.css";

/**
 * This component renders the bars that are displayed on the chart
 * @param props
 * @constructor
 */
const ChartBar = (props: { value: any; maxValue: any; label: string }) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`;
  }
  return (
    <div className={"chart-bar"}>
      <div className={"chart-bar__inner"}>
        <div
          className={"chart-bar__fill"}
          style={
            /* the style attribute requires an object to be passed into it */
            {
              height: barFillHeight,
            }
          }
        />
      </div>
      <div className={"chart-bar__label"}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
