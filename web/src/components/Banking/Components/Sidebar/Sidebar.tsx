import styles from './Sidebar.module.scss'
import { Accounts } from '../Accounts/Accounts'

export const Sidebar: React.FC<{
    accounts: any
    setDepositModalState: any
}> = (props) => {
    return (
        <div
            className={styles.sideBar}
        >
            {props.accounts.map((data, index) => {
                return (
                    <Accounts
                        accountName={data.name}
                        accountBalance={data.balance}
                        setDepositModal={props.setDepositModalState}
                    />
                )
            })}
        </div>
    )
}