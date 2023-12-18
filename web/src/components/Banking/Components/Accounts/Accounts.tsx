import React from 'react'
import { IconButton, Menu, MenuItem, Tooltip, Button, FormControl } from '@mui/material'
import styles from './Accounts.module.scss'
import { fetchNui } from '../../../../hooks/fetchNui'

import { FormatCurrency } from '../Utils'

export const Accounts: React.FC<{
    accountId: any
    canManage: any
    accountName: string
    accountBalance: number
    selectedAccount: any
    CharacterData: any
    setCharacterData: any
    accountType: any
    setDeleteAccount: any
    setManageAccess: any
}> = (props) => {
    const [AccountManageOpen, setAccountManageOpen] = React.useState(false);

    return (
        <div
            className={styles.accountCard}
            style={{border: props.accountId == props.selectedAccount.accountId ? '0.2vh solid #fff' : ''}}
            onClick={() => {
                props.setCharacterData({
                    Name: props.CharacterData.Name,
                    StateId: props.CharacterData.StateId,
                    Cash: props.CharacterData.Cash,
                    selectedAccount: {
                        accountId: props.accountId,
                        accountType: props.accountType
                    },
                    Accounts: props.CharacterData.Accounts,
                })
                
                fetchNui('swapAccount', {
                    AccountId: props.accountId,
                    AccountType: props.accountType
                })
            }}
        >
            <div
                className={styles.accountInformation}
            >
                {props.accountType == 'Savings Account' &&
                    <>
                        <Tooltip
                            title={'Manage Savings Account'}
                            placement={'right'}
                            arrow
                        >
                            <IconButton
                                style={{
                                    zIndex: 1,
                                    position: "absolute",
                                    height: "3vh",
                                    width: "3vh",
                                    marginBottom: "1vh",
                                    right: "1vh"
                                }}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    if (props.selectedAccount.accountId == props.accountId && props.canManage) {
                                        setAccountManageOpen(true)
                                    }
                                }}
                            >
                                <i
                                    className={"fa-solid fa-cog"}
                                    style={{
                                        fontSize: "2vh",
                                        color: props.selectedAccount.accountId == props.accountId && props.canManage ? 'white' : 'grey'
                                    }}
                                />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            id="basic-menu"
                            open={AccountManageOpen}
                            onClose={() => setAccountManageOpen(false)}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            style={{
                                marginTop: '16vh',
                                marginLeft: '37.5vh',
                                width: '17vh',
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    setAccountManageOpen(false);
                                    props.setManageAccess(true);
                                    fetchNui('Banking:getAccountAccess', props.CharacterData.selectedAccount)
                                }}
                            >
                                Manage Access
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setAccountManageOpen(false);
                                    props.setDeleteAccount(true);
                                }}
                            >
                                Delete Account
                            </MenuItem>
                        </Menu>
                    </>
                }

                <span
                    className={styles.accountName}
                >
                    {props.accountName} <span style={{
                        fontSize: '1.8vh',
                        padding: '0 0 0',
                        color: 'grey'
                    }}> (#{props.accountId}) </span>

                    <span>
                        <span style={{
                            position: 'relative',

                            display: 'flex',
                            flexDirection: 'column',

                            top: '0'
                        }}>
                            <span style={{
                                fontSize: '1.8vh',
                                padding: '0 0 0',
                                color: 'grey'
                            }}>
                                Balance: {FormatCurrency(props.accountBalance)}
                            </span>
                            <span style={{
                                fontSize: '1.6vh',
                                padding: '0 0 0',
                                color: 'grey'
                            }}>
                                {props.accountType}
                            </span>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}