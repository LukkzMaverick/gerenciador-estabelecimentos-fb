import { useContext, useEffect, useState } from 'react';
import history from '../../config/history';
import Alert from '@material-ui/lab/Alert';
import { CircularProgress } from '@material-ui/core';
import StyledDiv from '../css/admin/Login';
import { fetchLogar, resetLogarSlice } from '../../store/slicers/async/logar';
import { useDispatch, useSelector } from 'react-redux';
import http from '../../config/config';
import { saveLocalStorage, getToken } from '../../config/auth';
import { loginStore } from '../../store/slicers/user';

const Login = () => {

    const [mostrarAlertError, setMostrarAlertError] = useState(false)
    const [mensagensErro, setMensagensErro] = useState([])
    const dispatch = useDispatch() 
    const loginState = useSelector((state) => state.auth.login)
    const userState = useSelector((state) => state.auth.user)
    const [form, setForm] = useState({
        email: '',
        senha: '',
    })

    useEffect(() => {
        document.addEventListener('keypress', enviarFormPeloEnter)
        return () => {
            document.removeEventListener('keypress', enviarFormPeloEnter)
            dispatch(resetLogarSlice())
        };

        function enviarFormPeloEnter(e) {
            if (e.key === 'Enter') {
                let botaoLogin = document.querySelector('#botaoLogin')
                botaoLogin.click()
            }
        }

    }, [])

    function formHandler(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if(loginState.error){
            let erros = [];
            loginState.error.map((error, index) => {
                return erros.push(<li key={index} >{error.msg}</li>)
            })
            setMensagensErro(erros)
            setMostrarAlertError(true)
        }
      return () => {};
    }, [loginState])

    useEffect(() => {
        if(userState.userId){
            if(userState.role === 'superAdmin'){
                history.push('/cadastrarAdmins')
            }else if(userState.role ==='admin'){
                history.push('/')
            }else{
                history.push('/portal/home')
            }
        }
      return () => {};
    }, [userState])

    const handleLogin = async () => {
        try {
            const response = await dispatch(fetchLogar(form))
            const user = response.payload.user
            saveLocalStorage({token: response.payload.token, user})
            dispatch(loginStore(user))
            http.defaults.headers['x-auth-token'] = getToken();
            if(user.role === 'superAdmin'){
                history.push('/cadastrarAdmins')
            }else if(user.role ==='admin'){
                history.push('/')
            }else{
                history.push('/portal/home')
            }
        } catch (error) {
        }
    }

    return (
        <>
            <StyledDiv className='container'>
                <form className={'login'}>
                    <h2 className={['login__title', "centered-title"].join(" ")}>Login</h2>
                    {mostrarAlertError ? <Alert closeText="Fechar" onClose={() => setMostrarAlertError(false)} className={`alertError`} severity="error">
                        <ul>
                            {mensagensErro}
                        </ul>
                    </Alert> : ''}
                    <label className={'login__label'} htmlFor='email'>Email</label>
                    <input onChange={formHandler} value={form.email} className={'login__input'} id='email' name='email' type='email'></input>
                    <label className={'login__label'} htmlFor='senha'>Senha</label>
                    <input onChange={formHandler} value={form.senha} className={'login__input'} id='senha' name='senha' type='password'></input>
                    {loginState.loading ? <CircularProgress size={40}></CircularProgress> : ''}
                    <button id={'botaoLogin'} type='button' onClick={() => handleLogin()} className={'login__button'}>Entrar</button>
                </form>
            </StyledDiv>
        </>
    )
}

export default Login
