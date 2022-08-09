import Image from 'next/image';
import cn from 'classnames';
import foodpic from '../../assets/food.jpg'
import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import styles from './styles.module.scss';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Home = ( { info } ) => {

  useEffect(() => {
    AOS.init({duration: 2000});
  },[])

  return (
    <div data-aos="fade-down" className={styles.header} id='home'>
      <div className={cn('app_container', 'app_wrapper')}>
        <div className={styles.wrapper_info}>
          {/* <SubHeading title='fsdgwd'/> */}
          <h1 className={styles.header_h1}>Solusi makanan sehari hari!</h1>
          <p className={cn(styles.header_p, 'opensans')}>Catering nomor 1 di BSD</p>
          <Button name='Lihat menu' path='#menu' />
        </div>
        <div className='app_wrapper_img'>
          <div className={cn(styles.wrapper_img, 'img_padding')} >
            <Image
              // src='https://www.goodnewsfromindonesia.id/uploads/post/large-nasitum-8ef4c140b4991c64815fd6c9697d4855.jpg'
              src={foodpic}
              alt='header_img'
              objectFit='cover'
              width={450}
              height={500}
              // priority
              />
          </div>
        </div>
      </div>
    </div>
)};

export default Home;