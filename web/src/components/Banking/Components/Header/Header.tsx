import styles from './Header.module.scss'
import { Typography } from '@mui/material'

export const Header: React.FC<{
    name: string
    cash: number
}> = (props) => {
    return (
        <div
            className={styles.header}
        >

            <Typography
                className={styles.CharacterName}
            >
                Welcome back, {props.name}.
            </Typography>

            <Typography
                className={styles.balance}
            >
                You currently have <span style={{
                    color: 'green'
                }}>${props.cash}.</span>
            </Typography>
        </div>
    )
}