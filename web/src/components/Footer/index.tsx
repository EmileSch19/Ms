import style from './index.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp, faSnapchatGhost, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
      const sessionDiv = document.getElementById('bottomContainer');
      const sessionTitle = document.getElementById('titleFooter');

    function adjustFontSize() {
          const parentWidth = sessionDiv!.offsetWidth;
          const desiredFontSize = parentWidth * 0.07;

          console.log(parentWidth)
          if(parentWidth < 1511 && parentWidth > 960) {
              sessionTitle!.style.fontSize = `${desiredFontSize}px`;
          }

          else{
              sessionTitle!.style.fontSize = "1re";
          }
    }

      adjustFontSize();

      window.addEventListener('resize', adjustFontSize);
  })
  return (
    <div className={style.containerFooter} >
      <div className={style.recFooter}>
        <div className={style.socialMediaIcons}>
          <Link href="URL_TO_FACEBOOK_PAGE" passHref>
            <FontAwesomeIcon icon={faFacebookF} className={style.iconFacebook} />
          </Link>
          <Link href="URL_TO_INSTAGRAM_PAGE" passHref>
            <FontAwesomeIcon icon={faInstagram} className={style.iconInstagram} />
          </Link>
          <Link href="URL_TO_TWITTER_PAGE" passHref>
            <FontAwesomeIcon icon={faTwitter} className={style.iconTwitter} />
          </Link>
          <Link href="URL_TO_WHATSAPP_PAGE" passHref>
            <FontAwesomeIcon icon={faWhatsapp} className={style.iconWhatsapp} />
          </Link>
          <Link href="URL_TO_SNAPCHAT_PAGE" passHref>
            <FontAwesomeIcon icon={faSnapchatGhost} className={style.iconSnap} />
          </Link>
        </div>
      </div>
      <div className={style.bottomContainer} id='bottomContainer'>
        <div className={style.berdineGame}>
          <p className={style.titleFooter} id='titleFooter'>
            BERDINE<b className={style.game}>GAME</b>
          </p>
        </div>
        <div className={style.regel}>
          <div className={style.first}>
            <p>Légal</p>
          </div>
          <div className={style.second}>
            <Link href="" passHref>Mentions légales</Link>
          </div>
          <div className={style.third}>
            <p>© 2023 BedrineGame tous droits reservés</p>
          </div>
        </div>
      </div>
    </div>
  );
}
