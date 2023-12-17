import styles from './Sidebar.module.scss'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import { Accounts } from '../Accounts/Accounts'
import { Tooltip } from '@mui/material';

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
            <Tooltip
                title={'Create Savings Account'}
                placement={'right'}
                arrow
            >
                <div
                    style={{
                        position: 'fixed',
                        display: 'flex',
                        right: '2vh',
                        zIndex: '1',
                        bottom: '3vh'
                    }}
                >
                    <Fab
                        color="success"
                        aria-label="add"
                        onClick={() => props.setAccountCreationModalState(true)}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            </Tooltip>

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