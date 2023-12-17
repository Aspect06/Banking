import styles from './TransactionsItem.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export const TransactionsItem: React.FC<{
    Transaction: any
    setLoadedTransactions: any
}> = (props) => {
    return (
        <div
            className={styles.transactionsItem}
        >
            <div
                className={styles.accountType}
            >
                <FontAwesomeIcon
                    icon={faBuildingColumns}
                    style={{
                        color: 'white',
                        fontSize: '2vh',
                        marginTop: '1vh',
                        marginLeft: '1vh',
                        paddingRight: '0.5vh'
                    }}
                />
                {props.Transaction.Account}

                <div
                    className={styles.splitter}
                />

                <div
                    style={{
                        color: 'green'
                    }}
                >
                    <FontAwesomeIcon
                        icon={faMoneyBill}
                        style={{
                            color: 'green',
                            fontSize: '2vh',
                            marginTop: '1vh',
                            marginLeft: '1vh',
                            paddingRight: '0.5vh'
                        }}
                    />
                    ${props.Transaction.Amount}
                </div>

                <div
                    style={{
                        position: 'absolute',
                        right: '1vh',
                        marginTop: '-2.75vh'
                    }}
                >
                    {Date()}
                </div>

                <div
                    className={styles.Comment}
                >
                    Comment: {props.Transaction.Comment}
                </div>
            </div>
        </div>
    )
}