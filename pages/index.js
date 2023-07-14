import Head from 'next/head'
import Script from 'next/script'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import PostCard from '../components/PostCard';

const siteTitle = 'portfolio'

export default function Home({ allPostsData }) {
  return (
    <div className={utilStyles.container}>
    <Head>
      <title>portfolio site</title>
      <meta
        name="description"
        content="portfolio site using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />
  
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Works</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((PostData) => (
          <PostCard key={PostData.id} PostData={PostData} />
          ))}
          {/*{allPostsData.map(({ id, createdAt, title, maincontent }) => (
            <li className={utilStyles.listItem} key={id}>
              <div className={utilStyles.thumbnail_container}>
              <Image className={utilStyles.thumbnail} src={maincontent.url}  fill/>
              </div>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={createdAt} />
              </small>
          </li>
          ))}*/}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
