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
                        paddingRight: '1vh'
                    }}
                />
                {props.Transaction.Account}

                <div
                    className={styles.splitter}
                />

                <div
                    style={{
                        color: 'green',
                        paddingTop: '1vh',
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
                        marginTop: '-4vh',

                        textShadow: '2px 2px 2px rgba(0, 0, 0, 0.426)'
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