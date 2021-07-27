import React from 'react'
import { informationData } from '../../Data/InformationData'

type InformationPropsType = {}

const Information: React.FC<InformationPropsType> = () => {
    return(
        <div className="mt-4">
            {
                informationData.map( (item, index) => {
                    return (
                        <GetItem key={index} item={item} index={index}/>
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
                    className="text-white-50"
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