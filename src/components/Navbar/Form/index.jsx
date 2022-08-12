import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'
import Head from "next/head";
import styled from "styled-components";
import {isMobile} from 'react-device-detect';
import chooseByType from 'utils/chooseValueByType';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


const Form = ({ info,onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    // create ref for the StyledModalWrapper component
    const modalWrapperRef = React.useRef();

    const [active, setActive] = React.useState(0);

    // check if the user has clickedinside or outside the modal
    const backDropHandler = e => {
        if (!modalWrapperRef?.current?.contains(e.target)) {
            onClose();
        }
    }

    // Get data from API
    const special_menu = chooseByType(info, 'special');
    const breakfast_menu = chooseByType(info, 'breakfast');

    // Create a function to get today's day
    const day = new Date() 
    var weekdays = new Array(7);
    weekdays[0] = "Minggu";
    weekdays[1] = "Senin";
    weekdays[2] = "Selasa";
    weekdays[3] = "Rabu";
    weekdays[4] = "Kamis";
    weekdays[5] = "Jumat";
    weekdays[6] = "Sabtu";
    const today = weekdays[day.getDay()]

    // Create a list of menu items from API 
    var special_menu_list=[]
    for (var i = 0; i <= special_menu?.metadata?.menu.length-1; i++) {
        special_menu_list.push(special_menu?.metadata?.menu[i].title);
        }
    
    // Put today's menu
    var breakfast_menu_list = []
    for (var i = 0; i <= 7; i++) {
        if (breakfast_menu?.metadata?.schedule?.schedule_menu[i]?.day==today) {
            for (var j = 0; j <= breakfast_menu?.metadata?.schedule?.schedule_menu[i]?.menu.length-1; j++) {
                breakfast_menu_list.push(breakfast_menu?.metadata?.schedule?.schedule_menu[i]?.menu[j]); 
            }
        }
        
    }

    const [showhide, setShowhide]=useState('');
    const handleshowhide=(event)=>{
      const getuser = event.target.value;    
      setShowhide(getuser);}

    useEffect(() => {
        setIsBrowser(true);

        // attach event listener to the whole windor with our handler
        window.addEventListener('click', backDropHandler);

        // remove the event listener when the modal is closed
        return () => window.removeEventListener('click', backDropHandler);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (  
        <main>        
            <body id='body'>
                <div className={styles.abc} id='abc'>
                    <div className={styles.popupContact}>
                        <StyledModalWrapper ref={modalWrapperRef}>
                            <form className={styles.form}>
                            <MdOutlineRestaurantMenu className={styles.overlay_close} onClick={() => div_hide()} />
                                <h2 className={styles.h2_styles}>Order now!</h2>
                                <hr className={styles.hr}/>

                                <input id="wa_name" className={styles.wa_name} name="name" placeholder="Nama" type="text" />
                                <textarea id="wa_textarea" className={styles.wa_textarea} name="address" placeholder="Alamat"></textarea>

                                <div className={styles.datainput}>
                                    <select required id="wa_select" className={styles.wa_select} onChange={(e)=>(handleshowhide(e))}>
                                        <option hidden='hidden' disabled selected>Pilih Menu</option>
                                        <option value="1">Special Menu</option>
                                        <option value="2">Breakfast Menu</option>
                                    </select>
                                    
                                    {showhide==='1' && (
                                            <div>
                                                <div style={{margin:"10px"}}/>
                                                {special_menu_list?.map(menu => (
                                                    <ul key={menu}>
                                                    <input value={menu} name="checkbox" type="checkbox" className={styles.radio_class}/>
                                                    <label className={styles.label} htmlFor="radio">
                                                        {menu}
                                                    </label>
                                                    </ul>
                                                ))}
                                                <div style={{ margin: "5px" }} />
                                                <div>*) Min Pemesanan 10 porsi</div>                                                       
                                            </div> 
                                        )}  

                                    {showhide === '2' && (
                                        <div>
                                            <div style={{ margin: "10px" }} />
                                            <div>Menu hari {today}: </div>
                                            <div style={{ margin: "5px" }} />
                                            {breakfast_menu_list?.map(menu => (
                                                <ul key={menu}>
                                                    <input value={menu} name="checkbox" type="checkbox" className={styles.radio_class} />
                                                    <label className={styles.label}>
                                                        {menu}
                                                    </label>
                                                </ul>
                                            ))}
                                                 <div style={{ margin: "5px" }} />
                                                <a className={styles.a} href="/#schedule" target="_blank">*) Untuk melihat jadwal menu sarapan, silahkan klik link ini</a>                                                 
                                        </div>
                                    )}     
                                </div>

                                <div>
                                    <input
                                        className={styles.submit}
                                        type="submit"
                                        name="submit"
                                        value="Send"
                                        onClick={() => gotowhatsapp()}
                                    />
                                </div>
                            </form>
                        </StyledModalWrapper>
                    </div>    
                </div>        
            </body>
            <Head>
                <script async src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
                <script async type="text/javascript" src="js/script.js"></script>
            </Head>   
        </main>
    )

    const modalContentmobile = (
        <main>
            <body id='body'>
                <div className={styles.abc} id='abc'>
                    <div className={styles.popupContactMobile}>
                        <StyledModalWrapper ref={modalWrapperRef}>
                            <form className={styles.form_mobile}>
                                {/* <img className={styles.close} src="https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/16/yellow-cross-icon.png" onClick={() => div_hide()} /> */}
                                <MdOutlineRestaurantMenu className={styles.overlay_close} onClick={() => div_hide()} />
                                <h2 className={styles.h2_styles}>Order now!</h2>
                                <hr className={styles.hr}/>

                                <input id="wa_name" className={styles.wa_name} name="name" placeholder="Name" type="text" />
                                <textarea id="wa_textarea" className={styles.wa_textarea} name="address" placeholder="Alamat"></textarea>

                                <div className={styles.datainput}>
                                    <select required id="wa_select" className={styles.wa_select} onChange={(e)=>(handleshowhide(e))}>
                                        <option hidden='hidden' disabled selected>Pilih Menu</option>
                                        <option value="1">Special Menu</option>
                                        <option value="2">Breakfast Menu</option>
                                    </select>
                 
                                    {showhide==='1' && (
                                            <div>
                                                <div style={{margin:"10px"}}/>
                                                {special_menu_list?.map(menu => (
                                                    <ul key={menu}>
                                                    <input value={menu} name="checkbox" type="checkbox" className={styles.radio_class}/>
                                                    <label className={styles.label} htmlFor="radio">
                                                        {menu}
                                                    </label>
                                                    </ul>
                                                ))}
                                                <div style={{ margin: "5px" }} />
                                                <div>*) Min Pemesanan 10 porsi</div>                                                       
                                            </div> 
                                        )}  

                                    {showhide === '2' && (
                                        <div>
                                            <div style={{ margin: "10px" }} />
                                            <div>Menu hari {today}: </div>
                                            <div style={{ margin: "5px" }} />
                                            {breakfast_menu_list?.map(menu => (
                                                <ul key={menu}>
                                                    <input value={menu} name="checkbox" type="checkbox" className={styles.radio_class} />
                                                    <label className={styles.label}>
                                                        {menu}
                                                    </label>
                                                </ul>
                                            ))}
                                                 <div style={{ margin: "5px" }} />
                                                 <a href="/#schedule" target="_blank">*) Untuk melihat jadwal menu sarapan, silahkan klik link ini</a>                                                  
                                        </div>
                                    )}      

                                </div>

                                <div>
                                    <input
                                        className={styles.submit}
                                        type="submit"
                                        name="submit"
                                        value="Send"
                                        onClick={() => gotowhatsapp()}
                                    />
                                </div>
                            </form>
                        </StyledModalWrapper>
                    </div>
                </div>
            </body>
            <Head>
                <script async src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
                <script async type="text/javascript" src="js/script.js"></script>
            </Head>
        </main>
    )

        if(isMobile) {
            return (
                modalContentmobile
            )
        }
        return (
            modalContent
        );
};
const StyledModalWrapper = styled.div`
`;

export default Form