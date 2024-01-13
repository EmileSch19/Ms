import Puce from '../puces'
import style from './index.module.scss'

export default function PucesInformation(){
    return(
        <div className={style.puceContainer}>
            <div className={style.puceElements}>
                <Puce 
                    icon={'people_alt'} 
                    color={'blue'} 
                    title={'Equipe'} 
                    text={'de 02 à 14 personnes'}/>

                <Puce 
                    icon={'timelapse'} 
                    color={'red'} 
                    title={'durée'} 
                    text={'120 minutes (2h)'}/>

                <Puce 
                    icon={'temple_buddhist'} 
                    color={'darkGray'} 
                    title={'thème'} 
                    text={'Horreur / Murder mystery'}/>
            </div>
        </div>
    )
}