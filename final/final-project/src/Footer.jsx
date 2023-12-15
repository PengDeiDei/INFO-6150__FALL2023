import './css/Footer.css'

function Footer(){
    return (
        <footer >
            <ul className="footer__list">
                <li className="footer__item">
                    <a className='footer__link' href="privacy.html">Privacy Policy</a>
                </li>
                <li className="footer__item">
                    <a className='footer__link' href="work.html"> Work for Us</a>
                </li>
                <li className="footer__item">
                    <a className='footer__link' href="contact.html"> Contact Us</a>
                </li>
                <li className="footer__item">
                    <a className='footer__link' href="social.html"> Social Media</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;