import { InputLabel, Select } from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import { Container as BootstrapContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selecionarLocalizacao } from '../../store/slicers/selectFiltroLocalizacao'
import history from '../../config/history';
import { useAlert } from 'react-alert'
import { fetchLocalizacoes } from '../../store/slicers/async/localizacoes';

const BuscaPorLocalizacao = (props) => {
    const [localizacao, setLocalizacao] = useState('')
    const dispatch = useDispatch()
    const [localizacoes, setLocalizacoes] = useState([])
    const alert = useAlert()
    function handleSelectChange(event) {
        setLocalizacao(event.target.value)
        dispatch(selecionarLocalizacao(event.target.value))
        if(props.admin){
            history.push('/filtroLocalizacao')
        }else{
            history.push('/portal/filtroLocalizacao')
        }
    }

    const [mappable, setMappable] = useState(false)
    useEffect(() => {
        (async () => {
            const response = await dispatch(fetchLocalizacoes())
            if (response.payload[0]._id) {
                setLocalizacoes(response.payload)
                setMappable(true)
            } else {
                alert.show(<div style={{ fontSize: '1.8rem' }}>Não existem Localizações com estabelecimentos vinculados cadastrados!</div>, {
                    title: "Erro!",
                });
            }
        })()
        return () => { };
    }, [])

    return (
        <>
            <Container>
                <h1>Busca por Localização</h1>
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
                    {mappable ? localizacoes.map((loc) => {
                        return (
                            <Fragment>
                                <option value={loc._id}>{loc.nome}</option>
                            </Fragment>
                        )

                    }) : ''}

                </Select>
            </Container>
        </>
    )
}

export default BuscaPorLocalizacao

const Container = styled(BootstrapContainer)`
padding: 1.5rem;
    h1{
        margin-bottom: 2rem;
    }
    .select{
        max-width: 500px;
    }
`