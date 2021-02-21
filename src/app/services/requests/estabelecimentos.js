import http from '../../config/config';

const EstabelecimentosByLoggedUser = () => http.get('/estabelecimento/by/logged/user')
const GetOneEstabelecimentoByLoggedUser = (estabelecimentoId) => {
    return http.get(`/estabelecimento/getOne/${estabelecimentoId}`)
}
const EstabelecimentosByEmpresa = (empresaId) => http.get(`/estabelecimento/${empresaId}`)
const PostEstabelecimento = (data) => http.post(`/estabelecimento`, data)
const PutEstabelecimento = 
(data) => http.put(`/estabelecimento/update/${data.estabelecimentoId}/${data.empresaId}`, 
{nome: data.nome, localizacaoId: data.localizacaoId, nomeLocalizacao: data.nomeLocalizacao, endereco: data.endereco})

const DeleteEstabelecimento = (estabelecimentoId) => http.delete(`/estabelecimento/${estabelecimentoId}`)

const EstabelecimentosByLocalizacao = 
(localizacaoId) => http.get(`/estabelecimento/byLocalizacao/${localizacaoId}`)

const LocalizacoesByEmpresa = (empresaId) => http.get(`/localizacao/${empresaId}`)

const EstabelecimentosByLocalizacaoAndEmpresa = (payload) => http.get(`/estabelecimento/byLocalizacaoAndEmpresa/${payload.localizacaoId}/${payload.empresaId}`)

export {
    EstabelecimentosByLoggedUser, 
    PostEstabelecimento, 
    GetOneEstabelecimentoByLoggedUser,
    PutEstabelecimento,
    DeleteEstabelecimento,
    EstabelecimentosByLocalizacao,
    EstabelecimentosByEmpresa,
    LocalizacoesByEmpresa,
    EstabelecimentosByLocalizacaoAndEmpresa
}

