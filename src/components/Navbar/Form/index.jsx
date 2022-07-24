import styles from './styles.module.scss';
import Script from 'next/script'
import Head from 'next/head';


function Form() {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
      };
    return (
        <main>
            <body id='body'>
            <div className={styles.abc} id='abc'>
            <div className={styles.popupContact}>
                <form className={styles.form}>
                    <img className={styles.close} src="https://icons.iconarchive.com/icons/double-j-design/origami-colored-pencil/16/yellow-cross-icon.png" onClick={() => div_hide()}/>
                    <h2>Order now!</h2>
                    <hr />

                    <input  id="wa_name" className={styles.wa_name} name="name" placeholder="Name" type="text" />
                    <textarea  id="wa_textarea" className={styles.wa_textarea} name="message" placeholder="Alamat"></textarea>
       
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
                            //   class="btnSubmit btn-block"
                            value="Send"
                            onClick={() => gotowhatsapp()}
                        />
                    </div>
                </form>
            </div>
            </div>
</body>
        
            <Head>
                <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
                <script type="text/javascript" src="js/script.js"></script>
            </Head>
        </main>
        
    )
}

export default Form;