import styled from 'styled-components';
import { Container as BootstrapContainer } from 'react-bootstrap'

const Container = styled(BootstrapContainer)`
padding: 1.5rem;
    h1{
        margin-bottom: 2rem;
    }
    .criarEstabelecimento{
    padding: 3rem 1rem;
    margin-bottom: 1em;
}
.criarEstabelecimento__form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.criarEstabelecimento__errorMessage, .criarEstabelecimento__sucessAlert{
    width: 100%;
    margin-bottom: 2rem;
}
.criarEstabelecimento__errorList,.criarEstabelecimento__select, .criarEstabelecimento__sucessAlert, .criarEstabelecimento__form label, .divCamposDinamicos, .criarEstabelecimento__form input{
    width: 100%;
    max-width: 600px;
}

.criarEstabelecimento__form input{
    padding: 0.5em;
    margin-top: 0.2em;
    margin-bottom: 1em;
    border-radius: 7px;
    
}
.criarEstabelecimento__title{
    margin-bottom: 1em;
}
.criarEstabelecimento__button{
    margin-top: 1em;
    color: white;
    background-color: var(--primary-color);
    padding: 0.5em;
    width:60%;
    max-width: 300px;
    border-radius: 5px;
    align-self: center;
    font-size: 1.2rem;
}
.criarEstabelecimento__button:hover{
    background-color:var(--primary-hover);
}

.criarEstabelecimento__select{
    
}
`

export default Container