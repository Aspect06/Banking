import React from 'react';

import styles from "./Banking.module.scss";
import "./Components/Scroll.module.scss"

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
        Cash: 250,
        Accounts: [
            {
                name: 'Aspect Dev',
                balance: 25000
            },
        ],
        BusinessAccounts: [
            {
                name: 'Los Santos Police Department',
                balance: 250000
            },
            {
                name: 'Blaine County Sheriffs Office',
                balance: 250000
            },
            {
                name: 'San Andreas State Police',
                balance: 250000
            },
            {
                name: 'San Andreas State Park Rangers',
                balance: 250000
            },
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
                className={styles.App}
            >
                <div
                    className={styles.BankAppContainer}
                >
                    <Header
                        name={CharacterData.Name}
                        cash={CharacterData.Cash}
                    />

                    <Sidebar
                        accounts={CharacterData.Accounts}
                        businessaccounts={CharacterData.BusinessAccounts}
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