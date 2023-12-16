import { Button, ButtonGroup, Typography } from '@mui/material'
import styles from './BusinessAccounts.module.scss'

export const BusinessAccounts: React.FC<{
    accountName: string
    accountBalance: number
    setDepositModal: any
}> = (props) => {
    return (
        <div
            className={styles.businessAccountContainer}
        >
            <div
                className={styles.businessAccountInformation}
            >
                <Typography
                    className={styles.businessAccountName}
                >
                    {props.accountName}
                </Typography>

                <Typography
                    className={styles.businessAccountBalance}
                >
                    {props.accountBalance}
                </Typography>
            </div>

            <div
                className={styles.businessAccountActions}
            >
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    <Button
                        className={styles.businessActionButton}
                        onClick={() => {
                            props.setDepositModal(true);
                        }}
                    >
                        Deposit
                    </Button>
                    <Button
                        className={styles.businessActionButton}
                    >
                        Withdraw
                    </Button>
                    <Button
                        className={styles.businessActionButton}
                    >
                        Transfer
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}