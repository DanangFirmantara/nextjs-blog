import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    const [auth, setAuth] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenuUser = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    const goToLogin = () => {
        router.push('/login')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge='start'
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        JDaeng
                    </Typography>
                    {auth ? (
                        <>
                            <IconButton
                                size="large"
                                aria-haspopup='true'
                                aria-controls="menu-appbar"
                                aria-label="account of current user"
                                color="inherit"
                                onClick={handleMenuUser}
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorEl}
                                onClose={handleCloseMenu}
                                open={Boolean(anchorEl)}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center'
                                }}
                            >
                                <MenuItem onClick={handleCloseMenu}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleCloseMenu}>
                                    My Account
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Button color="inherit" onClick={goToLogin}>
                            Login
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Index;