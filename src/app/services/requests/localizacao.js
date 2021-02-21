import http from '../../config/config';

const Localizacoes = () => http.get(`/localizacao`)

export {
    Localizacoes
}