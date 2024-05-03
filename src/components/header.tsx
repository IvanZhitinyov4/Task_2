import * as React from 'react'
import { Box, Toolbar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {AppBar} from "@mui/material"
import { NavLink } from 'react-router-dom';


export default function Header() {

    function LoginRegisterMenu() {
        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

        const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
        return(
            <>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <NavLink to='/SingUp'>
                        <MenuItem onClick={handleClose} sx={{color: 'black'}}>
                            Регистрация
                        </MenuItem>
                    </NavLink>

                    <NavLink to='SingIn'>
                        <MenuItem onClick={handleClose} sx={{color: 'black'}}>
                            Войти
                        </MenuItem>
                    </NavLink>

                </Menu>
            </>
        );
    }

    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{bgcolor: '#9b19d2'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink to='/'>
                            Зомбе
                        </NavLink>
                    </Typography>
                    <LoginRegisterMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
}