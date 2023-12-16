import { Button, ButtonGroup, Typography } from '@mui/material'

import styles from './Accounts.module.scss'
// import styles from './BusinessAccounts.module.scss'

export const BusinessAccounts: React.FC<{
    accountName: string
    accountBalance: number
    setDepositModal: any
}> = (props) => {
    return (
        <div
            className={styles.accountCard}
        >
            <div
                className={styles.accountInformation}
            >
                <Typography
                    className={styles.accountName}
                >
                    {props.accountName}
                </Typography>

                <Typography
                    className={styles.accountBalance}
                >
                    Balance: ${props.accountBalance}
                </Typography>
            </div>

            <div
                className={styles.accountActions}
            >
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Button
                        variant="contained" color="success"
                        className={styles.actionButton}
                        onClick={() => {
                            props.setDepositModal(true);
                        }}
                    >
                        Deposit
                    </Button>
                    <Button
                        variant="contained" color="warning"
                        className={styles.actionButton}
                    >
                        Withdraw
                    </Button>
                    <Button
                        variant="contained" color="success"
                        style={{
                            backgroundColor: '#f0f0f0',
                            color: 'black'
                        }}
                        className={styles.actionButton}
                    >
                        Transfer
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}