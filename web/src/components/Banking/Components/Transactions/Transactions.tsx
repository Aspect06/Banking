import React from 'react'

import styles from './Transactions.module.scss'

import { TransactionsItem } from './Components/TransactionsItem'
import { Button, CircularProgress } from '@mui/material'

export const Transactions: React.FC = () => {
    const [Loading, setLoading] = React.useState(false);
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
    ]);

    const [LoadedTransactions, setLoadedTransactions] = React.useState(0);
    const TransactionsLoad = 1

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
                        color={'gray'}
                    />
                </div>
            }

            {!Loading &&
                <>
                    {PlaceholderTransactions.map((data) => {
                        // console.log(LoadedTransactions)
                        // console.log(TransactionsLoad)
                        if (LoadedTransactions < TransactionsLoad) {
                            // TransactionsLoad = TransactionsLoad + 1
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
                            // onClick={() => TransactionsLoad = TransactionsLoad + 25}
                        >
                            Show More
                        </Button>
                    }
                </>
            }
        </div>
    )
}