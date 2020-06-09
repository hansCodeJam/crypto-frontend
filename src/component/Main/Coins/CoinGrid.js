import React from 'react';
import styled, {css} from 'styled-components';
import { MainContext } from '../MainProvider';

const CoinGridStyled = styled.div`
    display:grid;
`

export default function(){
    return <MainContext.Consumer>
            {({coinList}) => <CoinGridStyled>
                                {Object.keys(coinList).map.length}
                            </CoinGridStyled>}
           </MainContext.Consumer>
}