import style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import pic from '@/public/tourne-interieur-ancienne-installation-abandonnee-dans-ville-banlieue.jpg';
import { useEffect } from 'react';

export default function Present(){
    useEffect(() => {
        const sessionDiv = document.getElementById('concept');
        const sessionTitle = document.getElementById('conceptTitle');

       function adjustFontSize() {
            const parentWidth = sessionDiv!.offsetWidth;
            const desiredFontSize = parentWidth * 0.06;

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
    return(
    <>
        <div className={style.presentationContainer} id='concept'>
            <div className={style.container}>
                <div className={style.rectangle}>  
                    <h1 className={style.title} id='conceptTitle'>UN NOUVEL ESCAPE GAME</h1>
                    <div className={style.description}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!</p>
                    </div>
                <div className={style.text}>
                    <button 
                        className={"pageButton"}
                        style={{backgroundColor: `rgb(var(--blue))`}}>
                        CONTACTEZ NOUS
                    </button>
                </div>
            </div> 

                <div className={style.pic}>
                    <Image
                        alt='object'
                        objectFit='cover'
                        fill={true}
                        src={pic}
                    />
                </div>
        </div>
        </div>
    </>);
}