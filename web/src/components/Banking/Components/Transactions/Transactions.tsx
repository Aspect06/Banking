import React from 'react'

import styles from './Transactions.module.scss'

import { TransactionsItem } from './Components/TransactionsItem'
import { Button, ButtonGroup, CircularProgress, Typography } from '@mui/material'
import { useNuiEvent } from '../../../../hooks/useNuiEvent'

import { SentimentSatisfied } from '@material-ui/icons';

export const Transactions: React.FC<{
    setDepositModal: any
    setWithdrawModal: any
    setTransferModal: any
}> = (props) => {
    const [Loading, setLoading] = React.useState(false);
    const [Transactions, setTransactions] = React.useState([]);
    const [TransactionsToLoad, setTransactionsToLoad] = React.useState(25);

    useNuiEvent('Transactions:setTransactions', (data) => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setTransactions(data.Transactions)
        }, 1000)
    })

    return (
        <div
            className={styles.transcationsContainer}
        >
            <div
                className={styles.transactionHeader}
            >
                Transactions
            </div>

            {!Loading &&
                <div
                    style={{
                        position: 'absolute',
                        top: '1vh',
                        right: '1vh'
                    }}
                >
                    <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button
                            variant="contained" color="success"
                            className={styles.actionButton}
                            onClick={() => props.setDepositModal(true)}
                            style={{
                                height: '3.5vh',
                                width: '12vh',
                                fontSize: '1.25vh',
                            }}
                        >
                            Deposit
                        </Button>

                        <Button
                            variant="contained"
                            color="warning"
                            className={styles.actionButton}
                            onClick={() => props.setWithdrawModal(true)}
                            style={{
                                height: '3.5vh',
                                width: '12vh',
                                fontSize: '1.25vh'
                            }}
                        >
                            Withdraw
                        </Button>

                        <Button
                            variant="contained"
                            className={styles.actionButton}
                            onClick={() => props.setTransferModal(true)}
                            style={{
                                height: '3.5vh',
                                width: '12vh',
                                fontSize: '1.25vh'
                            }}
                        >
                            Transfer
                        </Button>
                    </ButtonGroup>
                </div>
            }

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
                    {Transactions.map((data, index) => {
                        if (TransactionsToLoad > index) {
                            return (
                                <TransactionsItem
                                    key={index}
                                    Transaction={data}
                                />
                            )
                        }
                    })}

                    {Transactions.length > TransactionsToLoad &&
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

            {!Loading && Transactions.length < 1 &&
                <div
                    className={styles.noTransactions}
                >
                    <SentimentSatisfied
                    />
                    <Typography component={'h1'}>No Transactions Found.</Typography>
                </div>
            }
        </div>
    )
}