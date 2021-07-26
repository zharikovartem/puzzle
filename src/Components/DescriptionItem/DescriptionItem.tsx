import React from 'react'
import { ImageItemPropsType } from '../ImageItem/ImageItem'

const DescriptionItem:React.FC<ImageItemPropsType> = (props) => {
    
    return(
        <div 
            className="d-flex flex-column m-2 mb-0 pb-0" 
            style={{
                minWidth: '30%',
                width: 85
            }}
        >
            <div className="p-0 ">
                <p 
                    className="text-center py-0 mb-0 text-black-50" 
                    style={{
                        fontSize: 11, 
                        lineHeight: 1.2,
                        fontFamily: 'Roboto, Helvetica, sans-serif'
                    }}
                >
                    {props.data?.header}
                </p>
            </div>
            <div 
                className="p-0"
            >
                <div 
                    className="text-center mb-0 text-black-50" 
                    style={{
                        fontSize: 22, 
                        lineHeight: 1.2,
                        fontWeight: "bold"
                    }}
                >
                    {props.data?.body}
                </div>
            </div>
            <div className="p-0 text-center">
                <p className="text-center mb-0 text-black-50" style={{fontSize: 12, lineHeight: 1.5}}>{props.data?.footer}</p>
            </div>
        </div>
    )
}

export default DescriptionItem