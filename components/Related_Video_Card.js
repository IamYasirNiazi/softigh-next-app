import React from 'react'
import Image from 'next/image'
import styles from '../styles/Video.module.css'
import Link from 'next/link'

const Related_Video_Card = ({data}) => {

  return (
    <div className={styles.card}>

        <Link className={styles.a} href={`/motivationalVideos/${data.id}`} >
          <Image className={styles.image}
            src={data.thumbnail}
            alt='Thumbnail-Img'
            width='500px'
          />
          <div>
              <h2 className={styles.heading}>
                  {data.title}
              </h2>
              <p className={styles.para}>
                  {data.desc}
              </p>
          </div>
        </Link>

    </div>
  )
}

export default Related_Video_Card