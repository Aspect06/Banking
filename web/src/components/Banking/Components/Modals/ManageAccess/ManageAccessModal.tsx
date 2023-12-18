import React from 'react'
import styles from '../Modal.module.scss'
import { Button, ButtonGroup, CircularProgress, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography, Zoom } from '@mui/material';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { fetchNui } from '../../../../../hooks/fetchNui';
import { useNuiEvent } from '../../../../../hooks/useNuiEvent';

export const ManageAccess: React.FC<{
    modalOpen: boolean
    setModalOpen: any
    accountId: any
}> = (props) => {
    const [Loading, setLoading] = React.useState(false);

    const [AddStateId, setAddStateId] = React.useState(0);
    const [ShareHolder, setShareHolder] = React.useState('');
    const [Access, setAccess] = React.useState([]);

    useNuiEvent('Banking:setAccountAccess', (Access) => {
        setAccess(Access)
    })

    return (
        <Zoom
            in={props.modalOpen}
            timeout={320}
        >
            <div
                className={styles.Wrapper}
            >
                {!Loading &&
                    <>
                        <Typography
                            className={styles.ModalHeader}
                        >
                            Manage Access
                        </Typography>

                        <TextField
                            id="outlined-basic"
                            label="State ID"
                            variant="outlined"
                            value={AddStateId}
                            onChange={(e) => {
                                setAddStateId(Number(e.target.value))
                            }}
                            style={{
                                marginTop: '9vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faIdBadge}/>
                                  </InputAdornment>
                                ),
                            }}
                        />

                        <Button
                            variant="contained"
                            color="success"
                            style={{
                                left: '54vh',
                                top: '2vh',
                                height: '3.25vh',
                                width: '6vh',
                                fontSize: '1vh'
                            }}
                            onClick={() => {
                                setLoading(true);

                                setTimeout(() => {
                                    setLoading(false);

                                    fetchNui('Banking:addSavingsAccess', {
                                        accountId: props.accountId,
                                        stateId: AddStateId
                                    })
                                }, 1000)
                            }}
                        >
                            Add
                        </Button>

                        <FormControl
                            style={{
                                marginTop: '5vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                        >
                            <InputLabel id="demo-simple-select-label">Share Holder</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={ShareHolder}
                                label="Key Holder"
                                onChange={(e) => {
                                    setShareHolder(e.target.value)
                                }}
                            >
                                <>
                                    {Access.length >= 1 &&
                                        <>
                                            {Access.map((data) => {
                                                return (
                                                    <MenuItem
                                                        value={data.stateId}
                                                        disabled={data.AccessType == 'Owner' ? true : false}
                                                    >
                                                        {data.Name}
                                                    </MenuItem>
                                                )
                                            })}
                                        </>
                                    }

                                    {Access.length < 1 &&
                                        <MenuItem
                                            disabled={true}
                                        >
                                            No Access Pulled
                                        </MenuItem>
                                    }
                                </>
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            color="error"
                            style={{
                                left: '52vh',
                                top: '2vh',
                                height: '3.25vh',
                                width: '7.75vh',
                                fontSize: '1vh'
                            }}
                            onClick={() => {
                                setLoading(true);

                                setTimeout(() => {
                                    setLoading(false);

                                    fetchNui('Banking:removeSavingsAccount', {
                                        accountId: props.accountId,
                                        stateId: ShareHolder
                                    })
                                }, 1000)
                            }}
                        >
                            Remove
                        </Button>

                        <div>
                            <div 
                                className={styles.ButtonContainer}
                            >
                                <Button
                                    color="error"
                                    style={{
                                        marginTop: '2vh'
                                    }}
                                    onClick={() => {
                                        props.setModalOpen(false);
                                        setAddStateId(0);
                                    }}
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </>
                }

                {Loading &&
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '3.5%'
                        }}
                    >
                        <div>
                            <CircularProgress
                                size={100}
                            />
                        </div>
                    </div>
                }
            </div>
        </Zoom>
    )
}