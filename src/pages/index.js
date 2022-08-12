import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import SpacialMenu from 'components/Menu';
import Schedule from 'components/Schedule';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';
import Contacts from 'components/Contact';
import data_json from './api/data.json'
import chooseByType from 'utils/chooseValueByType';

function Template() {
  const data=data_json
  return (
    <>
      <Head>
        <title>DapoerFitri</title>
        <meta name="description" content="Catering rumahan BSD" />
        <link rel="icon" href="https://www.freeiconspng.com/thumbs/restaurant-icon-png/restaurant-icon-png-plate-1.png" />
      </Head>
      <Layout navbar={[chooseByType(data, 'breakfast'), chooseByType(data, 'special')]}>
        <Home/>
        {/* <AboutUs info={chooseByType(data, 'about')}/> */}
        <Gallery info={[chooseByType(data, 'gallery'), chooseByType(data, 'breakfast'), chooseByType(data, 'special')]}/>
        <SpacialMenu info={[chooseByType(data, 'breakfast'), chooseByType(data, 'special')]} />
        <Schedule info={chooseByType(data, 'breakfast')}/>
      </Layout>
      <Footer>
        {/* <VideoIntro url={chooseByType(data, 'video')}/> */}
        <Contacts info={chooseByType(data, 'contact')} />
      </Footer>
    </>
  )
}

export default Template;