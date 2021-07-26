import React from 'react'
import { ImageItemPropsType } from '../ImageItem/ImageItem'

type SrollablePropsType = {
    _class: string,
    _itemClass: string,
    data: any,
    component: React.FC<ImageItemPropsType>
}


const Srollable:React.FC<SrollablePropsType> = (props) => {
    return (
        <div className={props._itemClass} >
            {props.data.map( (item:any, index: number) => {
                return (
                    <div className={props._class} key={index.toString()}>
                        <props.component 
                            image={item.img} 
                            data={props.data[index]}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Srollable