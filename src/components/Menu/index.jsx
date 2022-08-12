import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/Menu/Menuitem';
import Button from 'components/Button';
import knifepic from '../../assets/knife.png'
import chooseByType from 'utils/chooseValueByType';

import styles from './styles.module.scss';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';


const SpacialMenu = ({ info }) => {
  const special = chooseByType(info, 'special');
  const breakfast = chooseByType(info, 'breakfast');
  useEffect(() => {
    AOS.init({duration: 2000});
  },[])

  return (
    <div data-aos="zoom-up" className={cn(styles.special, 'flex_center', 'section_padding')} id='menu'>
      <div className={styles.special_title}>
        {/* <SubHeading title={food?.metadata?.section?.[0]?.metadata?.section} /> */}
        <h1 className='headtext_cormorant'>Menu</h1>
      </div>
      <div className={styles.special_menu}>
      <div data-aos="fade-up" className={cn(styles.special_menu_wine,  'flex_center')}>
          <p className={styles.special_menu_heading}>{special?.metadata?.title}</p>
          <div data-aos="fade-up" className={styles.special_menu_items}>
          {special?.metadata?.menu?.map(({title, slug, price, tags}) => (
            <div className={styles.menu_item_wrapper} key={slug}>
              <Link href={info ? `/menu/${slug}?#menu-intro` : '/#menu'} passHref>
                <a>
                  <MenuItem title={title} price={price} tags={tags} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="flip-down" className={styles.special_menu_img}>
        <Image src={knifepic} objectFit='contain' layout='fill' alt='menu_img' />
      </div>
       <div data-aos="fade-up" className={cn(styles.special_menu_cocktails,  'flex_center')}>
        <p className={styles.special_menu_heading}>{breakfast?.metadata?.title}</p>
        <div data-aos="fade-up" className={styles.special_menu_items}>
          {breakfast?.metadata?.menu?.map(({title, slug, price, tags}) => (
            <div key={slug}>
              <Link href={info ? `/menu/${slug}?#menu-intro` : '/#menu'} passHref>
                <a>
                  <MenuItem title={title} price={price} tags={tags} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <Button name='View More' path='#gallery' /> */}
  </div>
  )
}

export default SpacialMenu;