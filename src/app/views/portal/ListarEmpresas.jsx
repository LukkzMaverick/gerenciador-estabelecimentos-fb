import React, { Fragment, useEffect, useState } from 'react'
import { Container as BootstrapContainer, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchGetEmpresasWithEstabelecimento } from '../../store/slicers/async/getEmpresasWithEstabelecimento';
import history from '../../config/history';
import { selecionarEmpresa } from '../../store/slicers/selectEmpresa';
import { useAlert } from 'react-alert'

const ListarEmpresas = () => {
    const alert = useAlert()
    const [empresas, setEmpresas] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            const response = await dispatch(fetchGetEmpresasWithEstabelecimento())
            if (response.payload[0]._id) {
                setEmpresas(response.payload)
            } else {
                alert.show(<div style={{ fontSize: '1.8rem' }}>Não existem empresas cadastradas com estabelecimentos associados!</div>, {
                    title: "Erro!",
                });
            }
        })()
        return () => { };
    }, [])

    function navigateToEstabelecimentosDaEmpresa(empresaId, nomeEmpresa) {
        dispatch(selecionarEmpresa({ empresaId, nomeEmpresa }))
        history.push('/portal/empresa')
    }

    function mountEmpresas() {


        if (empresas && empresas.length > 0) {
            return empresas.map((empresa) => {
                return (
                    <Fragment>
                        <tr key={empresa._id}>
                            <td className='item' onClick={() => navigateToEstabelecimentosDaEmpresa(empresa._id, empresa.nome)}
                                className='item'>
                                {empresa.nome}
                            </td>
                            <td>
                                {empresa.tipo}
                            </td>
                        </tr>
                    </Fragment>
                )
            })
        }
    }

    return (
        <>
            <Container>
                <h1>{'Empresas'}</h1>

                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mountEmpresas()}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ListarEmpresas

const Container = styled(BootstrapContainer)`
padding: 1.5rem;
    h1{
        margin-bottom: 2rem;
    }
    .item:hover{
        cursor: pointer;
        color: #0000EE;
    }
`