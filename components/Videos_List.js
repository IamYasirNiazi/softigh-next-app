import React from 'react'
import Video_Card from './Video_Card'
import styles from '../styles/VideoList.module.css'
import Data from '../pages/api/data'

const Videos_List = () => {

  return (
    <>
      
      <div className={styles.main}>
      
        {Data.map((data, index)=>{
          return <Video_Card key={index} data={data} />
            
        })}
      
      </div>

    </>
  )

}

export default Videos_List