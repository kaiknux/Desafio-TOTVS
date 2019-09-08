import React from 'react';

import classes from './Info.module.css';

const info = (props) => (
    <div className={classes.infoContainer}>
        <h4>Notas do desenvolvedor:</h4>
        <p>Desenvolvido com ReactJS, CSS e códigos sem pré ou pós processadores.</p>
        <p>Redux simples com Axios que liga ao Google Firebase as ações de delete não refletem no banco de dados, somente as de adição.</p>
        <p>Forms simples, sem validação de dados ou proptypes.</p>
        <p>Testes automatizados com um Jest simples, porém feito por último.</p>
        <p>Desenvolvido em 4 dias, sendo trabalhadas 5 horas por dia.</p>
        <h4>Contatos do desenvolvedor:</h4>
        <p>Eron Oliveira, 30 anos. Casado. Moro no Flamengo (Rio de Janeiro)</p>
        <p>https://github.com/kaiknux/Desafio-TOTVS</p>

    </div>
);

export default info;