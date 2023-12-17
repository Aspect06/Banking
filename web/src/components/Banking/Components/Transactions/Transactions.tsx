import React from 'react'

import styles from './Transactions.module.scss'

import { TransactionsItem } from './Components/TransactionsItem'
import { Button, CircularProgress } from '@mui/material'

export const Transactions: React.FC = () => {
    const [Loading, setLoading] = React.useState(false);
    const [PlaceholderTransactions, setPlaceholderTransactions] = React.useState([
        {Account: 'Personal', Amount: 100, Comment: 'Hi...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii...'},
        {Account: 'Personal', Amount: 100, Comment: 'Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'},
    ]);

    const [TransactionsToLoad, setTransactionsToLoad] = React.useState(25);

    // React.useEffect(() => {
    //     setLoading(true);

    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 1500)
    // })

    return (
        <div
            className={styles.transcationsContainer}
        >
            <div
                className={styles.transactionHeader}
            >
                Transactions
            </div>

            {Loading &&
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '22.5%'
                    }}
                >
                    <CircularProgress
                        size={125}
                        style={{
                            color: '#333537'
                        }}
                    />
                </div>
            }

            {!Loading &&
                <>
                    {PlaceholderTransactions.map((data, index) => {
                        if (TransactionsToLoad > index) {
                            return (
                                <TransactionsItem
                                    key={index}
                                    Transaction={data}
                                />
                            )
                        }
                    })}

                    {PlaceholderTransactions.length > TransactionsToLoad &&
                        <Button
                            className={styles.moreButton}
                            variant={'contained'}
                            onClick={() => setTransactionsToLoad(TransactionsToLoad + 5)}
                        >
                            Show More
                        </Button>
                    }
                </>
            }
        </div>
    )
}