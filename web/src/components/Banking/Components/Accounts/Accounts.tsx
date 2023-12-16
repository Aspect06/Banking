import { Button, ButtonGroup, Typography } from '@mui/material'
import styles from './Accounts.module.scss'

export const Accounts: React.FC<{
    accountId: any
    accountName: string
    accountBalance: number
    setDepositModal: any
    setWithdrawModal: any
    setTransferModal: any
    selectedAccount: any
}> = (props) => {
    return (
        <div
            className={styles.accountCard}
            style={{
                border: props.accountId == props.selectedAccount ? '2px solid #fff' : ''
            }}
            onClick={() => {
                props.selectedAccount = props.accountId
            }}
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
                        onClick={() => {
                            props.setWithdrawModal(true);
                        }}
                    >
                        Withdraw
                    </Button>
                    <Button
                        variant="contained" color="success"
                        className={styles.actionButton}
                        style={{
                            backgroundColor: '#f0f0f0',
                            color: 'black'
                        }}
                        onClick={() => {
                            props.setTransferModal(true);
                        }}
                    >
                        Transfer
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}