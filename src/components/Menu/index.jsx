import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/Menu/Menuitem';
import Button from 'components/Button';

import chooseByType from 'utils/chooseValueByType';

import styles from './styles.module.scss';

const SpacialMenu = ({ info }) => {
  // const food = chooseByType(info, 'food');
  // const drink = chooseByType(info, 'drink');

  return (
    <div className={cn(styles.special, 'flex_center', 'section_padding')} id='menu'>
      <div className={styles.special_title}>
        {/* <SubHeading title={food?.metadata?.section?.[0]?.metadata?.section} /> */}
        <h1 className='headtext_cormorant'>Menu</h1>
      </div>
      <div className={styles.special_menu}>
      <div className={cn(styles.special_menu_wine,  'flex_center')}>
          <p className={styles.special_menu_heading}>Catering</p>
          <div className={styles.special_menu_items}>
          {[{"title":"Senin","price":"20k","tags":"rendang"},
            {"title":"Selasa","price":"20k","tags":"rendang"},
            {"title":"Rabu","price":"20k","tags":"rendang"},
            {"title":"Kamis","price":"20k","tags":"rendang"},
            {"title":"Jumat","price":"20k","tags":"rendang"},
            ].map(({title, slug, price, tags}) => (
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
      <div className={styles.special_menu_img}>
        <Image src='https://nextjs-restaurant-website-cms.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F3a51a2a0-b709-11ec-a642-7195085ee56f-knife.png&w=3840&q=75' objectFit='contain' layout='fill' alt='menu_img' />
      </div>
       <div className={cn(styles.special_menu_cocktails,  'flex_center')}>
        <p className={styles.special_menu_heading}>Tumpeng</p>
        <div className={styles.special_menu_items}>
          {[
            {"title":"Nasi Kuning","price":"150k"}
          ]
          .map(({title, slug, price, tags}) => (
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