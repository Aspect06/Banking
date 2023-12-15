import { Button, ButtonGroup, Typography } from '@mui/material'
import styles from './Accounts.module.scss'

export const Accounts: React.FC<{
    accountName: string
    accountBalance: number
    setDepositModal: any
}> = (props) => {
    return (
        <div
            className={styles.accountContainer}
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
                    {props.accountBalance}
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
                        className={styles.actionButton}
                        onClick={() => {
                            props.setDepositModal(true);
                        }}
                    >
                        Deposit
                    </Button>
                    <Button
                        className={styles.actionButton}
                    >
                        Withdraw
                    </Button>
                    <Button
                        className={styles.actionButton}
                    >
                        Transfer
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}