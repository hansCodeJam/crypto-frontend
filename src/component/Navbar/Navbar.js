import React, { Component } from 'react'
import './Navbar';
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
        text-shadow: 0px 0px 60px #03ff03;
    `}
`

const toProperCase = (lower) => {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

// const ControlButton = ({name, active}) => {
//   <MainContext.Consumer>
//       <ControlButtonElem active={active}>
//           {toProperCase(name)}
//       </ControlButtonElem>
//   </MainContext.Consumer>
// }

export default class Navbar extends Component {
    render() {
        return (
            <Bar>
               
                <Logo>Cryptonite</Logo>
                <div/>
                {/* <ControlButton active name="main" />
                <ControlButton name="coins" /> */}
            </Bar>
        )
    }
}
