import React, {useEffect, useState} from 'react';
import Spinner from '../Spinner';
import CovidMap from './CovidMap';
import Legend from './Legend';
import LoadStatesTask from './Tasks/LoadStatesTask';
import LegendItems from './Entities/LegendItems';

const Covid19 = (props)=> {
    // const [isLoading, setIsLoading] = useState(true)
    const [statesIndia, setStatesIndia] = useState([]);
    const LegendItemsInReverse = [...LegendItems].reverse();

    const load = () => {
        const loadStatesTask = new LoadStatesTask();
        loadStatesTask.load(setStatesIndia);
    };

    useEffect(load,[]);

    return (
        <>
            <div className = "container-fluid">
                
                {(statesIndia || []).length===0 ? (
                    <Spinner /> 
                    ) : (
                    <div> 
                        <CovidMap statesIndia={statesIndia}/>
                        <Legend LegendItems={LegendItemsInReverse}/>
                    </div>
                    )}
            </div>
        </>
    );

};
export default Covid19;