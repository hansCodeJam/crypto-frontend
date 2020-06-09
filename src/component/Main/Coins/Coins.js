import React from 'react'
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid'


export default function() {
   
            return (
                <Page name="coins">
                    <ConfirmButton />
                    <CoinGrid />
                </Page>
            )
}
