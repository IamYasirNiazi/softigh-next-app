import Link from 'next/link'
import styles from '../../styles/specifiVideo.module.css'
import data from '../api/data'
import Related_Videos_List from '../../components/Related_Videos_List'


export const getStaticPaths = async () => {
  const paths = data.map(pageValue => {
    return {
      params: {
        videoNo: pageValue.id.toString(),
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async context => {
  const id = context.params.videoNo

  return {
    props: {
      data: data[id - 1],
    },
  }
}





const Videos = ({data}) => {
  
  const {id, title, desc, thumbnail, url} = data

  // const router = useRouter()
  // const {id} = router.query

  // const filterData = Data.filter((data)=>{
  //   return data.id==id
  // })

  return (

    <>
      <div>
            <div>
              <h1 className={styles.heading}>Motivational Videos</h1>
            </div>
            <div className={styles.main}>
              <div className={styles.content}>
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link href='/motivationalVideos'>Back to Videos</Link>
              </div>
              <iframe width="789" height="444" src="https://www.youtube.com/embed/PHp5-1o3CdA" title="Remove background from picture - How to remove photo background - How to remove background" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
              <h2 className={styles.heading}>Related Videos</h2>
              <div>
                  <Related_Videos_List />
              </div>
            </div>

            
      </div>
    </>

  )
}

export default Videos


