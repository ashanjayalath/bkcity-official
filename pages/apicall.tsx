
import {Button, Card, Col, message, Pagination, Popover, Row} from "antd";
import React, {useEffect, useState} from "react";
import HeaderDesign from "../components/headerFooter/header";
import FooterDesign from "../components/headerFooter/footer";
import DataList from "./dataList";
import PathDisplay from "../components/bodyComponent/pathDisplay";

export default function HomeDesign() {

    const[loadData,setLoadData]=useState(new Date())
    const [data,setData]=useState([
        {
            id: "shan",
            name: {
                title: "Mr",
                first: "ashan",
                last: "jayalath"
            },
            location: {
                city: "badalkumbura",
                state: "uva province",
                country: "srilanka",
                postCode: 91070,
            },
            email: "shanjayalath225@gmail.com",
            dob: {
                date: "2000-12-04T15:01:18.981Z",
                age: 26
            },
            phone: "0713955421",
            picture:{
                medium:"https://randomuser.me/api/portraits/women/85.jpg"
            }
        }
    ])

    const getData=()=>{
        return(
            data.map((da)=>{
                return(
                    <DataList
                        key={da.id}
                        name={da.name}
                        location={da.location}
                        email={da.email}
                        dob={da.dob}
                        phone={da.phone}
                        image={da.picture.medium}
                    />
                )
            })
        )
    }
    const onClickHandler=()=>{
        setLoadData(new Date())
        // message.success("User Add Successfully..")
    }

    
    useEffect(()=>{
        fetch("https://randomuser.me/api").then((response) =>{
            return response.json();
        }).then(resData =>{
            // return (resData.results[0]);
            setData((data)=>[...data,resData.results[0]])
        });
    },[loadData]);
    return<>

        <HeaderDesign/>
        <Row>
            <Col span={22} offset={1}>
                <div style={{paddingTop:100,paddingBottom:200}}>
                    <Card hoverable={false} style={{borderRadius:20}} className={"main-body-card"}>
                        <div style={{paddingLeft:50}}>
                            <PathDisplay/>
                        </div>
                        <div style={{margin:50}}>
                            <Card className={"hor"} hoverable={false}>
                                <Button type={"primary"} className={"Add-btn"} onClick={onClickHandler}>Add User</Button>
                                {getData()}
                                <Pagination defaultCurrent={1} total={50} style={{marginTop:20}}/>;
                            </Card>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
        <FooterDesign/>
    </>
}