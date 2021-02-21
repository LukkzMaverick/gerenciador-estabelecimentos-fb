import { useContext, useEffect, useState } from 'react';
import history from '../../config/history';
import Alert from '@material-ui/lab/Alert';
import { CircularProgress } from '@material-ui/core';
import StyledDiv from '../css/admin/Login';
import { fetchLogar } from '../../store/slicers/async/logar';
import { useDispatch, useSelector } from 'react-redux';
import http from '../../config/config';
import { saveLocalStorage, getToken } from '../../config/auth';
import { loginStore } from '../../store/slicers/user';
import { fetchRegistrar, resetRegistrarSlice } from '../../store/slicers/async/registrar';

const Cadastrar = () => {

    const [mostrarAlertError, setMostrarAlertError] = useState(false)
    const [mensagensErro, setMensagensErro] = useState([])
    const dispatch = useDispatch() 
    const registrarState = useSelector((state) => state.auth.registrar)
    const userState = useSelector((state) => state.auth.user)
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
    })

    useEffect(() => {
        document.addEventListener('keypress', enviarFormPeloEnter)
        return () => {
            document.removeEventListener('keypress', enviarFormPeloEnter)
            dispatch(resetRegistrarSlice())
        };

        function enviarFormPeloEnter(e) {
            if (e.key === 'Enter') {
                let botaoLogin = document.querySelector('#botaoLogin')
                botaoLogin.click()
            }
        }

    }, [])

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

    function formHandler(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if(registrarState.error){
            let erros = [];
            registrarState.error.map((error, index) => {
                return erros.push(<li key={index} >{error.msg}</li>)
            })
            setMensagensErro(erros)
            setMostrarAlertError(true)
        }
      return () => {};
    }, [registrarState])

    const handleCadastro = async () => {
        try {
            const response = await dispatch(fetchRegistrar(form))
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
                    <h2 className={['login__title', "centered-title"].join(" ")}>Cadastre-se</h2>
                    {mostrarAlertError ? <Alert closeText="Fechar" onClose={() => setMostrarAlertError(false)} className={`alertError`} severity="error">
                        <ul>
                            {mensagensErro}
                        </ul>
                    </Alert> : ''}

                    <label className={'login__label'} htmlFor='nome'>Primeiro Nome</label>
                    <input onChange={formHandler} value={form.nome} className={'login__input'} id='nome' name='nome' type='text'></input>

                    <label className={'login__label'} htmlFor='email'>Email</label>
                    <input onChange={formHandler} value={form.email} className={'login__input'} id='email' name='email' type='email'></input>
                    <label className={'login__label'} htmlFor='senha'>Senha</label>
                    <input onChange={formHandler} value={form.senha} className={'login__input'} id='senha' name='senha' type='password'></input>
                    {registrarState.loading ? <CircularProgress size={40}></CircularProgress> : ''}
                    <button id={'botaoLogin'} type='button' onClick={() => handleCadastro()} className={'login__button'}>Enviar</button>
                </form>
            </StyledDiv>
        </>
    )
}

export default Cadastrar
