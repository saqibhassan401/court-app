import React, { useState } from "react";
import {Card, Dropdown, Menu, Button, Tabs, Row, Col} from 'antd';
const { TabPane } = Tabs;

const bookingData = [
    {
        time : "8:00 AM",
        type:"bookedHours"
    },
    {
        time : "8:00 AM",
        type:"unbookedHours"
    },
    {
        time : "8:00 AM",
        type:"bookedHours"
    },
    {
        time : "8:00 AM",
        type:"bookedHours"
    },
    {
        time : "8:00 AM",
        type:"unbookedHours"
    },
    {
        time : "8:00 AM",
        type:"bookedHours"
    },
    {
        time : "8:00 AM",
        type:"blockedHours"
    },
    {
        time : "8:00 AM",
        type:"blockedHours"
    },
    {
        time : "8:00 AM",
        type:"blockedHours"
    },
    {
        time : "8:00 AM",
        type:"unbookedHours"
    },
    {
        time : "8:00 AM",
        type:"blockedHours"
    },
    {
        time : "8:00 AM",
        type:"bookedHours"
    },
    {
        time : "8:00 AM",
        type:"unbookedHours"
    },
    {
        time : "8:00 AM",
        type:"blockedHours"
    },
    {
        time : "8:00 AM",
        type:"unbookedHours"
    }
]

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

const Analytics = () => {

    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <Card>
                <div style={{display:"flex"}}>
                    <h1>Analytics</h1>
                    <div style={{paddingLeft:"200px"}}>
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <Button style={{ background: "rgba(139,160,133,1)", color:"white"}}>Weekly</Button>
                    </Dropdown>
                    </div>
                </div>
                <Tabs onChange={callback} type="card" style={{alignItems:"center", paddingTop:"20px"}}>
                    <TabPane tab="Appointment" key="1">
                        {
                            bookingData.map((booking,index)=>{
                                return(
                                    <Button style={{margin:"10px"}}>
                                        <p style={{color: booking.type == "bookedHours" ? "rgba(84,23,255,1)" : booking.type == "blockedHours" ? "red":""}}>{booking.time}</p>
                                    </Button>
                                )
                            })
                        }
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
