import { useState, useCallback, useEffect, useRef } from 'react';


export function useInput(initialState){
    const [state, setstate] = useState(initialState);
    const onChange = useCallback((event) => {
        setstate(event.currentTarget.value);
    }, []);
    return {
        value: state,
        onChange
    }
}


export function useForm(initialValue){
    const [formValue, setFormValue] = useState(initialValue)
    
    const onChange = (event) => {
        event.preventDefault();
        const { target: {name}} = event;
        const { currentTarget: { value }} = event;
        setFormValue((prevState) => ({...prevState, [name]: value}))
    }
    return {
        formValue,
        onChange
    }
}


export function useIsMounted(){

    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);
    return isMounted
}