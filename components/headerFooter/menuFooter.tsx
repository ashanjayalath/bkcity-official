import {Col, Input, List, Row} from "antd";
import Link from "next/link";
import HCSS from "../../styles/header.module.css"
const linkList=[
    {title:"Custom Development",
        subMenu:[
            {menuTitle:"Shares",path:"/"},
            {menuTitle:"Daily",path:"/"},
            {menuTitle:"Information",path:"/"},
            {menuTitle:"Our Service",path:"/"},
            {menuTitle:"Downloads",path:"/"}
    ]},
    {title:"Terms & Conditions",
        subMenu:[
            {menuTitle:"Shares",path:"/"},
            {menuTitle:"Daily",path:"/"},
            {menuTitle:"Information",path:"/"},
            {menuTitle:"Our Service",path:"/"},
            {menuTitle:"Downloads",path:"/"}
        ]},
    {title:"Sponsorships",
        subMenu:[
            {menuTitle:"Shares",path:"/"},
            {menuTitle:"Daily",path:"/"},
            {menuTitle:"Information",path:"/"},
            {menuTitle:"Our Service",path:"/"},
            {menuTitle:"Downloads",path:"/"}
        ]},
    {title:"Bits & Snippets",
        subMenu:[
            {menuTitle:"Shares",path:"/"},
            {menuTitle:"Daily",path:"/"},
            {menuTitle:"Information",path:"/"},
            {menuTitle:"Our Service",path:"/"},
            {menuTitle:"Downloads",path:"/"}
        ]}
]

export default function MenuFooter(){

    const listSet=(getList:any)=>
            <List
                dataSource={getList}
                grid={{ column:1}}
                renderItem={(items:any)=>(
                    <Link href={items.path}>
                        <span className={HCSS.footerMenuText}>{items.menuTitle}</span>
                    </Link>
                )}

            />


    return<>
    <div style={{width:"100%",height:"auto",backgroundColor:"rgb(0,0,0)",paddingTop:30,paddingBottom:20}}>
        <Row gutter={[10,{xs:10,sm:10,md:10,lg:10}]} justify={"center"}>
            <Col offset={1} flex={"150px"}>
               <span style={{color:"rgba(220,218,218,0.9)",fontSize:13,fontWeight:"bold"}}>{linkList[0].title}</span>
                {listSet(linkList[0].subMenu)}
            </Col>
            <Col offset={1} flex={"150px"}>
                <span style={{color:"rgba(220,218,218,0.9)",fontSize:13,fontWeight:"bold"}}>{linkList[1].title}</span>
                {listSet(linkList[1].subMenu)}
            </Col>
            <Col offset={1} flex={"150px"}>
                <span style={{color:"rgba(220,218,218,0.9)",fontSize:13,fontWeight:"bold"}}>{linkList[2].title}</span>
                {listSet(linkList[2].subMenu)}
            </Col>
            <Col offset={1} flex={"150px"}>
                <span style={{color:"rgba(220,218,218,0.9)",fontSize:13,fontWeight:"bold"}}>{linkList[3].title}</span>
                {listSet(linkList[3].subMenu)}
            </Col>
        </Row>
    </div>
    </>
}