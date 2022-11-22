import useGraphicBuild from './useGraphicBuild';
import TimeSelect from '../../inputs/TimeSelect/TimeSelect';
import DateInterval from '../../inputs/DateInterval/DateInterval';
import DirectionSelect from '../../inputs/DirectionSelect/DirectionSelect';
import Button from '../../inputs/Button/Button';
import './GraphicBuild.scss';

const GraphicBuild = (props) => {
    const {values, setDates, setTime, setDirections, sendData} = useGraphicBuild(props);
    
    return (
        <div className='GraphicBuild'>
            <p className='text2'>Период:</p>
            <DateInterval
                date1={values.date1}
                date2={values.date2}
                onChange={(date1, date2) => setDates(date1, date2)}
            />
            <p className='text2'>Интервал:</p>
            <TimeSelect 
                hours={values.partHours}
                minutes={values.partMinutes}
                seconds={values.partSeconds}
                onChange={(hours, minutes, seconds) => setTime(hours, minutes, seconds)}
            />
            <DirectionSelect
                data={values.dirData}
                dataKey={values.dirKey}
                dataName={values.dirName}
                defaultKey={values.dirValue}
                onChange={(dirs) => setDirections(dirs)}
            />
            <Button onClick={() => sendData()}>Построить</Button>
        </div>
    );
};

export default GraphicBuild;