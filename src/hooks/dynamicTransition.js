import {useState, useEffect} from 'react';

/*
    dynamicTransition.js : dynamic album effect using useEffect and useState

    When you find repeated logic behind the hook,make them as custom hook.
    Make the unique points as arguments. Keep the rest as backend functions.
    
    This is dynamic custom hook.
    
    First common hook sideEffect is interval.
    We are gonna change the index of the array with intervals
    with sideEffect.
    Third common hook sideEffect is dynamic delay and increment.
    With user interaction in HTML, dynamic manipulation of state is possible.
    and we can do it flexibly as demonstrated below.
     Within useEffect, setInterval method sets up interval with given time.
        it takes call back function and millisecond as argument.
        in that call back function, we can set up index.
        its call back = call back for current state index for relevant set up
*/
         
const DynamicTransition = (Data)=>{
    const length = Data.length;
    const [index, setIndex] = useState(0);

    const SECONDS = 1000;
    const delay = 9 * SECONDS;
    const increment = 1;

    useEffect(()=>{
        const interval = setInterval(
            ()=>setIndex(storedIndex=>(storedIndex+increment)%length),
            delay
        );
        return ()=>clearInterval(interval);//kills the interval when unmounted.
    },[delay, increment, length]);

    return Data[index];
};

export {DynamicTransition};
