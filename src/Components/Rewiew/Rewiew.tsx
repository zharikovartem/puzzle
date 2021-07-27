import React from 'react'
import './Rewiew.css';
import rewiewData from './../../Data/RewiewData'
import { Button } from 'antd';

const Rewiew:React.FC<any> = () => {

    const getStarsLine = () => {
        const starsBlock = []
        for (let i = 0; i < 5; i++) {
            starsBlock.push(
                <img
                    key={i.toString()}
                    src={i !== 4 ? "https://zharikovartem.github.io/puzzle/images/icStarColorFull@3x.png" : "https://zharikovartem.github.io/puzzle/images/icStarColor@3x.png"}
                    alt="icStarColorFull"
                    style={{
                        width:14,
                        height:14
                    }}
                />
            )
        }
        return starsBlock
    }

    return (
        <div
            className="rewiew_block"
        >
            <div className="d-flex justify-content-between mx-4">
                <div>
                    <span
                        style = {{
                            fontFamily: "Roboto, Helvetica, sans-serif",
                            fontSize: 16,
                            fontWeight: "bold"
                        }}
                        className=""
                    >
                        Title
                    </span>
                </div>
                <div>
                    <span
                        style = {{
                            fontFamily: "Roboto, Helvetica, sans-serif",
                            fontSize: 16,
                        }}
                        className="text-white-50"
                    >
                        Jun 17
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between mx-4">
                <div>
                    {getStarsLine()}
                </div>
                <div>
                    <span
                        style = {{
                            fontFamily: "Roboto, Helvetica, sans-serif",
                            fontSize: 16,
                        }}
                        className="text-white-50"
                    >
                        UserName
                    </span>
                </div>
            </div>
            <div className="mx-4 pb-2">
                <div>
                    <div 
                        style={{
                            display: 'block',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                            maxHeight: '138px',
                            lineHeight: '10px'
                        }}
                    >
                        <p style={{ fontSize: 16, lineHeight: 1.25 }}>{rewiewData[1][0]}</p>
                        <p className="" style={{ fontSize: 16, lineHeight: 1.25 }}>{rewiewData[1][1]}</p>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <Button type="link" >more</Button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Rewiew



