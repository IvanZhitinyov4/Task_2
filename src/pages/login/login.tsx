import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {NavLink, useNavigate} from 'react-router-dom';
import {Controller, useForm, SubmitHandler} from 'react-hook-form';

import { TUserLoginInfo } from '../../types';
import { login } from '../../https/api';

export default function SignIn() {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm<TUserLoginInfo>();
    const onSubmit: SubmitHandler<TUserLoginInfo> = async(data) => {
        try {
            const response =  await login(data);
            if (response.data.success) {
                alert('Вы успешно вошли в свой аккаунт');
                navigate('/');
            }
        } catch(error: any) {
            if (error.response.status === 500)
                alert('Неверный логин или пароль или пользователь не существует');
            else
                alert('Ошибка сервера');
            console.log(error.response.data);
        }
    }

    return (
        <Container component="main" maxWidth="xs" sx={{justifyContent: 'center', display: 'flex'}}>
            <Box className='blank'>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginY: '10px'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Вход
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2} sx={{mt: 3}}>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name='name'
                                    render={({ field }) => (
                                        <TextField
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            autoComplete="given-name"
                                            name="Логин"
                                            required
                                            fullWidth
                                            id="Login"
                                            label="Логин"
                                            autoFocus
                                        />
                                    )}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    control={control}
                                    name='password'
                                    render={({ field }) => (
                                        <TextField
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            required
                                            fullWidth
                                            name="Пароль"
                                            label="Пароль"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        /> )} />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                    </form>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to="/SingUp">
                                <Link variant="body2">
                                    Ещё нет аккаунта? Зарегистрироваться
                                </Link>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
}