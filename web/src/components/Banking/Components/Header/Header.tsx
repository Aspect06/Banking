import styles from './Header.module.scss'
import { Typography } from '@mui/material'
import Logo from '../../../../assets/images/logo.png'

export const Header: React.FC<{
    name: string
    cash: number
}> = (props) => {
    return (
        <div
            className={styles.header}
        >
            <img
                className={styles.logo}
                src={Logo}
            />

            <Typography
                className={styles.CharacterName}
            >
                Welcome back, {props.name}.
            </Typography>

            <Typography
                className={styles.CashAmount}
            >
                You currently have <span style={{
                    color: 'green'
                }}>${props.cash} </span> in your wallet.
            </Typography>
        </div>
    )
}