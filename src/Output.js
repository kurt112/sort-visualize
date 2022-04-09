import { useState } from "react";
const Output = ({data,current}) => {
   return data[current]? (
        <div style={{display:'flex', justifyContent: 'center'}}>
            {
            data[current].map((data,i) => {
                return <div key={i} style={
                    {
                    marginLeft: '10px',
                    width: '10px',
                    backgroundColor: data.current ? 'yellow': data.target? 'orange':'black',
                    height: data.number
                }
            }>
            </div>
            })
   }
</div>):null
}

export default Output;