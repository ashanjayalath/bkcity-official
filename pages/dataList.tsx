import {Avatar, Card, Col, List, message, Row} from "antd";

export default function DataList(props:any) {
    let fullName=`${props.name.title} ${props.name.first} ${props.name.last}`
    const onClickListner=()=>{
        message.success(`Welcome to API Test ${fullName}`)
    }


    return<>
        <Card hoverable={true} className={"main-card"} style={{marginBottom:20,borderRadius:10}} onClick={onClickListner}>
            <List itemLayout="horizontal">
               <List.Item.Meta
                   avatar={<Avatar src={props.image} size={50}/>}
                   title={fullName}
                   description={props.email}
                />
                <List.Item>
                    City : {props.location.city}<br/>
                    <Row>
                        <Col span={8}>
                            State : {props.location.state}
                        </Col>
                        <Col span={8}>
                            Postal Code : {props.location.postCode}
                        </Col>
                        <Col span={8}>
                            Country : {props.location.country}
                        </Col>

                    </Row>
                    <Row>
                        <Col span={8}>
                            Age : {props.dob.age}<br/>
                        </Col>
                        <Col span={8}>
                            Phone : {props.phone}<br/>
                        </Col>
                    </Row>




                </List.Item>

           </List>
        </Card>
    </>
}



