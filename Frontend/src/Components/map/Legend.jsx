import React from 'react';

export const Legend = ({LegendItems}) => {
    // console.log(LegendItems)
    return(
        <div style={{
            display: 'flex',
            alignItems: 'stretch',
            }}>
                {LegendItems.map((item)=>(
                    <div 
                    key={item.title}
                    style={{
                        backgroundColor:item.color,
                        flex:1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color:item.textColor,
                        height: "6vh",
                        fontSize: "1.1em",
                        // fontWeight: "bold",
                        

                    }}
                    >
                        <span>{item.title}</span>
                    </div>
                ))}
        </div>
    )
};

export default Legend;