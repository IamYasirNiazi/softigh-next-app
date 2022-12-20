import React from 'react'
import styles from '../styles/VideoList.module.css'
import Data from '../pages/api/data'
import Related_Video_Card from './Related_Video_Card'

const Related_Videos_List = ({data}) => {

  return (
    <>
      
      <div className={styles.main}>
      
        {Data.map((data, index)=>{
          return <Related_Video_Card key={index} data={data} />
            
        })}
      
      </div>

    </>
  )

}

export default Related_Videos_List