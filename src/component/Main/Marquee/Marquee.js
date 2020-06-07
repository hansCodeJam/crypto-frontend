import React from 'react'
import Bitcoin from './SubMarquee.js/Bitcoin';
import Ethereum from './SubMarquee.js/Ethereum';
import styled from 'styled-components';
import MarqueeLayout from './MarqueeLayout';


export default function() {
    return <MarqueeLayout>
            <Bitcoin />
            <Ethereum />
           </MarqueeLayout>
}
