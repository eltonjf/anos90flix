import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import Iframe from 'react-iframe'

function Pagina404() {
    return (
        <PageDefault>
            <h1>Página não encontrada - Erro 404</h1>

            <p>Infelizmente não conseguimos encontrar a página solicitada, 
                se divirta com o jogo abaixo ou volte para a  
                <Link to="/">
                    Home
                </Link>
            </p>

          

            <Iframe url=" https://editor.p5js.org/eltonjf/present/H6ukaC4HR"
            
            id="myId"
            className="myClassname"
            width="600px"
            height="450px"

            />
        </PageDefault>
    )
}
   

export default Pagina404