import React from 'react'

type StarLinePropsType = {
    count: number
}

const StarLine: React.FC<StarLinePropsType> = (props) => {

    const getStarLine = () => {
        let result: Array<any> = []

        for (let index = 0; index < props.count; index++) {
            result.push(
                <img 
                    key={index.toString()}
                    style={{
                        height: 7,
                        width:7,
                        margin: 1,
                    }} 
                    src="./images/icStarRating@3x.png" 
                    alt="star"
                />
            )
        }
        return result
    }

    return (
        <div 
            style={{
                height: 9
            }}
            className="m-0" 
        >
            {getStarLine()}
        </div>
    )
}

export default StarLine