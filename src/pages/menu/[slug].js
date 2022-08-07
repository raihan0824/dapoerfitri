import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from 'components/Layout';
import Footer from 'components/Footer';
import Contacts from 'components/Contact';
import MenuIntro from 'components/MenuIntro';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';
import data_json from '../api/data.json'

// import { getAllDataWithSlug,getDataFromBucket } from 'lib/api';
import chooseByType from 'utils/chooseValueByType';

function Menu({ data }) {
  const {
    query: {slug},
  } = useRouter();

  return (
    <>
      <Head>
        <title>DapoerFitri</title>
        <meta name="description" content="Catering rumahan BSD" />
        <link rel="icon" href="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-plate-1.png" />
      </Head>
      <Layout>
        <MenuIntro 
        info={[chooseByType(data, 'food'), chooseByType(data, 'drink')]} 
        slug={slug} />
        {/* <Gallery info={[chooseByType(data, 'gallery'), chooseByType(data, 'food')]}/> */}
      </Layout>
      <Footer>
        <Contacts/>
      </Footer>
    </>
  )
}

export async function getStaticProps() {
    const data = data_json || [];
    return {
      props: { data },
    }
  }

export async function getStaticPaths() {
    const dataWithSlug = data_json || [];
  return {
    paths: dataWithSlug.map((menu) => `/menu/${menu.slug}`),
    fallback: true,
  }
}

export default Menu;