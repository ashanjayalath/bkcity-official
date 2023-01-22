import {Col, List, Row} from "antd";
import Link from "next/link";

interface dataTypes{
    path:string;
    value:string;
}

const linkList=[
    {value:"Custom Development",path:"/"},
    {value:"Terms & Conditions",path:"/"},
    {value:"Sponsorships",path:"/"},
    {value:"Bits & Snippets",path:"/"}
]

export default function MenuFooter(){
    function menuList(linkList:any){
        return<>
            <List
                dataSource={linkList}
                renderItem={(item:dataTypes)=>(
                    <List>
                        <Link href={item.path}>
                            <div>
                                {item.value}
                            </div>
                        </Link>
                    </List>
                )}
            />
        </>
    }

    return<>
    <div style={{width:"100%",height:200,backgroundColor:"rgba(0,0,0,0.93)",paddingTop:30}}>
        <Row>
            <Col span={12} offset={12}>
                <Row>
                    <Col>
                        <span style={{color:"white"}}>
                            Company
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {menuList(linkList)}
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    </>
}