import React from 'react'
import styles from '../Modal.module.scss'
import { Button, ButtonGroup, CircularProgress, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography, Zoom } from '@mui/material';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faIdCard, faPiggyBank } from "@fortawesome/free-solid-svg-icons";

export const TransferModal: React.FC<{
    modalOpen: boolean;
    setModalOpen: any
}> = (props) => {
    const [Loading, setLoading] = React.useState(false);

    const [Amount, setAmount] = React.useState(0);
    const [Comment, setComment] = React.useState('');
    const [stateId, setStateId] = React.useState(0);
    const [AccountId, setAccountId] = React.useState(0);
    const [AccountType, setAccountType] = React.useState('Personal Account');

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
                            Transfer
                        </Typography>

                        <TextField
                            id="outlined-basic"
                            label="StateId"
                            variant="outlined"
                            value={stateId}
                            disabled={AccountType !== 'Personal Account'}
                            onChange={(e) => {
                                setStateId(Number(e.target.value))
                            }}
                            style={{
                                marginTop: '9vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faIdCard}/>
                                  </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Account Id"
                            variant="outlined"
                            value={AccountId}
                            disabled={AccountType === 'Personal Account'}
                            onChange={(e) => {
                                setAccountId(Number(e.target.value))
                            }}
                            style={{
                                marginTop: '2vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faPiggyBank}/>
                                  </InputAdornment>
                                ),
                            }}
                        />

                        <FormControl
                            style={{
                                marginTop: '2vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                        >
                            <InputLabel id="demo-simple-select-label">Target Account Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={AccountType}
                                label="Key Holder"
                                onChange={(e) => {
                                    setAccountType(e.target.value)
                                }}
                            >
                                <MenuItem
                                    value={'Personal Account'}
                                >
                                    Personal Account
                                </MenuItem>

                                <MenuItem
                                    value={'Savings Account'}
                                >
                                    Savings Account
                                </MenuItem>

                                <MenuItem
                                    value={'Business Account'}
                                >
                                    Business Account
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                            value={Amount}
                            onChange={(e) => {
                                setAmount(Number(e.target.value))
                            }}
                            style={{
                                marginTop: '2vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faDollarSign}/>
                                  </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Comment"
                            variant="outlined"
                            value={Comment}
                            onChange={(e) => {
                                setComment(e.target.value)
                            }}
                            multiline
                            rows={5}
                            style={{
                                marginTop: '2vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                        />

                        <div
                            className={styles.ButtonContainer}
                        >
                            <ButtonGroup>
                                <Button
                                    variant="contained" color="error"
                                    onClick={() => {
                                        props.setModalOpen(false);
                                        setAmount(0);
                                        setComment('');
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={() => {
                                        setLoading(true);

                                        setTimeout(() => {
                                            props.setModalOpen(false);
                                            setLoading(false);
                                        }, 1500)
                                    }}
                                >
                                    Transfer
                                </Button>
                            </ButtonGroup>
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