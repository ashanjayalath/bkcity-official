import {Col, Row} from "antd";
import solCSS from '../game/solid.module.css'
import Icon from "antd/es/icon";
export default function CardDesign(props:any){
    return<>
    <div className={solCSS.cardWindow}>
        <Row>
            <Row>
                <Col span={4}>
                    <div className={solCSS.positionNumberTop}>
                       <span className={solCSS.number} style={{color:props.getColor}}>
                           {props.number}
                       </span>
                    </div>
                </Col>
            </Row>
          <Row>
              <Col>
                  <div className={solCSS.iconMidle} style={{marginLeft:props.number.length == 2 ? 0:10}}>
                      <Row>
                          <Col span={4} offset={4}>
                              {props.icon}
                          </Col>
                      </Row>
                  </div>
              </Col>
          </Row>
            <Row>
                <Col span={4} offset={5}>
                    <div className={solCSS.positionNumber} style={{
                        marginLeft:props.number.length == 2 ? 0:12
                    }}>
                         <span className={solCSS.number}
                               style={{
                                   color:props.getColor,
                         }}>
                       {props.number}
                   </span>
                    </div>

                </Col>
            </Row>
        </Row>
    </div>
    </>
}