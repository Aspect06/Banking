import styles from './Sidebar.module.scss'
import '../Accounts/BusinessAccounts.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Accounts } from '../Accounts/Accounts'
import { BusinessAccounts } from '../Accounts/BusinessAccounts'

export const Sidebar: React.FC<{
    accounts: any
    businessaccounts: any
    setDepositModalState: any
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
                /> Personal Accounts
            </div>

            {props.accounts.map((data, index) => {
                return (
                    <Accounts
                        accountName={data.name}
                        accountBalance={data.balance}
                        setDepositModal={props.setDepositModalState}
                    />
                )
            })}

            <div className={styles.accountsCategoryHeader}>
                Business Accounts
            </div>
            
            {props.businessaccounts.map((data, index) => {
                return (
                    <BusinessAccounts
                        accountName={data.name}
                        accountBalance={data.balance}
                        setDepositModal={props.setDepositModalState}
                    />
                )
            })}

        </div>
    )
}