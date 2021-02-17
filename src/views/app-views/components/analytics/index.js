import React, { useState } from "react";
import {Card, Dropdown, Menu, Button, Tabs, Row, Col} from 'antd';
const { TabPane } = Tabs;


const menu = (
    <Menu>
        <Menu.Item>

        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const Analytics = (props) => {

    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <Card>
                <div style={{display:"flex"}}>
                    <h1>Analytics</h1>
                    <div style={{paddingLeft:"250px"}}>
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Button style={{ background: "rgba(139,160,133,1)", color:"white"}}>Weekly</Button>
                    </Dropdown>
                    </div>
                </div>
                <Tabs onChange={callback} type="card" style={{alignItems:"center", paddingTop:"20px"}}>
                    <TabPane tab="Appointment" key="1">
                        <props.SalesByCategory/>
                    </TabPane>
                    <TabPane tab="Occupancy" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Sales" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </Card>
        </>
    )
}

export default Analytics
