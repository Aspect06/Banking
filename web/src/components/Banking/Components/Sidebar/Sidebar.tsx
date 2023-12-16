import styles from './Sidebar.module.scss'
import '../Accounts/BusinessAccounts.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Accounts } from '../Accounts/Accounts'
import { BusinessAccounts } from '../Accounts/BusinessAccounts'

export const Sidebar: React.FC<{
    accounts: any
    businessaccounts: any
    selectedAccount: any
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
            <div className={styles.accountsCategoryHeader}>
                <FontAwesomeIcon 
                    icon={faInfoCircle}
                    style={{
                        paddingRight: '.5vh'
                    }}
                />
                Personal Accounts
            </div>

            {props.accounts.map((data, index) => {
                return (
                    <Accounts
                        accountId={data.accountId}
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

            {props.businessaccounts.length > 1 &&
                <div className={styles.accountsCategoryHeader}>
                    <FontAwesomeIcon 
                        icon={faBriefcase}
                        style={{
                            paddingRight: '.5vh'
                        }}
                    />
                    Business Accounts
                </div>
            }
            
            {props.businessaccounts.map((data, index) => {
                return (
                    <BusinessAccounts
                        accountId={data.accountId}
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