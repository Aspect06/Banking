import React from 'react';

import styles from "./Banking.module.scss";
import "./Components/Scroll.module.scss"

import { Button, Menu, MenuItem, Zoom } from "@mui/material";

import { Sidebar } from './Components/Sidebar/Sidebar';
import { Header } from './Components/Header/Header'; 

import { AccountCreation } from './Components/Modals/AccountCreation/AccountCreation';
import { DepositModal } from './Components/Modals/Deposit/DepositModal'; 
import { WithdrawModal } from './Components/Modals/Withdraw/WithdrawModal';
import { TransferModal } from './Components/Modals/Transfer/TransferModal';
import { DeleteAccount } from './Components/Modals/DeleteAccount/DeleteAccount';
import { ManageAccess } from './Components/Modals/ManageAccess/ManageAccessModal';

import { Transactions } from './Components/Transactions/Transactions';

import { useNuiEvent } from '../../hooks/useNuiEvent';
import { fetchNui } from '../../hooks/fetchNui';
import { isEnvBrowser } from '../../hooks/misc';

export const Banking: React.FC = () => {
    const [Open, setOpen] = React.useState(false);
    const [ToolsOpen, setToolsOpen] = React.useState(false);

    const [DepositModalOpen, setDepositModalOpen] = React.useState(false);
    const [WithdrawModalOpen, setWithdrawModalOpen] = React.useState(false);
    const [TransferModalOpen, setTransferModalOpen] = React.useState(false);
    const [DeleteAccountModal, setDeleteAccountModal] = React.useState(false);
    const [AccountCreationModalOpen, setAccountCreationModalOpen] = React.useState(false);
    const [ManageAccessModal, setManageAccessModal] = React.useState(false);

    const [CharacterData, setCharacterData] = React.useState({
        Name: 'Aspect Dev',
        StateId: 1,
        Cash: 250,
        savingsAvailable: false,
        selectedAccount: {
            accountId: 1,
            accountType: 'Personal Account',
        },
        Accounts: [
            {
                accountId: 1,
                accountType: 'Personal',
                name: 'James Williams',
                balance: 25000
            },
            {
                accountId: 2,
                accountType: 'Savings Account',
                name: 'Big Booty Latinas',
                balance: 25000,
                canManage: false
            },
            {
                accountId: 3,
                accountType: 'Business',
                name: 'Burger Shot',
                balance: 25000
            },
            {
                accountId: 4,
                accountType: 'Savings Account',
                name: 'LEO Budget',
                balance: 125000,
                canManage: true
            },
        ],
    })

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                fetchNui("Banking:Close");
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    useNuiEvent('Banking:setCharacterData', (data) => {
        setCharacterData(data)
    })

    useNuiEvent('Banking:Open', () => {
        setOpen(true);

        fetchNui('Banking:Opened')
    })

    return (
        <>
            {isEnvBrowser() &&
                <>
                    <Button
                        id="basic-button"
                        color={'success'}
                        aria-controls={ToolsOpen ? 'basic-menu' : undefined}
                        aria-haspopup={"true"}
                        aria-expanded={ToolsOpen ? 'true' : undefined}
                        onClick={() => setToolsOpen(true)}
                        variant={'contained'}
                        style={{
                            zIndex: 1,
                            position: 'absolute',
                            float: 'left',
                            top: '1vh',
                            left: '1vh'
                        }}
                    >
                        Tools
                    </Button>

                    <Menu
                        id="basic-menu"
                        open={ToolsOpen}
                        onClose={() => setToolsOpen(false)}
                        MenuListProps={{
                            'aria-labelledby' : 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => setOpen(true)}>Show Banking</MenuItem>
                        <MenuItem onClick={() => setOpen(false)}>Hide Banking</MenuItem>
                    </Menu>
                </>
            }

            <Zoom
                in={Open}
                timeout={750}
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
                            selectedAccount={CharacterData.selectedAccount}

                            setAccountCreationModalState={setAccountCreationModalOpen}
                            
                            CharacterData={CharacterData}
                            setCharacterData={setCharacterData}

                            setDeleteAccount={setDeleteAccountModal}

                            setManageAccessModal={setManageAccessModal}
                        />
                    </div>

                    <Transactions
                        setDepositModal={setDepositModalOpen}
                        setWithdrawModal={setWithdrawModalOpen}
                        setTransferModal={setTransferModalOpen}
                    />
                    
                    <AccountCreation
                        modalOpen={AccountCreationModalOpen}
                        setModalOpen={setAccountCreationModalOpen}
                    />

                    <DepositModal
                        modalOpen={DepositModalOpen}
                        setModalOpen={setDepositModalOpen}
                        selectedAccount={CharacterData.selectedAccount}
                    />

                    <WithdrawModal
                        modalOpen={WithdrawModalOpen}
                        setModalOpen={setWithdrawModalOpen}
                        selectedAccount={CharacterData.selectedAccount}
                    />

                    <TransferModal
                        modalOpen={TransferModalOpen}
                        setModalOpen={setTransferModalOpen}
                    />

                    <DeleteAccount
                        modalOpen={DeleteAccountModal}
                        setModalOpen={setDeleteAccountModal}
                        selectedAccountId={CharacterData.selectedAccount.accountId}
                    />

                    <ManageAccess
                        modalOpen={ManageAccessModal}
                        setModalOpen={setManageAccessModal}
                        accountId={CharacterData.selectedAccount.accountId}
                    />
                </div>
            </Zoom>
        </>
    )
}