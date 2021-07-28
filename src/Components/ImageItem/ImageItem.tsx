import { Image } from 'antd'
import React from 'react'

type InfoItemPropsType = {
    header: string,
    body: any,
    footer: any
  }

export type ImageItemPropsType = {
    image?: string,
    data?: InfoItemPropsType,
    divider?: boolean
}

const ImageItem:React.FC<ImageItemPropsType> = (props) => {
    return(
        <img 
            className="m-0 item w-100 h-100"
            src={`https://zharikovartem.github.io/puzzle/images/${props.image}`}
            alt={props.image}
        />
    )
}

export default ImageItem