import React from 'react'

export type DescriptionItemPropsType = {
    header: string,
    body: any,
    footer: any
}
  
export type DescriptionDataType = {
    data: Array<DescriptionItemPropsType>
}

const DeveloperImage: React.FC<any> = () => {
    return(
        <div>
            <img src="./images/icDeveloper@3x.png" alt="icDeveloper" style={{ width: 26, height: 26 }}/>
        </div>
    )
}

const StarLine: React.FC<any> = (props) => {

    const getStarLine = () => {
        let result:Array<any> = []
        for (let i = 0; i < 5; i++) {
            result.push(
                <img 
                    key={i.toString()}
                    style={{
                        width:14,
                        height: 14
                    }}
                    src="./images/icStarFull@3x.png" 
                    alt="icStarFull"
                />
            )       
        }
        return (
            <>{result}</>
        )
    }

    return (
        <>
            {getStarLine()}
        </>
    )
}

const descriptionsList:Array<DescriptionItemPropsType> = [
    {
        header: '361K RATINGS',
        body: '4.8',
        footer: <StarLine />
    },
    {
        header: 'AGE',
        body: '12+',
        footer: "Years Old"
    },
       {
        header: 'CHART',
        body: '#49',
        footer: "Trivia"
    },
    {
        header: 'DEVELOPER',
        body: <DeveloperImage />,
        footer: "Veraxen Ltd"
    },
    {
        header: 'LANGUAGE',
        body: 'EN',
        footer: "+ 21 More"
    },
    {
        header: 'SIZE',
        body: '205.7',
        footer: "MB"
    },
    
]

export default descriptionsList
