import React from 'react'

import styles from './Transactions.module.scss'

import { TransactionsItem } from './Components/TransactionsItem'
import { Button } from '@mui/material'

export const Transactions: React.FC = () => {

    const [PlaceholderTransactions, setPlaceholderTransactions] = React.useState([
        {
            Account: 'Personal'
        }
    ])

    return (
        <div
            className={styles.transcationsContainer}
        >
            {PlaceholderTransactions.map((data, index) => {
                return (
                    <TransactionsItem
                        Transaction={data}
                    />
                )
            })}

            <Button
                className={styles.moreButton}
                variant={'contained'}
            >
                Show More
            </Button>
        </div>
    )
}