import useDateInterval from './useDateInterval';
import WidgetDatePicker from 'react-widgets/DatePicker';
import 'react-widgets/scss/styles.scss';
import './DateInterval.scss';

const DateInterval = (props) => {
    const {date1, date2, moveDate1, moveDate2} = useDateInterval(props);

    return (
        <div className='date-interval-wrapper'>
            <div className='date-interval-field'>
                <p className='text1'>с</p>
                <WidgetDatePicker
                    className='date-interval-input'
                    value={date1}
                    onChange={value => moveDate1(value)}
                    includeTime
                />
            </div>
            <div className='date-interval-field'>
                <p className='text1'>до</p>
                <WidgetDatePicker
                    className='date-interval-input'
                    value={date2}
                    onChange={value => moveDate2(value)}
                    includeTime
                />
            </div>
        </div>
    );
};

export default DateInterval;