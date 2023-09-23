import { Alert, Button, Grid, Input, Snackbar, TextField } from "@mui/material"
import styles from "./style.module.css"
import { useState } from "react";
import { useRouter } from "next/router";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import * as React from 'react'

const Index = () => {
    const router = useRouter();

    const [dataLogin, setDataLogin] = useState({});
    const [open, setOpen] = useState(false);

    const doLogin = () => {
        console.log("do Login");
        console.log(dataLogin, "datalogin");
        if (dataLogin.username === 'admin123' && dataLogin.password === 'admin123') {
            router.push('/');
        } else {
            setOpen(true);
        }
    }

    const updateDataInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDataLogin((prev) => ({ ...prev, [name]: value }))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                Username atau Password Salah!!!
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div style={{ width: '100%' }}>
                    <div style={{ marginBottom: '15px', margin: '10px' }}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: '15px' }}>
                            <div style={{ width: '100%' }}>
                                <TextField type="text" name="username" fullWidth onChange={(e) => updateDataInput(e)} placeholder="Username" label="Username" />
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ width: '100%' }}>
                                <TextField type="password" name="password" fullWidth onChange={(e) => updateDataInput(e)} placeholder="Password" label="Password" />
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        <Button variant="contained" onClick={doLogin} fullWidth>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={action}
            >
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    Username Atau Password Salah!
                </Alert>
            </Snackbar>

            <div>
                <style jsx global>{`
                    html,
                    body {
                    padding: 0;
                    margin: 0;
                    font-family:
                        -apple-system,
                        BlinkMacSystemFont,
                        Segoe UI,
                        Roboto,
                        Oxygen,
                        Ubuntu,
                        Cantarell,
                        Fira Sans,
                        Droid Sans,
                        Helvetica Neue,
                        sans-serif;
                    }
                    * {
                    box-sizing: border-box;
                    }
                `}</style>
            </div>
        </div >
    )
}

export default Index;