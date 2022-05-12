import React, { memo, useCallback, useState, useEffect } from 'react';
import getCountry from '../../Api'
import Board from '../../containers/Main/components/Board'
import Panel from '../../containers/Main/components/Panel'
import { ContainerStyled } from './style';


function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleDateString();

    const getCovidData = useCallback((country) => {
        getCountry(country).then(data => setData(data));
    }, [])

    
    useEffect(() => {
        getCovidData(country);
    }, [getCovidData, country]);
    
    const handleChange = ({target}) => {
        const country = target.value;
        setCountry(country);
    }
    
    return (
        <ContainerStyled>
            <div className='mb-2'>
                <Panel data={data} updateAt={updateAt} onChange={handleChange} country={country} getCovidData={getCovidData}/>
            </div>
            <Board data={data} />
        </ContainerStyled>
    )
}


export default memo(Main);