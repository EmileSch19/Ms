import style from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
const bg = '/silhouette-zombie-effrayant-fond-dramatique.jpg'
const pic = '/magnifying-glass-light-.png'
export default function Cover(props: any) {
    return (
        <div id='home'>
            <div className={style.backgroundParent}>
                <Image
                    className={style.Background}
                    alt="Background"
                    fill={true}
                    objectFit='cover'
                    src={bg}/>
                </div>

                <Image
                    className={style.Object}
                    alt='object'
                    width={300}
                    height={150}
                    src={pic}/>

                <div className={style.container}>
                    <Link href="#concept" className={style.scroll}>
                        <div>
                                <div className={style.arrowContainer}>
                                    <span className="material-icons" style={{color: 'white', fontSize: "3rem"}}>
                                        keyboard_double_arrow_down
                                    </span>
                                </div>
                                <p className={style.firstp}>Découvrir</p>
                        </div>
                    </Link>

        </div>

        
        <div className={style.fixedIconContainer}>
            
            
            <a href="#top" style={{color: 'white'}}>
                <span className="material-icons">
                arrow_upward
                </span>
            </a>
        </div>

        <div className={style.textContainer}>
            <p>
                <span>
                <b className={style.text1}>
                    Horreur / 
                </b>
                <b className={style.murder}>
                    Murder mystery
                </b>
                </span>
            <span className={style.text2}>
            Vous êtes là pour La craque.
            </span>
            <span className={style.text3}>
            Tentez de retrouver en 2h le Serial Killer qui sévit dans la ville de lyon depuis des mois
            </span>
            </p>
            </div>
        </div>
    );
}
