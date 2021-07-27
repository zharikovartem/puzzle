import { Divider } from 'antd'
import React from 'react'
import { informationData } from '../../Data/InformationData'

type InformationPropsType = {}

const Information: React.FC<InformationPropsType> = () => {

    const getDivider = (index: number) => {
        if (informationData.length-1 > index) {
            return <Divider className="my-1"/>
        }
    }

    return(
        <div className="mt-4">
            {
                informationData.map( (item, index) => {
                    return (
                        <>
                            <GetItem key={index} item={item} index={index}/>
                            {getDivider(index)}
                        </>
                    )
                })
            }
        </div>
    )
}

export default Information

type GetItemPropsType = {
    item: {
        key: string,
        value: string
    },
    index: number
}

export const GetItem:React.FC<GetItemPropsType> = (props) => {

    return (
        <div key={props.index.toString()} className="d-flex justify-content-between">
            <div className="p-2">
                <span
                    className="text-black-50"
                >
                    {props.item.key}
                </span>
            </div>
            <div className="p-2">
                <span
                    style={{
                        fontSize: 16,
                    }}
                >
                    {props.item.value}
                </span>
            </div>
        </div>
    )
}