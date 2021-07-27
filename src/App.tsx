import React from 'react';
import './App.css';
import { Divider, Button } from 'antd'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import Scrollable from './Components/Scrollable/Srollable';
import data from './Data/PhotoList'
import ImageItem from './Components/ImageItem/ImageItem';
import DescriptionItem from './Components/DescriptionItem/DescriptionItem';
import descriptionsList from './Data/DescriptionsList';
import Ratings from './Components/Ratings/Ratings';
import Rewiew from './Components/Rewiew/Rewiew';
import Information from './Components/Information/Information';
import './blackTheme.css'

import {isTablet} from 'react-device-detect';
import HeaderTablet from './Components/Header/HeaderTablet';

export type InitialDataType = {
  appNameTextSize: number
  logoSize: {
    height: number, 
    width: number
  }
}

const initialData: InitialDataType = {
  appNameTextSize: isTablet ? 28 : 22,
  logoSize: {
    height: isTablet ? 140 : 116, 
    width: isTablet ? 140 : 116
  }
}

const App:React.FC<any> = () => {
  if (!isTablet) {
  return (
    <div className="container-fluid black">
      <div className="d-flex mt-2" style={{height: 116}}>
        <div className="" style={{height: 116, width: 116}}>
          <img src="https://zharikovartem.github.io/puzzle/images/logoJp.png" alt="logoJp" />
        </div>
        <div className="d-flex flex-column mx-3 justify-content-between">
          <span  
            style={{
              fontSize: initialData.appNameTextSize, 
              wordWrap: "break-word", 
              fontFamily: "Roboto, Helvetica",
              fontWeight: "bold",
              lineHeight: 1.1
            }}>
            Jigsaw Puzzle Collection HD
          </span>
          
          <span className="mb-1 text-white-50 text-truncate overflowed" style={{
            fontSize: 15,
            fontFamily: 'Roboto, Helvetica, sans-serif'
          }}>
            Adults puzzle on iPad & iPh...
          </span>
          <div className="d-flex flex-row mb-0 justify-content-between w-100" style={{height: 28}}>

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

            <div className="w-100 p-0">
              <p className="text-left text-white-50 mt-1" style={{fontSize: 9, lineHeight: 1.1}}>In-App <br/> Purchases</p>
            </div>
            <div className="mb-0 " >
              <Button size="middle" className="p-0 justify-content-end" type="text" shape="round" >
                <img src="https://zharikovartem.github.io/puzzle/images/btnShare.png" alt="btnShare.png" />
              </Button>
            </div>
          </div>
        </div> 
      </div>

      <br/>
      <Divider className="my-1"/>

      <div className="scroll_container">
        <Scrollable 
          _class="description"
          _itemClass="items"
          data={descriptionsList}
          component={DescriptionItem}
        />
      </div>       

      <div className="scroll_container">
        <Scrollable 
          _class="item"
          _itemClass="items"
          data={data}
          component={ImageItem}
        />
      </div>

      <div>
        <p style={{fontSize: 16, lineHeight: 1.2}}>
          Play real colorful puzzles! 10,000+ beautiful HD pictures are in this app.
          Put together the Daily Free Puzzle.
        </p>
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <p className="my-0 text-white-50" style={{fontSize: 13, lineHeight: 1}}>Developer</p>
          <Button className="p-0" type="link" size="small">
            Veraxen Ltd.
          </Button>
        </div>
        <div>
          <img 
            style={{
                width:9,
                height: 14
            }}
            src="https://zharikovartem.github.io/puzzle/images/icArrow@3x.png" 
            alt="icStarFull"
          />
        </div>
      </div>

      

      <br/><br/>
      
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

      {/* <Rewiew /> */}

      <div className="scroll_container">
        <Scrollable 
          _class="review"
          _itemClass="items"
          data={data}
          component={Rewiew}
        />
      </div>

      <br/>
      
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
        <Information />
      </div>

      

      <br/><br/>
      <div>
        TOOLBAR ???
      </div>
      <br/><br/><br/><br/>
    </div>
  )
  } else {
    return (
      <div>
        isTablet
        <HeaderTablet initialData={initialData}/>
      </div>
    )
  }
}

export default App;