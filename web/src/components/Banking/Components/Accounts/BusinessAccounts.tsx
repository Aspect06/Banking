import { Button, ButtonGroup, Typography } from '@mui/material'

import styles from './Accounts.module.scss'
// import styles from './BusinessAccounts.module.scss'

export const BusinessAccounts: React.FC<{
    accountId: any
    accountName: string
    accountBalance: number
    setDepositModal: any
    setWithdrawModal: any
    setTransferModal: any
    selectedAccount: any
    CharacterData: any
    setCharacterData: any
}> = (props) => {
    return (
        <div
            className={styles.accountCard}
            style={{
                border: props.accountId == props.selectedAccount ? '2px solid #fff' : ''
            }}
            onClick={() => {
                props.setCharacterData({
                    Name: props.CharacterData.Name,
                    StateId: props.CharacterData.StateId,
                    Cash: props.CharacterData.Cash,
                    selectedAccount: props.accountId,
                    Accounts: props.CharacterData.Accounts,
                    BusinessAccounts: props.CharacterData.BusinessAccounts
                })
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
                        disabled={props.accountId != props.selectedAccount}
                        onClick={() => {
                            props.setDepositModal(true);
                        }}
                    >
                        Deposit
                    </Button>
                    <Button
                        variant="contained" color="warning"
                        className={styles.actionButton}
                        disabled={props.accountId != props.selectedAccount}
                        onClick={() => {
                            props.setWithdrawModal(true);
                        }}
                    >
                        Withdraw
                    </Button>
                    <Button
                        variant="contained" color="success"
                        className={styles.actionButton}
                        disabled={props.accountId != props.selectedAccount}
                        color={'white'}
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