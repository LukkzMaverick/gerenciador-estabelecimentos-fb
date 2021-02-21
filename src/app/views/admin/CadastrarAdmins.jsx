import { CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegistrarAdmin, resetRegistrarAdminSlice } from '../../store/slicers/async/registrarAdmin';
import StyledDiv from '../css/admin/Login';

const CadastrarAdmins = () => {

    const [mostrarAlert, setMostrarAlert] = useState(false)
    const [alertSeverity, setAlertSeverity] = useState('error')
    const [mensagensAlert, setMensagensAlert] = useState([])
    const dispatch = useDispatch()
    const registrarAdminState = useSelector((state) => state.auth.registrarAdmin)
    const [form, setForm] = useState({
        nome: '',
        email: '',
    })

    useEffect(() => {
        document.addEventListener('keypress', enviarFormPeloEnter)
        return () => {
            document.removeEventListener('keypress', enviarFormPeloEnter)
            dispatch(resetRegistrarAdminSlice())
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
        if (registrarAdminState.error) {
            let erros = [];
            registrarAdminState.error.map((error, index) => {
                return erros.push(<li key={index} >{error.msg}</li>)
            })
            setMensagensAlert(erros)
            setMostrarAlert(true)
            setAlertSeverity('error')
        }
        return () => { };
    }, [registrarAdminState])

    const handleCadastro = async () => {
        try {
            const response = await dispatch(fetchRegistrarAdmin(form))
            if(response.payload.email){
                const arrResposta = []
                const {email, senha} = response.payload
                arrResposta.push(<li>Credenciais de acesso:</li>)
                arrResposta.push(<li>Endereço de email: {email}</li>)
                arrResposta.push(<li>Senha: {senha}</li>)
                setMensagensAlert(arrResposta)
                setMostrarAlert(true)
                setAlertSeverity('success')
            }
            //const user = response.payload.user
        } catch (error) {
        }
    }

    function handleCloseAlert(){
        setMostrarAlert(false)
        setMensagensAlert([])
    }

    return (
        <>
            <StyledDiv>
                <form className={'login'}>
                    <h2 className={['login__title', "centered-title"].join(" ")}>Crie um novo administrador</h2>
                    {mostrarAlert ? <Alert closeText="Fechar" onClose={() => handleCloseAlert()} className={`alertError`} severity={alertSeverity}>
                        <ul>
                            {mensagensAlert}
                        </ul>
                    </Alert> : ''}

                    <label className={'login__label'} htmlFor='nome'>Primeiro Nome</label>
                    <input onChange={formHandler} value={form.nome} className={'login__input'} id='nome' name='nome' type='text'></input>

                    <label className={'login__label'} htmlFor='email'>Email</label>
                    <input onChange={formHandler} value={form.email} className={'login__input'} id='email' name='email' type='email'></input>
                    
                    {registrarAdminState.loading ? <CircularProgress size={40}></CircularProgress> : ''}
                    <button id={'botaoLogin'} type='button' onClick={() => handleCadastro()} className={'login__button'}>Enviar</button>
                </form>
            </StyledDiv>
        </>
    )
}

export default CadastrarAdmins

