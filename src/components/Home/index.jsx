import Image from 'next/image';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import styles from './styles.module.scss';

const Home = ( { info } ) => (
    <div className={styles.header} id='home'>
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
              src='https://nextjs-restaurant-website-cms.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F0a0636f0-b732-11ec-a642-7195085ee56f-headerimg.jpg&w=1080&q=75'
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
);

export default Home;