import React from 'react';
import styled from '@emotion/styled';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

const WeatherCard  = ({temp,condition,city,country}) => {
    let highColor=0;
    let lowColor=0; 
    let bg=null;
    if(temp>20)
    {
        let highColor=(1-((temp-20)/40))*255;
        let lowColor=highColor-150;
        bg=`linear-gradient(to top,rgb(255,${highColor},0),rgb(255,${lowColor},0))`;
    }
    else
    {
        let highColor=(1-((temp+20)/40))*255;
        let lowColor=highColor-150;
        bg=`linear-gradient(to top,rgb(0,${highColor},255),rgb(0,${lowColor},255))`;
    }

    
    const Card=styled.div`
            margin: 0 auto;
        background: ${bg};
        width: 200px;
        min-height: 280px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;`

    return ( 
        <Card>
            
            <Location city={city} country={country} />
            <Icon condition={condition} />
            <Condition temp={temp} condition={condition} />
        </Card>
     );
}
 
export default WeatherCard;