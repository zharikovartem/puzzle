import { Col, Row } from "antd"
import React  from "react"
import RaitLine from "./RaitLine"
import StarLine from "./StarLine"
import {isTablet} from 'react-device-detect';

const Ratings:React.FC<any> = (props) => {
    return (
        <div>
        <Row>
          <Col
            span={12}
            className=""
          >
            <Row style={{height: 50}}>
              <Col span={isTablet ? 6 :13} style={{height: 50}} >
                <GetRating />    
              </Col>
              {!isTablet ? 
                <Col span={10} className="">
                    <StarsBlock />
                </Col>
              :
                <Col span={18} style={{height: 50}} >
                  <div 
                    style={{
                      marginTop: 34
                    }}
                  >
                    <GetRatingInfo />
                  </div>
                  
                </Col>
              }
              
            </Row>
          </Col>
          <Col 
            span={12}
          >
            {isTablet ? 
                <Row>
                  <Col span={4} className="">
                      <StarsBlock />
                  </Col>
                  <Col span={1}></Col>
                  <Col span={19}>
                    <RaitLine />
                  </Col>
                </Row>
              :
                <RaitLine />
              }
            
          </Col>
        </Row>

        {!isTablet ?
            <GetRatingInfo />
          : 
            null
        }
        
      </div>
    )
}

export default Ratings

const StarsBlock: React.FC<any> = () => {
  return (
    <>
      <Row className="d-flex justify-content-end">
        <StarLine count={5} />
      </Row>
      <Row className="d-flex justify-content-end">
        <StarLine count={4} />
      </Row>
      <Row className="d-flex justify-content-end">
        <StarLine count={3} />
      </Row>
      <Row className="d-flex justify-content-end">
        <StarLine count={2} />
      </Row>
      <Row className="d-flex justify-content-end">
        <StarLine count={1} />
      </Row>
    </>
  )
} 

const GetRating: React.FC = () => {
  return(
    <span
      style = {{
          height: 50,
          fontFamily: "Roboto, Helvetica",
          fontSize: 60,
          fontWeight: "bolder",
          lineHeight: 1,                          
      }}
    >
        4.8
    </span>
  )
}

const GetRatingInfo: React.FC = () => {
  return(
    <Row className="mt-2 mb-3">
            <Col span={6}>
              <div className="d-flex justify-content-center">
                <span
                    style = {{
                        fontFamily: "Roboto, Helvetica, sans-serif",
                        fontSize: 16,
                        fontWeight: "bolder"
                    }}
                    className="text-white-50 text-center"
                >
                  out of 5
                </span>
              </div>
              
                
            </Col>
            <Col span={6}></Col>
            <Col span={12}>
            <div className="d-flex justify-content-end">
              <span
                  style = {{
                      fontFamily: "Roboto, Helvetica, sans-serif",
                      fontSize: 16,
                  }}
                  className="text-white-50"
              >
                  322,122 Ratings
              </span>
              </div>
            </Col>
          </Row>
  )
}