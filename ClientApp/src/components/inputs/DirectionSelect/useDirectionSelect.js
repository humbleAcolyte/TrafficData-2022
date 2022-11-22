import { useEffect, useState } from 'react';

const useDirectionSelect = (props) => {
    const data = props.data;
    const dataKey = props.dataKey;
    const dataName = props.dataName;
    
    const [values, setValues] = useState(props.defaultKeys);

    const changeHandler = props.onChange;

    const changeValues = (keys) => setValues(keys);

    useEffect(() => {
        changeHandler(values);
    });

    return {
        data,
        dataKey,
        dataName,
        keys: values,
        setKeys: changeValues
    };
};

export default useDirectionSelect;