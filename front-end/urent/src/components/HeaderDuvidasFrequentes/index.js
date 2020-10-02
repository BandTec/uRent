import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

//import icon from '../../assets/iconcadastro.png';

import * as S from './style';

function HeaderCadastro({ title }) {
	return (
		<div>
			<S.Header>
				<S.HeaderNav>
					<Link to="/"><FiArrowLeft color="#fff" size="30" /></Link>
				</S.HeaderNav>
				<S.HeaderTitle>
					<h1 style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold', }}>{title = "Duvidas Frequentes"}</h1>
				</S.HeaderTitle>
			</S.Header>

		</div>
	)
}


export default HeaderCadastro;