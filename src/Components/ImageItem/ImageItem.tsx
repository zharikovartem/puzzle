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
        <Image
            className="m-0 item"
            src={`https://zharikovartem.github.io/puzzle/images/${props.image}`}
        />
    )
}

export default ImageItem