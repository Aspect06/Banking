import styles from './Sidebar.module.scss'

import { Button } from '@mui/material';

import { Accounts } from '../Accounts/Accounts'

export const Sidebar: React.FC<{
    accounts: any
    selectedAccount: any

    setAccountCreationModalState: any

    setDepositModalState: any
    setWithdrawModalState: any
    setTransferModalState: any

    CharacterData: any
    setCharacterData: any
}> = (props) => {
    return (
        <div
            className={styles.Sidebar}
        >
            <Button
                variant="contained" color="success"
                className={styles.actionButton}
                onClick={() => props.setAccountCreationModalState(true)}
                style={{
                    height: '3.25vh',
                    width: '12vh',
                    fontSize: '1.25vh'
                }}
            >
                Create Account
            </Button>
            
            {props.accounts.map((data, index) => {
                return (
                    <Accounts
                        key={index}
                        accountId={data.accountId}
                        accountType={data.accountType}
                        accountName={data.name}
                        accountBalance={data.balance}
                        setDepositModal={props.setDepositModalState}
                        setWithdrawModal={props.setWithdrawModalState}
                        setTransferModal={props.setTransferModalState}
                        selectedAccount={props.selectedAccount}
                        CharacterData={props.CharacterData}
                        setCharacterData={props.setCharacterData}
                    />
                )
            })}
        </div>
    )
}