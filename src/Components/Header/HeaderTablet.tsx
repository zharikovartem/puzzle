import { Button, Col, Divider, Row } from 'antd'
import React from 'react'
import { InitialDataType } from '../../App'
import './HeaderTablet.css'
import Scrollable from './../Scrollable/Srollable'
import descriptionsList from '../../Data/DescriptionsList'
import DescriptionItem from '../DescriptionItem/DescriptionItem'
import data, { bigPhotoList } from './../../Data/PhotoList'
import ImageItem from '../ImageItem/ImageItem'
import Ratings from '../Ratings/Ratings'
import Rewiew from '../Rewiew/Rewiew'
import InformationTablet from '../Information/InformationTablet'

type HeaderTabletPropsType = {
    initialData: InitialDataType
}

const HeaderTablet: React.FC<HeaderTabletPropsType> = (props) => {
    return (
        <div className="tablet-container">
            <div 
                className="d-flex mt-2" 
                style={{height: props.initialData.logoSize.height}}
            >
                <div 
                    
                    style={{
                        height: props.initialData.logoSize.height, 
                        width: props.initialData.logoSize.width,
                        marginRight: 28
                    }}>
                    <img src="https://zharikovartem.github.io/puzzle/images/logoJp.png" alt="logoJp" />
                </div>
                    
                <div className="w-100">
                    <div className="d-flex justify-content-between" style={{width:'90%'}}>
                        <span  
                            style={{
                            fontSize: props.initialData.appNameTextSize, 
                            wordWrap: "break-word", 
                            fontFamily: "Roboto, Helvetica",
                            fontWeight: "bold",
                            lineHeight: 1.1
                            }}
                        >
                                Jigsaw Puzzle Collection HD
                        </span>
                        <Button size="middle" className="p-0 justify-content-end" type="text" shape="round" >
                        <img src="https://zharikovartem.github.io/puzzle/images/btnShare.png" alt="btnShare.png" />
                    </Button>
                    </div>
                    
                    <div className="d-flex justify-content-between" style={{width:'90%'}}>
                        Adults puzzle on iPad & iPhone
                    </div>

                    <div 
                        className="d-flex flex-wrap align-content-end"
                        style={{
                            width:'90%',
                            height: "45%"
                        }}
                    >
                        <Button 
                            style={{width: 72, height: 28, marginRight: 10, backgroundColor: "#397AFF" }} 
                            type="primary" 
                            shape="round" 
                        >
                            <span style={{
                                fontSize: 15
                            }}>
                                GET
                            </span>
                        </Button>
                    </div>

                    

                </div>
            </div>

            <div className="border border-bottom-0"  ></div>

            <Row>
                <Col span={3}>
                    <DescriptionItem data={descriptionsList[0]}/>
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{height:40, marginTop: 15, marginLeft: 20}}/>
                </Col>
                <Col span={3}>
                    <DescriptionItem data={descriptionsList[1]}/>
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{height:40, marginTop: 15, marginLeft: 20}}/>
                </Col>
                <Col span={3}>
                    <DescriptionItem data={descriptionsList[2]}/>
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{height:40, marginTop: 15, marginLeft: 20}}/>
                </Col>
                <Col span={3}>
                    <DescriptionItem data={descriptionsList[3]}/>
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{height:40, marginTop: 15, marginLeft: 20}}/>
                </Col>
                <Col span={3}>
                    <DescriptionItem data={descriptionsList[4]}/>
                </Col>
                <Col span={1}>
                    <Divider type="vertical" style={{height:40, marginTop: 15, marginLeft: 20}}/>
                </Col>
                <Col span={3}>
                    <DescriptionItem data={descriptionsList[5]}/>
                </Col>
            </Row>

            <div className="scroll_container">
                <Scrollable 
                _class="item_big"
                _itemClass="items"
                data={bigPhotoList}
                component={ImageItem}
                />
            </div>

            <Row>
                <Col span={18}>
                    <p style={{fontSize: 16, lineHeight: 1.2}}>
                    Play real colorful puzzles! 10,000+ beautiful HD pictures are in this app. Put together the Daily Free Puzzle and make jigsaw puzzles of yours own photos.
                    </p>
                </Col>
                <Col span={6}>
                <div>
                    <Button className="p-0" type="link" size="small">
                        Veraxen Ltd.
                    </Button>
                    <p className="my-0 text-black-50" style={{fontSize: 13, lineHeight: 1}}>Developer</p>
                </div>
                </Col>
            </Row>
            
            <div className="d-flex justify-content-between">
        <div>
            <p 
                className="my-0" 
                style={{
                fontSize: 22, 
                lineHeight: 1,
                fontFamily: "Roboto, Helvetica, sans-serif",
                fontWeight: "bolder"
                }}
            >
                Ratings & Reviews
            </p>
        </div>
        <div>
            <Button className="p-0" type="link" size="small">
                <p 
                    className="my-0" 
                    style={{
                        fontSize: 17, 
                        lineHeight: 1,
                        fontFamily: "Roboto, Helvetica, sans-serif",
                    }}
                >
                    See All
                </p>
            </Button>
        </div>
    </div>

    <Ratings />

    <div className="scroll_container">
        <Scrollable 
          _class="review"
          _itemClass="items"
          data={data}
          component={Rewiew}
        />
    </div>

    
    <div>
        <Divider className="mb-3 my-0"/>
        <p 
          className="my-0" 
          style={{
            fontSize: 22, 
            lineHeight: 1,
            fontFamily: "Roboto, Helvetica, sans-serif",
            fontWeight: "bolder"
          }}
        >
          Information
        </p>
        <InformationTablet />
      </div>

    </div>
    )
}

export default HeaderTablet