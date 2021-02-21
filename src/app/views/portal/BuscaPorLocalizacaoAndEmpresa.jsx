import {
    fetchEstabelecimentosByLocalizacaoAndEmpresa
} from '../../store/slicers/async/estabelecimentosByLocalizacaoAndEmpresa';
import { CircularProgress, InputLabel, Select } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { Container as BootstrapContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selecionarLocalizacao } from '../../store/slicers/selectFiltroLocalizacao'
import history from '../../config/history';
import { useAlert } from 'react-alert'
import { fetchLocalizacoesByEmpresa } from '../../store/slicers/async/localizacoesByEmpresa';
const BuscaPorLocalizacaoAndEmpresa = (props) => {
    const [localizacao, setLocalizacao] = useState('')
    const dispatch = useDispatch()
    const [localizacoes, setLocalizacoes] = useState([])
    const alert = useAlert()
    function handleSelectChange(event) {
        setLocalizacao(event.target.value)
        dispatch(selecionarLocalizacao(event.target.value))
        history.push('/portal/empresa/filtroLocalizacao')
    }
    const selectEmpresaState = useSelector((state) => state.empresa.selectEmpresa)
    const [mappable, setMappable] = useState(false)

    useEffect(() => {
        (async () => {
            const response = await dispatch(fetchLocalizacoesByEmpresa(selectEmpresaState.empresaId))
            if(response.payload.localizacoes.length > 0){
                setLocalizacoes(response.payload.localizacoes)
                setMappable(true)
            }else{
                alert.show(<div style={{ fontSize: '1.8rem' }}>Não existem Localizações com estabelecimentos vinculados cadastrados para esta empresa!</div>, {
                    title: "Erro!",
                  });
            
                } 
            
        })()
        return () => { };
    }, [])

    return (
        <>
            <Container>
                <h1>{`Busca por Localização - ${selectEmpresaState.nomeEmpresa}`}</h1>
                {mappable ?
                    <Fragment>
                    <InputLabel htmlFor="localizacao">Localização</InputLabel>
                <Select className='select' fullWidth={true}
                    native
                    value={localizacao}
                    onChange={(event) => handleSelectChange(event)}
                    inputProps={{
                        name: 'Localização',
                        id: 'localizacao',
                    }}
                >
                    <option aria-label="None" value="" />
                    {localizacoes.map((loc) => {
                            return (
                                <Fragment>
                                    <option value={loc._id}>{loc.nome}</option>
                                </Fragment>
                            )
                        
                    })}

                </Select>
                    </Fragment> : <CircularProgress size={65}></CircularProgress>}
            </Container>
        </>
    )
}

export default BuscaPorLocalizacaoAndEmpresa

const Container = styled(BootstrapContainer)`
padding: 1.5rem;
    h1{
        margin-bottom: 2rem;
    }
    .select{
        max-width: 500px;
    }
`