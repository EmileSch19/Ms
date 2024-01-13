import style from './index.module.scss'

/* 
 */
interface puceProps{
    icon: string,
    color: string,
    title: string,
    text: string
}

export default function Puce(props: puceProps){
    /* 
     */
    const {icon, color, title, text} = props
    
    return (
        <div className={style.puce}>
            <div 
                className={style.iconContainer}
                style={{backgroundColor: `rgb(var(--${color}))`}}>
                <span className="material-icons">
                    {icon}
                </span>
            </div>

            <div className={style.information}>
                <span className={style.title}>
                    {title}
                </span>
                <span className={style.text}>
                    {text}
                </span>
            </div>
        </div>
    )

}