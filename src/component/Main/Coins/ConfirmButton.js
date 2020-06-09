import React from 'react';
import styled from 'styled-components';
import {MainContext} from '../MainProvider'

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
`

const CenterDiv = styled.div`
    display: grid;
    justify-content: center
`

export default function() {
    return(

        <MainContext.Consumer>
            {({confirmFavorites}) => 
                <CenterDiv>
                    <ConfirmButtonStyled onClick={confirmFavorites}>
                        Confirm Favorites
                    </ConfirmButtonStyled>
                </CenterDiv>
            }
        </MainContext.Consumer>
    )
}
