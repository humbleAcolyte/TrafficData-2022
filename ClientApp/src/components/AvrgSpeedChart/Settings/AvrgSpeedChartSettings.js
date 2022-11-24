import useAvrgSpeedChartSettings from './useAvrgSpeedChartSettings';
import TimeSelect from '../../inputs/TimeSelect/TimeSelect';
import DateInterval from '../../inputs/DateInterval/DateInterval';
import DirectionSelect from '../../inputs/DirectionSelect/DirectionSelect';
import Button from '../../inputs/Button/Button';
import './AvrgSpeedChartSettings.scss';

const AvrgSpeedChartSettings = (props) => {
    const {date, partition, direction, build} = useAvrgSpeedChartSettings(props);
    
    return (
        <div className='avrg-speed-settings-wrapper'>
            <div className='avrg-speed-settings-period'>
                <p className='text2'>Период:</p>
                <DateInterval
                    date1={date.startDate}
                    date2={date.endDate}
                    onChange={(date1, date2) => date.setDates(date1, date2)}
                />
            </div>
            <div className='avrg-speed-settings-dates'>
                <p className='text2'>Интервал:</p>
                <TimeSelect 
                    hours={partition.hours}
                    minutes={partition.minutes}
                    seconds={partition.seconds}
                    onChange={(h, m, s) => partition.setTime(h, m, s)}
                />
            </div>
            <div className='avrg-speed-settings-directions'>
                <p className='text2'>Направление: </p>
                <DirectionSelect
                    data={direction.directions}
                    dataKey={direction.dirKey}
                    dataName={direction.dirName}
                    defaultKey={direction.dirAct}
                    onChange={(directions) => direction.setDirections(directions)}
                />
            </div>
            <Button onClick={() => build()}>Построить</Button>
        </div>
    );
};

export default AvrgSpeedChartSettings;