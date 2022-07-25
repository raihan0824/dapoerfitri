import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'
import Head from "next/head";
import styled from "styled-components";

const Modal = ({ onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    // create ref for the StyledModalWrapper component
    const modalWrapperRef = React.useRef();

    // check if the user has clickedinside or outside the modal
    const backDropHandler = e => {
        if (!modalWrapperRef?.current?.contains(e.target)) {
            onClose();
        }
    }

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
                            <h2>Order now!</h2>
                            <hr />

                            <input id="wa_name" className={styles.wa_name} name="name" placeholder="Name" type="text" />
                            <textarea id="wa_textarea" className={styles.wa_textarea} name="address" placeholder="Alamat"></textarea>

                            <div className={styles.datainput}>
                                <select id="wa_select" className={styles.wa_select}>
                                    <option hidden='hidden' defaultValue='default'>Pilih Menu</option>
                                    <option defaultValue="1">Menu 1</option>
                                    <option defaultValue="2">Menu 2</option>
                                    <option defaultValue="3">Menu 3</option>
                                </select>
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

                        <form className={styles.form_mobile}>
                            <img className={styles.close} src="https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/16/yellow-cross-icon.png" onClick={() => div_hide()} />
                            <h2>Order now!</h2>
                            <hr />

                            <input id="wa_name" className={styles.wa_name} name="name" placeholder="Name" type="text" />
                            <textarea id="wa_textarea" className={styles.wa_textarea} name="address" placeholder="Alamat"></textarea>

                            <div className={styles.datainput}>
                                <select id="wa_select" className={styles.wa_select}>
                                    <option hidden='hidden' defaultValue='default'>Pilih Menu</option>
                                    <option defaultValue="1">Menu 1</option>
                                    <option defaultValue="2">Menu 2</option>
                                    <option defaultValue="3">Menu 3</option>
                                </select>
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

    return modalContent
};
const StyledModalWrapper = styled.div`

`;

export default Modal