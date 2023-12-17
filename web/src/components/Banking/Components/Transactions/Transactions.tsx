import React from 'react'

import styles from './Transactions.module.scss'

import { TransactionsItem } from './Components/TransactionsItem'
import { Button } from '@mui/material'

export const Transactions: React.FC = () => {

    const [PlaceholderTransactions, setPlaceholderTransactions] = React.useState([
        {
            Account: 'Personal',
            Amount: 100,
            Comment: 'Money or something...'
        },
        {
            Account: 'Personal',
            Amount: 100,
            Comment: 'Something or money...'
        },
    ])

    const [LoadedTransactions, setLoadedTransactions] = React.useState(0);
    const [TransactionsLoad, setTransactionsToLoad] = React.useState(25)

    return (
        <div
            className={styles.transcationsContainer}
        >
            <div
                className={styles.transactionHeader}
            >
                Transactions
            </div>

            {PlaceholderTransactions.map((data) => {
                // console.log(LoadedTransactions)
                // console.log(TransactionsLoad)
                // setLoadedTransactions(LoadedTransactions + 1)
                if (LoadedTransactions < TransactionsLoad) {
                    return (
                        <TransactionsItem
                            Transaction={data}
                            setLoadedTransactions={setLoadedTransactions}
                        />
                    )
                }
            })}

            {PlaceholderTransactions.length > TransactionsLoad &&
                <Button
                    className={styles.moreButton}
                    variant={'contained'}
                    onClick={() => setTransactionsToLoad(TransactionsLoad + 25)}
                >
                    Show More
                </Button>
            }
        </div>
    )
}