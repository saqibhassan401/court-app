import React, {useState} from "react";
import {Row, Col, Button, Card, Table, Tag, Select, Badge, Input, Menu, Avatar} from 'antd';
import {AnnualStatisticData, RecentTransactionData} from "../default/DefaultDashboardData";
import StatisticWidget from 'components/shared-components/StatisticWidget';
import DepositesWidegt from "../../components/courtsWidget";
import Filter from "../../components/filterComponent";
import filterIcon from "../../../../assets/icons/Iconly_Bold_Filter_2.png";
import timeCircleIcon from "../../../../assets/icons/Iconly_Bold_Time_Circle.png";
import {FileExcelOutlined, PrinterOutlined, ReloadOutlined} from "@ant-design/icons";
import salesLogo from '../../../../assets/icons/Iconly_Bold_Wallet.png'
import utils from "../../../../utils";
const { Option } = Select;

const latestTransactionOption = (
	<Menu>
		<Menu.Item key="0">
			<span>
				<div className="d-flex align-items-center">
					<ReloadOutlined />
					<span className="ml-2">Refresh</span>
				</div>
			</span>
		</Menu.Item>
		<Menu.Item key="1">
			<span>
				<div className="d-flex align-items-center">
					<PrinterOutlined />
					<span className="ml-2">Print</span>
				</div>
			</span>
		</Menu.Item>
		<Menu.Item key="12">
			<span>
				<div className="d-flex align-items-center">
					<FileExcelOutlined />
					<span className="ml-2">Export</span>
				</div>
			</span>
		</Menu.Item>
	</Menu>
);

const tableColumns = [
	{
		title: 'Client Name',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => (
			<div className="d-flex align-items-center">
				<Avatar size={30} className="font-size-sm" style={{backgroundColor: record.avatarColor}}>
					{utils.getNameInitial(text)}
				</Avatar>
				<span className="ml-2">{text}</span>
			</div>
		),
	},
	{
		title: 'Id',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
	},
	{
		title: 'Amount',
		dataIndex: 'amount',
		key: 'amount',
	},
];

const cardDropdown = (menu) => (
	<>
		<div style={{display:"flex"}}>
			<span style={{paddingRight:"30px"}}><Input placeHolder={"Search name here..."} style={{height:"56px", width:"350px"}}/> </span>
			<span style={{borderRadius:"100px", border:"1px solid rgba(226,227,223,1)", padding:"16px"}}><img src={timeCircleIcon}/></span>
		</div>
	</>
)


const SalesDashboard = () => {
	const [annualStatisticData] = useState(AnnualStatisticData);
	const [recentTransactionData] = useState(RecentTransactionData)
	return (
		<>
			<Row gutter={16}>
						<Col span="9">
							<StatisticWidget
								title={"Recent activities"}
								value={"12 New Subscriptions"}
								status={""}
								subtitle={"elm.subtitle"}
							/>
						</Col>
				<Col span="15">
					<DepositesWidegt/>
				</Col>
			</Row>
				<Row gutter={16}>
					<Col xs={24} sm={24} md={24} lg={17}>
						<Card title={<span><img alt='Sales' src={salesLogo} style={{marginRight:15+'px'}}/>Sales</span>} extra={cardDropdown(latestTransactionOption)}>
							<Row>
								<Col span="4">
									<span style={{fontSize:"23px"}}>Subscription</span>
								</Col>
								<Col span="4">
									<span style={{fontSize:"23px", paddingLeft:"35px"}}>Commission</span>
								</Col>
								<Col span="16">
									<div style={{textAlign:"right"}}>
									<span style={{fontSize:"23px"}}>$1178</span>
										<span>Subscription</span>
									</div>
								</Col>
							</Row>
							<Table
								className="no-border-last"
								columns={tableColumns}
								dataSource={recentTransactionData}
								rowKey='id'
								pagination={false}
							/>
						</Card>
					</Col>
					<Col span="7">
						<Filter/>
					</Col>
				</Row>
		</>
	)
}

export default SalesDashboard
