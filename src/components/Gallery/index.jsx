import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

import styles from './styles.module.scss';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { ConsoleView } from 'react-device-detect';

const Gallery = ({info}) => {
  const scrollRef = useRef( null );
  
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  useEffect(() => {
    AOS.init({duration: 2000});
  },[])

  const menu_data = info[2]?.metadata?.menu.concat(info[1]?.metadata?.menu)

  return (
    <div className={cn(styles.gallery_container, 'flex_center')} id='gallery'>
      <div className={styles.gallery_content}>
        <div data-aos="fade-up" >
          <SubHeading title={info?.[0]?.metadata?.section} />
          </div>
        <h1 data-aos="fade-up" className='headtext_cormorant'>{info?.[0]?.metadata?.title}</h1>
        <p data-aos="fade-up" className={cn(styles.gallery_content_intro, 'opensans')}>{info?.[0]?.metadata?.intro}</p>
        <div data-aos="fade-up" >
        <Button data-aos="fade-up" name='View More' path='#menu' />
        </div>
      </div>
      <div data-aos="fade-up" className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {menu_data.map(({title, slug, price, picture}, index ) => (
            <Link key={index} href={info ? `/menu/${slug}?#menu-intro` : '/#gallery'} passHref>
              <a>
                <div className={cn(styles.gallery_images_card, 'flex_center' )} key={index}>
                  <Image src={require('../../assets/'+picture?.imgix_url)} layout='fill' objectFit='cover' alt='gallery_image' />
                  <div className={styles.gallery_image_icon}>
                    <BsInstagram />
                    <h3>{title}</h3>
                    <h4>{price}</h4>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className={styles.gallery_images_arrows}>
          <BsArrowLeftShort className={styles.gallery_arrow_icon} onClick={() => scroll('left')} />
          <BsArrowRightShort className={styles.gallery_arrow_icon} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;