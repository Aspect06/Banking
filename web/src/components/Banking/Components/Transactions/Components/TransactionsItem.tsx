import styles from './TransactionsItem.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

export const TransactionsItem: React.FC<{
    Transaction: any
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
            </div>
        </div>
    )
}