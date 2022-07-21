import Image from 'next/image';
import cn from 'classnames';

import SubHeading from 'components/SubHeading';
import SocialMedia from 'components/Contact/SocialMedia';

import styles from './styles.module.scss';

const Contacts = ({ info }) => (
  <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='contact'>
    <div className={cn('app_container', 'app_wrapper')}>
      <div className={cn(styles.contact_info, 'app_wrapper_info')}>
        {/* <SubHeading title={info?.metadata?.section} /> */}
        <h1 className='headtext_cormorant'>Hubungi kami</h1>
        <div className={cn(styles.contact_title, 'app_wrapper_content')}>
          <p className='opensans'>082114126215</p>
          <div className='app_wrapper_content'>
            <p className='opensans'>Komplek Castilla A2/18</p>
          </div>
          <p className={cn(styles.contact_hours,'cormorant')}>Opening Hours</p>
          <p className={cn(styles.contact_title,'opensans')}>Mon - Fri: 10:00 Am - 02:00 Am Sat - Sun: 10:00 Am - 03:00 Am</p>
        </div>
        {/* <h1 className={cn(styles.follow_title,'headtext_cormorant' )}>{info?.metadata?.details?.[1]?.title}</h1> */}
        <div className={styles.contact_social}>
          <SocialMedia />
        </div>
      </div>
      <div className='app_wrapper_img'>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
            src='https://nextjs-restaurant-website-cms.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4b45b3b0-b73d-11ec-a642-7195085ee56f-laurels.png&w=1080&q=75'
            alt='find_us_img'
            objectFit='contain'
            width={500}
            height={550} />
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;