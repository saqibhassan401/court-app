import React from 'react'
import {Card} from "antd";

const CourtsWidegt = () => {
    return (
        <>
            <Card>
                <div>
                    <section style={{paddingLeft:"15px", display:"flex"}}>
                        <span style={{paddingLeft:"10px", display:"flex"}}>
                            <h1>178</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Clients Check-in
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}}>
                            <h1>150</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Clients Check-Out
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}}>
                            <h1 style={{color:"red"}}>3.6K</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Total Clients
                            </span>
                        </span>
                    </section>
                </div>
            </Card>
            </>
    )
}

export default CourtsWidegt
