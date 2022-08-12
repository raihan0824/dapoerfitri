import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';
import MenuItem from 'components/Menu/Menuitem';
import Link from 'next/link';
import { useRef } from 'react';
import images from 'constants/images';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import styles from './styles.module.scss';
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Schedule = ({ info }) => {

  const text_data=info?.metadata?.schedule
  const schedule=info?.metadata?.schedule.schedule_menu

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

  const breakfast_data = info?.metadata?.menu

//   var lst=[]
//   for (var i = 0; i <= menu_data?.metadata?.menu.length - 1; i++) {
//     lst.push({
//       day:menu_data?.metadata?.menu[i]?.day,
//       menu:menu_data?.metadata?.menu[i]?.title    

//     })
// }

//   /// function to map schedule
//   var schedule = [];
//   lst.forEach(function(item) {
//     var existing = schedule.filter(function(v, i) {
//       return v.day == item.day;
//     });
//     if (existing.length) { /// if same day found
//       var existingIndex = schedule.indexOf(existing[0]); /// find index where the day is the same
//       schedule[existingIndex].menu = schedule[existingIndex].menu.concat(item.menu).join(" | "); // concat list with same day
//     } 
//     else { /// if different day, just push the list with default value
//       if (typeof item.menu == 'string')
//         item.menu = [item.menu]
//         schedule.push(item);
//     }
//   });

// //   console.log(schedule);

  useEffect(() => {
    AOS.init({duration: 2000});
  },[])

  return (
    <div className={cn('app_bg', 'app_wrapper', 'section_padding')} id='schedule'>
      {/* <div className={cn('app_wrapper_img','app_wrapper_img_reverse')}> */}
        {/* <div className={cn(styles.wrapper_img, 'img_padding')} > */}
          {/* <Image
            src={require('../../assets/'+text_data?.metadata?.picture?.imgix_url)}
            alt='intro_image'
            objectFit='cover'
            width={550}
            height={600}
            /> */}
        {/* </div> */}
    {/* </div> */}

    <div data-aos="fade-up" className={styles.gallery_images}>
        <div className={styles.gallery_images_container} ref={scrollRef}>
          {breakfast_data.map(({title, slug, price, picture}, index ) => (
            <Link key={index} href={info ? `/menu/${slug}?#menu-intro` : '/#schedule'} passHref>
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
      
    <div className='app_wrapper_info'>
      {/* <SubHeading title={info?.metadata?.section} /> */}
      <div data-aos="fade-down">
        <h1 className='headtext_cormorant'>{text_data?.metadata?.title}</h1>
      </div>
        <div className={styles.intro_content}>
          
            <div data-aos="fade-up" className={styles.special_menu_items}>
              {schedule.map(({ day,menu}, index) => (
                <div key={index}>
                    <a>                   
                      <div className={styles.menuitem_container}>
                        <div className={styles.menuitem_head}>
                          <div className={styles.menu_day}>
                          <p className='cormorant'>{day}</p>
                          </div>
                          <div className={styles.menuitem_dash} />
                          <div className={styles.menuitem_name}>  
                            <p className={cn(styles.menuitem_title, 'cormorant')}>{menu}</p>
                          </div>
                        </div>
                      </div>
                      );
                    </a>
                </div>
              ))}
            </div>

        </div>
      </div>
    </div>
  )
}

export default Schedule;