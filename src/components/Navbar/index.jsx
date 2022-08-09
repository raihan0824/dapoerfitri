import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Form from './Form';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import styles from './styles.module.scss';

const Navbar = ({ navbarInfo }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navbarItems = ['Home', 'Menu','Contact'];
  // const navbarItems = [navbarInfo?.metadata?.about, navbarInfo?.metadata?.contact, navbarInfo?.metadata?.home, navbarInfo?.metadata?.menu];

  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setToggleMenu( prev => !prev );
  };

  return (
    <nav className={styles.navbar_container} id='navigation'>
      <Link href='/#home' passHref>
        <div className={styles.navbar_logo}>
        DapoerFitri 
        </div>
      </Link>

      <ul className={styles.navbar_links}>
        {navbarItems?.map((item,index) => (
          <li className={cn(styles.menu_item,'opensans')} key={index}>
            <Link href={`/#${item?.toLowerCase()}`} passHref>
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.navbar_login}>
        <p className={cn(styles.menu_item,'opensans')}>

        </p>
      </div>
      
      <div>
        <button className={styles.button} onClick={() => setShowModal(true)}>Order Now!</button>
        {showModal && <Form info={navbarInfo}
          onClose={() => setShowModal(false)}
          show={showModal}
        >
        </Form>}


      </div>

      <div className={styles.navbar_smallscreen}>
        <GiHamburgerMenu className={styles.navbar_hamburger} onClick={handleToggle} />
        {toggleMenu && (
          <div className={cn(styles.navbar_smallscreen_overlay, 'slide_bottom', 'flex_center')}>
            <MdOutlineRestaurantMenu className={styles.overlay_close} onClick={handleToggle} />
            <ul className={styles.navbar_smallscreen_links}>
              {navbarItems?.map((item, index) => (
                <li onClick={handleToggle} key={index}>
                  <Link href={`/#${item?.toLowerCase()}`} passHref>
                    <a>{item}</a>
                  </Link>
                </li>
              ))}

            </ul>
            
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
