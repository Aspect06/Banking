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
    CharacterData: any
    setCharacterData: any
    accountType: any
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
                })
            }}
        >
            <div
                className={styles.accountInformation}
            >
                <span
                    className={styles.accountName}
                >
                    {props.accountName} | <span style={{
                        fontSize: '18px',
                        padding: '0 0 0',
                        color: 'grey'
                    }}> #{props.accountId} </span>



                    {/* ACCOUNT TYPE SECTION */}

                    <span>
                        <span style={{
                            position: 'relative',

                            display: 'flex',
                            flexDirection: 'column',

                            top: '0'
                        }}>
                            <span style={{
                                fontSize: '18px',
                                padding: '0 0 0',
                                color: 'grey'
                            }}>
                                Balance: ${props.accountBalance}
                            </span>
                            <span style={{
                                fontSize: '16px',
                                padding: '0 0 0',
                                color: 'grey'
                            }}>
                                {props.accountType} Account
                            </span>
                        </span>
                    </span>
                </span>
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
                        onClick={() => props.setDepositModal(true)}
                        style={{
                            height: '3.25vh',
                            width: '12vh',
                            fontSize: '1.25vh'
                        }}
                    >
                        Deposit
                    </Button>

                    <Button
                        variant="contained"
                        color="warning"
                        className={styles.actionButton}
                        disabled={props.accountId != props.selectedAccount}
                        onClick={() => props.setWithdrawModal(true)}
                        style={{
                            height: '3.25vh',
                            width: '12vh',
                            fontSize: '1.25vh'
                        }}
                    >
                        Withdraw
                    </Button>

                    <Button
                        variant="contained"
                        className={styles.actionButton}
                        disabled={props.accountId != props.selectedAccount}
                        onClick={() => props.setTransferModal(true)}
                        style={{
                            height: '3.25vh',
                            width: '12vh',
                            fontSize: '1.25vh'
                        }}
                    >
                        Transfer
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}