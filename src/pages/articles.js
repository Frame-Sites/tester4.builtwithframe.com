import ArticleItem from '../components/ArticleItem'
import { gql } from '@apollo/client';
import { getApolloClient } from '../utils'
import Meta from '../components/Meta'
import {useEffect, useState} from 'react'


const Articles = (props) => {
  // const articles = props.profile.articles
  const [articles, setArticles] = useState(props.profile.articles)
  const [opacity, setOpacity] = useState("none")

  const getArticles = async() => {
    const GET_PROFILE = gql`{
      getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
        dev
      }
    }`;
    const { data } = await getApolloClient().query({query: GET_PROFILE})
    const profil = JSON.parse(data.getProfile.dev);
    return profil
  }
  useEffect(async() => {
    const data = getArticles()
    const dataShow = await data
    setArticles(dataShow.articles)
    setOpacity("show")
  },[])

  const meta_props = {
    profile:{...props.profile},
    title:`${props.profile.first_name} ${props.profile.last_name} | Articles`,
    description:`Articles by ${props.profile.first_name} ${props.profile.last_name}`,
    keywords:`${props.profile.first_name} ${props.profile.last_name},${props.profile.first_name} ${props.profile.last_name},articles,portfolio`
  }
  return(
    <>
      <Meta {...meta_props} />
      <section className={`article-page-wrapper ${opacity}`}>
        <div className="article_content_grid">
          <div className="section-heading">
            <h2>Articles</h2>
          </div>
          {
            articles.map(article => {
              return(
                <ArticleItem {...article} key={article.id}/>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async() => {

  const GET_PROFILE = gql`{
    getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
      dev
    }
  }`;
    
  const { data } = await getApolloClient().query({query: GET_PROFILE})
  const profile = JSON.parse(data.getProfile.dev);
  
  return { props : {
      profile,
    },
  };
}
export default Articles
