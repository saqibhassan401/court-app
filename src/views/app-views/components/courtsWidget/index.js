import React from 'react'
import {Card} from "antd";

const CourtsWidegt = () => {
    return (
        <>
            <Card>
                <div>
                    <section style={{paddingLeft:"15px", display:"flex"}}>
                        <span style={{paddingLeft:"10px", display:"flex"}}>
                            <h1>$1748</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Total
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}}>
                            <h1>$1778</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Recieved
                            </span>
                        </span>
                        <span style={{paddingLeft:"40px", display:"flex"}}>
                            <h1 style={{color:"red"}}>$570</h1>
                            <span style={{paddingTop:"15px", paddingLeft:"10px"}}>
                                Pending
                            </span>
                        </span>
                    </section>
                </div>
            </Card>
            </>
    )
}

export default CourtsWidegt
