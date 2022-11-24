import useDirectionSelect from "./useDirectionSelect";
import Multiselect from 'react-widgets/Multiselect';
import 'react-widgets/scss/styles.scss';
import './DirectionSelect.scss';

const DirectionSelect = (props) => {
    const {data, dataKey, dataName, keys, setKeys} = useDirectionSelect(props);

    return (
        <Multiselect 
            className='direction-select'
            containerClassName='direction-select-input'
            data={data}
            dataKey={dataKey}
            textField={dataName}
            value={keys}
            onChange = {(value) => setKeys(value)}
        />
    );
};

export default DirectionSelect;