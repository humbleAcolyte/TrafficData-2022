import useDateInterval from './useDateInterval';
import WidgetDatePicker from 'react-widgets/DatePicker';
import 'react-widgets/scss/styles.scss';
import './DateInterval.scss';

const DateInterval = () => {
    const {date1, date2, moveDate1, moveDate2, getInterval} = useDateInterval();

    return (
        <div className='DateInterval'>
            <div className='DateIntevalField'>
                <p className='text2'>с</p>
                <WidgetDatePicker className='DateIntevalInput'
                    value={date1}
                    onChange={value => moveDate1(value)}
                    includeTime
                />
            </div>
            <div className='DateIntevalField'>
                <p className='text2'>до</p>
                <WidgetDatePicker className='DateIntevalInput'
                    value={date2}
                    onChange={value => moveDate2(value)}
                    includeTime
                />
            </div>
        </div>
    );
};

export default DateInterval;