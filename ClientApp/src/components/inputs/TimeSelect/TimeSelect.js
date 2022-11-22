import useTimeSelect from './useTimeSelect';
import DropDownlist from 'react-widgets/DropdownList';
import 'react-widgets/scss/styles.scss';
import './TimeSelect.scss';

const TimeSelect = (props) => {
    const {hours, minutes, seconds, setHours, setMinutes, setSeconds} = useTimeSelect(props);

    return (
        <div className='timeSelector'>
            <div className='timeField'>
                <DropDownlist
                    className='timeInput'
                    data={[...Array(24).keys()]}
                    defaultValue={hours}
                    onChange={(value) => setHours(value)}
                />
                <p className='text2'>ч.</p>
            </div>
            <div className='timeField'>
                <DropDownlist
                    className='timeInput'
                    data={[...Array(60).keys()]}
                    defaultValue={minutes}
                    onChange={(value) => setMinutes(value)}
                />
                <p className='text2'>м.</p>
            </div>
            <div className='timeField'>
                <DropDownlist 
                    className='timeInput'
                    data={[...Array(60).keys()]}
                    defaultValue={seconds}
                    onChange={(value) => setSeconds(value)}
                />
                <p className='text2'>с.</p>
            </div>
        </div>
    );
};

export default TimeSelect;