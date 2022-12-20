import React from 'react'
import Videos_List from '../../components/Videos_List'
import styles from '../../styles/MotivationalVideo.module.css'

const motivationalVideos = () => {

  return (
    <>
    
     <div>

        <h1 className={styles.heading}>Motivational Videos</h1>
        <Videos_List />
        
      </div>
      
    </>
  )
}

export default motivationalVideos
