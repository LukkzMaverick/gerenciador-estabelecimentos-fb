import { CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StyledDiv from '../css/admin/Login';
import { fetchCadastrarEmpresa, resetCadastrarEmpresaSlice } from '../../store/slicers/async/cadastrarEmpresa';

const CadastrarEmpresa = () => {

    const [mostrarAlert, setMostrarAlert] = useState(false)
    const [alertSeverity, setAlertSeverity] = useState('error')
    const [mensagensAlert, setMensagensAlert] = useState([])
    const dispatch = useDispatch()
    const cadastrarEmpresaState = useSelector((state) => state.empresa.cadastrarEmpresa)
    const [form, setForm] = useState({
        nome: '',
        tipo: '',
    })
    const [sendable, setSendable] = useState(true)

    useEffect(() => {
        document.addEventListener('keypress', enviarFormPeloEnter)
        return () => {
            document.removeEventListener('keypress', enviarFormPeloEnter)
            dispatch(resetCadastrarEmpresaSlice())
        };

        function enviarFormPeloEnter(e) {
            if (e.key === 'Enter') {
                let botaoLogin = document.querySelector('#botaoLogin')
                botaoLogin.click()
            }
        }

    }, [])

    function resetForm(){
        setForm({
            nome: '',
            tipo: '',
        })
    }

    function formHandler(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (cadastrarEmpresaState.error) {
            let erros = [];
            cadastrarEmpresaState.error.map((error, index) => {
                return erros.push(<li key={index} >{error.msg}</li>)
            })
            setMensagensAlert(erros)
            setMostrarAlert(true)
            setAlertSeverity('error')
        }
        return () => { };
    }, [cadastrarEmpresaState])

    const handleCadastro = async () => {
        try {
            setSendable(false)
            const response = await dispatch(fetchCadastrarEmpresa(form))
            if(response.payload.nome){
                const arrResposta = []
                arrResposta.push(<li>Empresa cadastrada com sucesso!</li>)
                setMensagensAlert(arrResposta)
                setMostrarAlert(true)
                setAlertSeverity('success')
                resetForm()
                setSendable(true)
            }
            //const user = response.payload.user
        } catch (error) {
            setSendable(true)
            resetForm()
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
                    <h2 className={['login__title', "centered-title"].join(" ")}>Cadastrar Empresa</h2>
                    {mostrarAlert ? <Alert closeText="Fechar" onClose={() => handleCloseAlert()} className={`alertError`} severity={alertSeverity}>
                        <ul>
                            {mensagensAlert}
                        </ul>
                    </Alert> : ''}

                    <label className={'login__label'} htmlFor='nome'>Nome</label>
                    <input onChange={formHandler} value={form.nome} className={'login__input'} id='nome' name='nome' type='text'></input>

                    <label className={'login__label'} htmlFor='tipo'>Tipo</label>
                    <input onChange={formHandler} value={form.tipo} className={'login__input'} id='tipo' name='tipo' type='text'></input>
                    
                    {cadastrarEmpresaState.loading ? <CircularProgress size={40}></CircularProgress> : ''}
                    <button id={'botaoLogin'} type='button' onClick={() => handleCadastro()} className={'login__button'}>Enviar</button>
                </form>
            </StyledDiv>
        </>
    )
}

export default CadastrarEmpresa

