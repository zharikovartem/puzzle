import React from 'react'
import './Rewiew.css';
import { Button } from 'antd';

const Rewiew:React.FC<any> = (props) => {
    
    const getStarsLine = (stars:number) => {
        const starsBlock = []
        for (let i = 0; i < 5; i++) {
            starsBlock.push(
                <img
                    key={i.toString()}
                    src={i < stars ? "https://zharikovartem.github.io/puzzle/images/icStarColorFull@3x.png" : "https://zharikovartem.github.io/puzzle/images/icStarColor@3x.png"}
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
                        {props.data.title}
                    </span>
                </div>
                <div>
                    <span
                        style = {{
                            fontFamily: "Roboto, Helvetica, sans-serif",
                            fontSize: 16,
                        }}
                        className="text-black-50"
                    >
                        {props.data.date}
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between mx-4">
                <div>
                    {getStarsLine(props.data.stars)}
                </div>
                <div>
                    <span
                        style = {{
                            fontFamily: "Roboto, Helvetica, sans-serif",
                            fontSize: 16,
                        }}
                        className="text-black-50"
                    >
                        {props.data.userName}
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
                        <p style={{ fontSize: 16, lineHeight: 1.25 }}>{props.data.text[0]}</p>
                        <p className="" style={{ fontSize: 16, lineHeight: 1.25 }}>{props.data.text[1]}</p>
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



