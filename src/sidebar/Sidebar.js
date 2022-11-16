import { Image } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import Monitoramento from 'monitoramento/Monitoramento';
import './Sidebar.css';
import Comp from 'assets/img/logo_financia_t.png';

export default function Sidebar() {
	return (
		<Layout>

			<Header className="layout-top">

				<div className="logo">
					<Image
						src={Comp}
						preview={false}
						alt="Logos"
						class="logo"
					/>
				</div>

				<div>
					<h3 style={{ color: '#FFFFFF' }}> PERFORMANCE EM ANÁLISE DE CLIENTES</h3>
				</div>

			</Header>

			<Content style={{ padding: '0 50px' }}>

				<div className="site-layout-content">
					<Monitoramento />
				</div>

			</Content>

			<Footer style={{ textAlign: 'center' }}>Vitor Hugo de Souza ©2022</Footer>

		</Layout>
	);
}