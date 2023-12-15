import styles from './Header.module.scss'
import Logo from '../../../../assets/images/logo.png'

export const Header: React.FC = () => {
    return (
        <div
            className={styles.header}
        >
            <img
                className={styles.logo}
                src={Logo}
            />
        </div>
    )
}