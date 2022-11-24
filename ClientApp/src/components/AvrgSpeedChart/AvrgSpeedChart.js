import { ResponsiveLine } from '@nivo/line';
import AvrgSpeedChartSettings from './Settings/AvrgSpeedChartSettings';
import useAvrgSpeedChart from './useAvrgSpeedChart';
import './AvrgSpeedChart.scss';

const AvrgSpeedChart = (props) => {
    const { data, values, directions, directionKey, directionName, changeSettings } = useAvrgSpeedChart(props);

    return (
        <div className='avrg-speed'>
            <AvrgSpeedChartSettings 
                defaultStartDate={values.startDate}
                defaultEndDate={values.endDate}
                defaultHours={values.hours}
                defaultMinutes={values.minutes}
                defaultSeconds={values.seconds}
                directions={directions}
                directionKey={directionKey}
                directionName={directionName}
                onSubmit={(settings) => {
                  changeSettings(settings)
                }}
            />
            <div className='avrg-speed-chart-wrap'>
                <h1 className='avrg-speed-chart-tittle'>Средняя скорость</h1>
                <ResponsiveLine
                    data={data}
                    margin={{ top: 100, right: 40, bottom: 40, left: 40 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: '0',
                        max: 'auto',
                        stacked: false,
                        reverse: false
                    }}
                    curve='cardinal'
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0
                    }}
                    enableGridX={false}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    crosshairType='x'
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'top-right',
                            direction: 'column',
                            justify: false,
                            translateX: 0,
                            translateY: -80,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default AvrgSpeedChart;