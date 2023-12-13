import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchgreeting } from "../slices/greetingSlice";
const Greeting = () => {
    const {greeting, isLoading} = useSelector(state => state.greeting);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchgreeting());
    }, [dispatch]);

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Random Greetings</h1>
            <p>{greeting.message}</p>
        </div>
    );
};

export default Greeting;