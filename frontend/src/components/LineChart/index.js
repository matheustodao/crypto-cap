import PropTypes from 'prop-types';
import { ResponsiveLine } from '@nivo/line';

export default function LineChart({ data }) {
  const isNegative = data[data.length - 1].y < 0;

  return (
    <ResponsiveLine
      data={[
        {
          id: 'data',
          data,
        },
      ]}
      curve="cardinal"
      colors={[isNegative ? 'rgb(244, 117, 96)' : '#0FAE96']}
      enableSlices={false}
      crosshairType="cross"
      xScale={{
        type: 'point',
      }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      axisLeft={false}
      axisBottom={false}
      enableArea
      areaOpacity={0.05}
      areaBaselineValue={isNegative && -170}
      margin={{
        top: 10,
        right: 25,
        bottom: 10,
        left: 10,
      }}
      isInteractive
    />
  );
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
