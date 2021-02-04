import React from 'react'
import ContentLoader from "react-content-loader"
const LoadingBlock = () => {
    return (  <ContentLoader 
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    
      >
        <circle cx="127" cy="116" r="113" /> 
        <rect x="-5" y="263" rx="3" ry="3" width="279" height="22" /> 
        <rect x="-4" y="299" rx="6" ry="6" width="280" height="84" /> 
        <rect x="131" y="392" rx="30" ry="30" width="147" height="43" /> 
        <rect x="-1" y="394" rx="22" ry="22" width="85" height="33" />
      </ContentLoader>)
     
}

export default LoadingBlock
