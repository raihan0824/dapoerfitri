import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'
import Head from "next/head";
import styled from "styled-components";
import {isMobile} from 'react-device-detect';
import chooseByType from 'utils/chooseValueByType';


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
    const special_menu = chooseByType(info, 'food');
    const breakfast_menu = chooseByType(info, 'drink');

    // Create a list of menu items from API 
    var special_menu_list=[]
    for (var i = 0; i <= special_menu?.metadata?.menu.length-1; i++) {
        special_menu_list.push(special_menu?.metadata?.menu[i].title);
        }
    
    var breakfast_menu_list = []
    for (var i = 0; i <= breakfast_menu?.metadata?.menu.length - 1; i++) {
        breakfast_menu_list.push(breakfast_menu?.metadata?.menu[i].title);
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
                                <img className={styles.close} src="https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/16/yellow-cross-icon.png" onClick={() => div_hide()} />
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
                                                    <input value={menu} name="radio" type="radio" className={styles.radio_class}/>
                                                    {menu}
                                                    </ul>
                                                ))}                                                       
                                            </div> 
                                        )}  

                                    {showhide === '2' && (
                                        <div>
                                            <div style={{ margin: "10px" }} />
                                            {breakfast_menu_list?.map(menu => (
                                                <ul key={menu}>
                                                    <input value={menu} name="radio" type="radio" className={styles.radio_class} />
                                                    {menu}
                                                </ul>
                                            ))}
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
                                <img className={styles.close} src="https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/16/yellow-cross-icon.png" onClick={() => div_hide()} />
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
                                                    <input value={menu} name="radio" type="radio" className={styles.radio_class}/>
                                                    {menu}
                                                    </ul>
                                                ))}                                                       
                                            </div> 
                                        )}  

                                    {showhide === '2' && (
                                        <div>
                                            <div style={{ margin: "10px" }} />
                                            {breakfast_menu_list?.map(menu => (
                                                <ul key={menu}>
                                                    <input value={menu} name="radio" type="radio" className={styles.radio_class} />
                                                    {menu}
                                                </ul>
                                            ))}
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