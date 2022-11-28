import React, { useEffect, useState } from 'react';

import { Button, Card, Col, Divider, Form, Input, Radio, Row, Select } from 'antd';
import { BulbOutlined, CheckOutlined, FormOutlined, RedoOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import './Monitoramento.css';

const formAnalise = {
	idade: '',
	sexo: '',
	moradia: '',
	renda: '',
	tipoRenda: ''
}

export default function Monitoramento() {

	const { Option } = Select;
	const [dados, setDados] = useState(formAnalise);

	function onChangeDados(e) {
		const {name, input} = e.target;
		setDados({...dados, [name]:input});
	}

	function onChangeDN(e) {
		setDados({...dados, idade:e.target.value});
	}

	function onChangeSexo(e) {
		setDados({...dados, sexo:e.target.value});
	}

	function onChangeTM(e) {
		setDados({...dados, moradia:e.target.value});
	}

	function onChangeRenda(e) {
		setDados({...dados, renda:e.target.value});
	}

	function onChangeTR(e) {
		setDados({...dados, tipoRenda:e.target.value});
	}

	console.log(dados.dataNascimento);
	console.log(dados.sexo);
	console.log(dados.moradia);
	console.log(dados.tipoRenda);


	function onSubmitForm(e) {
		e.preventDefault();

		console.log("formulário enviado");
	}

	return (
		<div>

			<h3>Preencha os campos a seguir para realizar a análise!</h3>

			<div style={{ marginTop: '30px'}}>	

				<form onSubmit={onSubmitForm}>

					<Row gutter={8}>

						<Col span={8}>

							<Input 
								style={{ width: 300 }}
								name="idade"
								placeholder="Informe a idade"
								onChange={onChangeDados}
								value={dados.idade} 
							/>

							<Select
								placeholder="Informe o sexo"
								name="sexo"
								onChange={onChangeDados}
								style={{
									width: 300,
									marginTop: '30px'
								}}
							>
								<Option value="0">Não informado</Option>
								<Option value="1">Feminino</Option>
								<Option value="2">Masculino</Option>
							</Select>

							<Select
								placeholder="Informe o estado civil"
								name="moradia"
								onChange={onChangeTM}
								style={{
									width: 300,
									marginTop: '30px'
								}}
							>
								<Option value="alugada">Alugada</Option>
								<Option value="propria">Própria</Option>
							</Select>

							<Input 
								style={{ width: 300, marginTop: '30px' }}
								name="renda"
								placeholder="Informe a renda"
								onChange={onChangeRenda}
								value={dados.renda}  
							/>							

						</Col>

					</Row>


					<Button type="submit" variant="contained" color="primary" style={{ marginTop: 25 }} icon={<CheckOutlined />}>
						Analisar
					</Button>

				</form>

			</div>

		</div>
	);
}