import './index.scss';
import { Link } from 'react-router-dom';

export default function CabecalhoAdm(){
    return(
        <main className='pagina-cabecalho-adm'>
            <header>
                <section className='cabecalho-adm-um'>
                    <Link to={'/inicialAdm'}>
                    <img src='./assets/images/logo.png' alt='logo' id='logo' />
                    </Link>

                    <div className='busca'>
                        <input type='text' placeholder='Busca' />
                        <img src='./assets/images/lupa.png' alt='lupa'/>
                    </div>

                    <div>
                        <img src='./assets/images/userCabecalho.png' alt='userCabecalho' id='user'/>
                        <img src='./assets/images/seta.png' alt='seta' />
                    </div>
                </section>

                <section className='cabecalho-adm-dois'>
                    <Link id='home' to={'/inicialAdm'}>Home</Link>
                    <Link id='produto' to={'/listaProduto'}>Produto</Link>
                    <Link id='cliente' to={'/listaCliente'}>Clientes</Link>
                    <Link id='pedidos'>Listas de Pedidos</Link>
                </section>
            </header>
        </main>
    )
}