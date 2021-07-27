import { Progress } from 'antd'
import React from 'react'
import progressBarData from '../../Data/ProgressBarData'

const RaitLine:React.FC<any> = (props) => {
    const getProgressLine = () => {
        let progressLineBlock = []
        for (let i = 0; i < progressBarData.length; i++) {
            progressLineBlock.push( 
                <div style={{ height:9 }} key={i.toString()}>
                    <ProgressLine percent={progressBarData[i]} />
                </div>
            )
        }
        return progressLineBlock
    }
    return (
        <>
            {getProgressLine()}
        </>
    )
}

export default RaitLine

type ProgressLinePropsType = {
    percent: number
}

const ProgressLine:React.FC<ProgressLinePropsType> = (props) => {
    return (
        <Progress 
            className="my-0"
            strokeColor="LightGray"
            percent={props.percent} 
            showInfo={false}
            strokeWidth={4}
        />
    )
}