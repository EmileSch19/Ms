import style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import pic1 from '@/public/main-tatouee-sombre-concoit-decoration-effrayante-halloween-generee-par-ia.jpg';
import pic2 from '@/public/pexels-cottonbro-studio-10464545.jpg';
import pic3 from '@/public/fond-ecran-halloween-main-zombie.jpg';

export default function Parcours() {
  return (
    <>
      {/* Conteneur principal */}
      <div className={style.presentationContainer} id='teambuilder'>
        {/* Conteneur interne */}
        <div className={style.container}>
          {/* Rectangle contenant le contenu */}
          <div className={style.rectangle}>
            <span className={style.text}>
              ORGANISEZ VOUS
            </span>
            <span className={style.title}>
              Choisissez votre parcours et créez votre équipe
            </span>
            <span className={style.description}>
              {/* Paragraphe de description */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!</p>
            </span>
          </div>
          
          <div className={style.imageContainer}>
            <div className={style.topImages}>
            
              <div className={style.pic1}>
                <Image
                alt='object'
                fill={true}
                objectFit='cover'
                src={pic2}
                />
              </div>

              <div className={style.pic2}>
                <Image
                alt='object'
                fill={true}
                objectFit='cover'
                src={pic3}
                />
              </div>
            </div>

            <div className={style.bottomImages}>
              <div className={style.pic3}>
                  <Image
                  alt='object'
                  fill={true}
                  objectFit='cover'
                  src={pic1}
                  />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
