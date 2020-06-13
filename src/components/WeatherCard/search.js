import React from 'react';
import styled from '@emotion/styled';

const Condition= ({condition,temp}) => {

    const Search =styled.h1`
        font-family: 'Fira Sans', sans-serif;
        font-size: 2rem;
        font-weight: 200;
        `

    return (  
        <Search>
            <input type="text"/>
        </Search>
    );
}
 
export default Condition;
