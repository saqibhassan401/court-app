import React, { useState } from "react";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag,Input } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import ChartWidget from 'components/shared-components/ChartWidget';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import GoalWidget from 'components/shared-components/GoalWidget';
import Analytics from "../../components/analytics";
import CourtsWidegt from "../../components/courtsWidget";
import Chat from "../../components/chatComponent";
import moreCircle from "../../../../assets/icons/Iconly_Bold_More_Circle.png"
import filterIcon from "../../../../assets/icons/Iconly_Bold_Filter_2.png"
import timeCircleIcon from "../../../../assets/icons/Iconly_Bold_Time_Circle.png"
import calenderIcon from "../../../../assets/icons/Iconly_Light_Calendar.png"

import {
  VisitorChartData,
  AnnualStatisticData,
  ActiveMembersData,
  NewMembersData,
  RecentTransactionData
} from './DefaultDashboardData';
import ApexChart from "react-apexcharts";
import { apexLineChartDefaultOption, COLOR_2 } from 'constants/ChartConstant';
import {
  UserAddOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  StopOutlined,
  ReloadOutlined, ArrowUpOutlined, ArrowDownOutlined
} from '@ant-design/icons';
import utils from 'utils';
import exampleService from 'services/ExampleService'
import {withRouter} from 'react-router-dom';
const MembersChart = props => (
  <ApexChart {...props}/>
)

const memberChartOption = {
  ...apexLineChartDefaultOption,
  ...{
    chart: {
      sparkline: {
        enabled: true,
      }
    },
    colors: [COLOR_2],
  }
}

const pushRoute = () => {
  console.log('execute')
  exampleService.getPost().then(resp => {
    console.log('resp', resp)
  })
}

const newJoinMemberOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <PlusOutlined />
          <span className="ml-2">Add all</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <StopOutlined />
          <span className="ml-2">Disable all</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
)

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

const cardDropdown = (menu) => (
    <>
      <div style={{display:"flex"}}>
        <span style={{paddingRight:"30px"}}><Input placeHolder={"Search name here..."} style={{height:"56px", width:"350px"}}/> </span>
        <span style={{borderRadius:"100px", border:"1px solid rgba(226,227,223,1)", padding:"16px", marginRight:"20px"}}><img src={filterIcon}/></span>
        <span style={{borderRadius:"100px", border:"1px solid rgba(226,227,223,1)", padding:"16px"}}><img src={timeCircleIcon}/></span>
      </div>
      </>
)

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
    title: 'Court Name',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Appointment At',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: () => <div className="text-right"></div>,
    key: 'status',
    render: (_, record) => (
      <div className="text-right">
        <svg class="More_Circle_kw" style={{fill:"rgba(139,160,133,1)"}} viewBox="0 0 20 20">
          <path id="More_Circle_kw" d="M 9.999899864196777 19.99979972839355 C 7.326639652252197 19.99979972839355 4.814539909362793 18.95921897888184 2.926349878311157 17.06974029541016 C 1.039269804954529 15.18136024475098 -1.358032193365943e-07 12.67057991027832 -1.358032193365943e-07 9.999899864196777 C -1.358032193365943e-07 7.329219818115234 1.039269804954529 4.818439960479736 2.926349878311157 2.930059909820557 C 4.814539909362793 1.040579915046692 7.326639652252197 -1.358032193365943e-07 9.999899864196777 -1.358032193365943e-07 C 15.51385974884033 -1.358032193365943e-07 19.99979972839355 4.485939979553223 19.99979972839355 9.999899864196777 C 19.99979972839355 15.51385974884033 15.51385974884033 19.99979972839355 9.999899864196777 19.99979972839355 Z M 14.48009967803955 8.80109977722168 C 13.81857967376709 8.80109977722168 13.28040027618408 9.338879585266113 13.28040027618408 9.999899864196777 C 13.28040027618408 10.66141986846924 13.81857967376709 11.19960021972656 14.48009967803955 11.19960021972656 C 15.13615989685059 11.19960021972656 15.66989994049072 10.66141986846924 15.66989994049072 9.999899864196777 C 15.66989994049072 9.338879585266113 15.13615989685059 8.80109977722168 14.48009967803955 8.80109977722168 Z M 9.999899864196777 8.80109977722168 C 9.338379859924316 8.80109977722168 8.800199508666992 9.338879585266113 8.800199508666992 9.999899864196777 C 8.800199508666992 10.66141986846924 9.338379859924316 11.19960021972656 9.999899864196777 11.19960021972656 C 10.65596008300781 11.19960021972656 11.18970012664795 10.66141986846924 11.18970012664795 9.999899864196777 C 11.18970012664795 9.338879585266113 10.65596008300781 8.80109977722168 9.999899864196777 8.80109977722168 Z M 5.519700050354004 8.80109977722168 C 4.858180046081543 8.80109977722168 4.319999694824219 9.338879585266113 4.319999694824219 9.999899864196777 C 4.319999694824219 10.66141986846924 4.858180046081543 11.19960021972656 5.519700050354004 11.19960021972656 C 6.176249980926514 11.19960021972656 6.710399627685547 10.66141986846924 6.710399627685547 9.999899864196777 C 6.710399627685547 9.338879585266113 6.176249980926514 8.80109977722168 5.519700050354004 8.80109977722168 Z">
          </path>
        </svg>
      </div>
    ),
  },
];

export const DefaultDashboard = () => {
  const [visitorChartData] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [activeMembersData] = useState(ActiveMembersData);
  const [newMembersData] = useState(NewMembersData)
  const [recentTransactionData] = useState(RecentTransactionData)

  return (
      <div>
        <Row gutter={16}>
            {
              annualStatisticData.map((elm, i) => (
                <Col span="9">
                  <StatisticWidget
                    title={elm.title}
                    value={elm.value}
                    status={elm.status}
                    subtitle={elm.subtitle}
                  />
                </Col>
              ))
            }
            <Col span="15">
                <CourtsWidegt/>
            </Col>
        </Row>
          <Row gutter={16}>
            <Col span={12}>
              <ChartWidget
                title="Unique Visitors"
                series={visitorChartData.series}
                xAxis={visitorChartData.categories}
                height={400}
              />
            </Col>
            <Col span={12}>
              <Analytics/>
            </Col>
            </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={17}>
          <Card title="Booking Logs" extra={cardDropdown(latestTransactionOption)}>
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
          <Chat/>
        </Col>
      </Row>
      </div>

  )
}


export default withRouter(DefaultDashboard);
