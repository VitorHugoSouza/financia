import React, { useEffect, useState } from 'react';

import { Button, Card, Col, Divider, Form, Input, Radio, Row, Select } from 'antd';
import { BulbOutlined, CheckOutlined, FormOutlined, RedoOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import './Monitoramento.css';

const formAnalise = {
	dataNascimento: '',
	sexo: '',
	moradia: '',
	renda: '',
	tipoRenda: ''
}

export default function Monitoramento() {

	const { Option } = Select;
	const [dados, setDados] = useState(formAnalise);

	function onChangeDN(e) {
		setDados({...dados, dataNascimento:e.target.value});
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
								name="dataNascimento"
								placeholder="Informe a data de nascimento"
								onChange={onChangeDN}
								value={dados.dataNascimento} 
							/>

							<Select
								placeholder="Informe o sexo"
								name="sexo"
								onChange={onChangeSexo}
								style={{
									width: 300,
									marginTop: '30px'
								}}
							>
								<Option value="feminino">Feminino</Option>
								<Option value="masculino">Masculino</Option>
							</Select>

							<Select
								placeholder="Informe o tipo de moradia"
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

							<Select
								placeholder="Informe o tipo de renda"
								name="tipoRenda"
								onChange={onChangeTR}
								style={{
									width: 300,
									marginTop: '30px'
								}}
								options={[
									{
										value: 'formal',
										label: 'Formal',
									},
									{
										value: 'informal',
										label: 'Informal',
									},
								]}
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