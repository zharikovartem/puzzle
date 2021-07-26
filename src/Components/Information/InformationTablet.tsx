import { Col, Row } from 'antd'
import React from 'react'
import { informationData } from '../../Data/InformationData'

type InformationPropsType = {}

const InformationTablet: React.FC<InformationPropsType> = () => {
    const getRows = () => {
        let result:Array<any> = []
        for (let i = 0; i < informationData.length; i+=3) {
            result.push(
                <Row className="mb-3" key={i.toString()}>
                    <Col span={8}>
                        <GetItem item={informationData[i]}/>
                    </Col>
                    {informationData[i+1] !== undefined ? 
                        <Col span={8}><GetItem item={informationData[i+1]}/></Col>
                    : null}
                    {informationData[i+2] !== undefined ? 
                        <Col span={8}><GetItem item={informationData[i+2]}/></Col>
                    : null}
                </Row>
            )
        }
        return result
    }

    return(
        <div className="mt-4">
            {getRows()}
        </div>
    )
}

export default InformationTablet

type GetItemPropsType = {item: {key: string, value: string}}

const GetItem: React.FC<GetItemPropsType> = (props) => {
    return (
        <>
            <Row><span className="text-black-50">{props.item.key}</span></Row>
            <Row>{props.item.value}</Row>
        </>
    )
}
