import { useState } from "react";


export default function useAuth(initValues, onSubmitCallBack) {
    const [values, setValues] = useState(initValues);


    const changeHandler = (e) => {
        setValues(previous => ({
            ...previous,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        onSubmitCallBack(values)
    };

    return {
        values,
        changeHandler,
        submitHandler
    };
}