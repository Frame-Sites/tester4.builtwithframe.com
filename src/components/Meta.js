import Head from 'next/head'
import createImageUrl from '../utils/createImageUrl'

const Meta = ({profile, title, keywords, description}) => {
  const {first_name, last_name, assets} = profile
  const key = assets.filter(asset => (asset.type == "primary"))[0] >= 1
  const url = key?createImageUrl(key):"";
  return(
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google" content="notranslate" />
      <meta name="Description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={`${first_name} ${last_name}`} />
      <meta name="og:type" content="website" />
      <meta property="og:image" content={url} />
      <meta name="og:description" content={description} />
      <link rel="icon" href='/images/frame-title-logo.svg' />
    </Head>
  )
}

export default Meta