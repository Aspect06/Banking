import styles from './Header.module.scss'
import Logo from '../../../../assets/images/logo.png'
import { Typography } from '@mui/material'

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
                className={styles.name}
            >
                Welcome back {props.name}
            </Typography>

            <Typography
                className={styles.balance}
            >
                (${props.cash})
            </Typography>
        </div>
    )
}