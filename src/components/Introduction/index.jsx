import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/Menu/Menuitem';
import Link from 'next/link';

import images from 'constants/images';

import styles from './styles.module.scss';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Introduction = ({ info }) => {

  const text_data=info[0]
  const menu_data=info[1]
  useEffect(() => {
    AOS.init({duration: 2000});
  },[])

  return (
    <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='intro'>
      <div className={cn('app_wrapper_img','app_wrapper_img_reverse')}>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
            src={require('../../assets/'+text_data?.metadata?.picture?.imgix_url)}
            alt='intro_image'
            objectFit='cover'
            width={550}
            height={600}
            />
        </div>
    </div>
    <div className='app_wrapper_info'>
      {/* <SubHeading title={info?.metadata?.section} /> */}
      <div data-aos="fade-down">
        <h1 className='headtext_cormorant'>{text_data?.metadata?.title}</h1>
      </div>
        <div className={styles.intro_content}>
          
            <div data-aos="fade-up" className={styles.special_menu_items}>
              {menu_data?.metadata?.menu?.map(({ title, slug, day, tags }) => (
                <div key={slug}>
                  <Link href={info ? `/menu/${slug}?#menu-intro` : '/#menu'} passHref>
                    <a>
                      
                      <div className={styles.menuitem_container}>
                        <div className={styles.menuitem_head}>
                          <div className={styles.menuitem_price}>
                          <p className='cormorant'>{day}</p>
                          </div>
                          <div className={styles.menuitem_dash} />
                          <div className={styles.menuitem_name}>  
                            <p className={cn(styles.menuitem_title, 'cormorant')}>{title}</p>
                          </div>
                        </div>
                        <div className={styles.menuitem_sub}>
                          <p className={styles.tags}>{tags}</p>
                        </div>
                      </div>
                      );

                    </a>
                  </Link>
                </div>
              ))}
            </div>

        </div>
        {/* <div className={styles.intro_sign}>
          <p>{info?.metadata?.sub_info}</p>
          <p className='opensans'>Chef & Founder</p>
          <Image width={200} height={100} src={images?.sign} alt='sign_image' objectFit='contain' />
        </div> */}
      </div>
    </div>
  )
}

export default Introduction;