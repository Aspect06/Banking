import React from 'react';
import styles from "./Banking.module.scss";
import { Slide } from "@mui/material";

import { Sidebar } from './Components/Sidebar/Sidebar';
import { Header } from './Components/Header/Header'; 
import { DepositModal } from './Components/Modals/Deposit/DepositModal'; 

export const Banking: React.FC = () => {
    const [Open, setOpen] = React.useState(true);

    const [DepositModalOpen, setDepositModalOpen] = React.useState(false);

    const [CharacterData, setCharacterData] = React.useState({
        Name: 'Aspect Dev',
        StateId: 1,
        Cash: 100,
        Accounts: [
            {
                name: 'Personal Account',
                balance: 200
            }
        ]
    })

    return (
        <Slide
            direction="up"
            in={Open}
            unmountOnExit
            mountOnEnter
        >
            <div
                className={styles.main}
            >
                <div
                    className={styles.Banking}
                >
                    <Header
                        name={CharacterData.Name}
                        cash={CharacterData.Cash}
                    />

                    <Sidebar
                        accounts={CharacterData.Accounts}
                        setDepositModalState={setDepositModalOpen}
                    />
                </div>

                <DepositModal
                    modalOpen={DepositModalOpen}
                    setModalOpen={setDepositModalOpen}
                />
            </div>
        </Slide>
    )
}