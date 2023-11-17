import axios from 'axios';
import { api_url } from '../constant';
const api = axios.create({
    baseURL: "http://localhost:5037"
})

export async function loginAdm(email, senha) {
    const r = await api.post('/adm/login', {
        email: email,
        senha: senha
    });

    return r.data; 
};

export async function buscarClientes(busca){
    let r = await api.get('/listar/cliente?nome=' + busca);
    
    return r.data
}

export async function buscarProdutos(busca){
    let r = await api.get('/listar/produtos?nome=' + busca);

    return r.data
}

export async function deletarProduto(id){
    let r = await api.delete('/deletar/' + id);
}
