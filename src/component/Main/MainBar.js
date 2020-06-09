import React, { Component } from 'react'
// import './Navbar';
import styled, {css} from 'styled-components'
import { MainContext } from '../Main/MainProvider';


const Bar = styled.div`
    display: grid;
    padding: 10px;
    grid-template-columns: 850px auto 80px 100px;
`

const Logo = styled.div`
    font-size: 1.5em;
`
const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
    color: blue;
    `}
`

function ControlButton({name}) {
    return(
       <MainContext.Consumer>
           {({page, setPage}) => (
           <ControlButtonElem 
           active={page === name}
           onClick={()=> setPage(name)}>
                {name}
            </ControlButtonElem>
    )}
        </MainContext.Consumer>
    )
}

export default class Navbar extends Component {
    render() {
        return (
            <Bar>
               <ControlButton active name="main" />
               <ControlButton name="coins" />
            </Bar>
        )
    }
}