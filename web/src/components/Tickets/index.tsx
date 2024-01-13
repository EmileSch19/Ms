import { useEffect, useState } from 'react'
import style from './index.module.scss'
import Image from 'next/image'

export default function Ticket()  {
    /* 
        Initialization of the data table for the different themes as two separate objects
    */
    const TicketContain = [
        {
            preTitle : "PROUVEZ VOTRE COURAGE",
            title : "Affrontez vos Peurs.",
            headerImage: "/Horror.png",
            introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!",
            ticketName: "Red Ticket",
            ticketGoal: "Séance d’horreur en groupe",
            ticketDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos.",
            presentationImage: "/zombie-main-concept-theme-halloween.jpg"
        },
        {
            preTitle : "Soyez les héros de l’histoire ",
            title : "Sur les traces d’un serial killer.",
            headerImage: "/Mistery.png",
            introText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!",
            ticketName: "BLUE Ticket",
            ticketGoal: "Trouvez le tueur",
            ticketDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos.",
            presentationImage: "/officiers-afro-americains-examinant-casiers-judiciaires.jpg"
        },
    ]

    /* 
        Initializing js bookmarks to control the currently active element
     */
    const[activeTicket, setActiveTicket] = useState(false)
    const[activeContent, setActiveContent] = useState(TicketContain[0])

    /* 
        Integration of event controllers to display the right data in the right form when changing tickets
    */

    useEffect(() => {
        var horrorSelector = document.getElementById("horrorSelector");
        var horrorSelectorWidth = horrorSelector!.offsetWidth;

        var murderSelector = document.getElementById("murderSelector");
        var murderSelectorWidth = murderSelector!.offsetWidth - 4.8;

        var selector = document.getElementById("selector");
        selector!.style.width = `${activeTicket ? murderSelectorWidth : horrorSelectorWidth}` + "px"
        selector!.style.left = `${activeTicket ? horrorSelectorWidth + 22.4 : 3.2}` + "px"

    }, [activeTicket])

    useEffect(() => {
        if(activeTicket){
            setActiveContent(TicketContain[1])
        }

        else{
            setActiveContent(TicketContain[0])
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTicket])

    return (

        /* 
          Dynamic integration of html content with display conditions  
         */
        <div className={style.ticketContainer} id='adventure'>
            <style>
                {`
                    .${style.imageContainer}::before {
                        background: ${activeTicket ? "rgba(var(--blue), 0.10)" : "rgba(var(--red), 0.10)"};
                    }
                `}
            </style>
            <div className={style.ticket}>
                <div className={style.ticketHeader}>

                    <div className={style.headerText}>
                        <span 
                            className={style.preTitle}
                            style={{color: `${activeTicket ? "rgb(var(--blue))" : "rgb(var(--red))"}`}}>
                            {activeContent.preTitle}
                        </span>
                        <span className={style.title}>
                            {activeContent.title}
                        </span>
                    </div>

                    <div className={style.headerImage}>
                        <Image 
                            src={activeContent.headerImage} 
                            alt={'/team icon for horror'}
                            layout='responsive'
                            width={200}
                            height={100}/>

                    </div>

                </div>

                <div className={style.introText}>
                   <span className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga sunt quis quod, maiores nam laborum delectus obcaecati rerum porro, assumenda enim est nostrum dignissimos. Odit deleniti quia voluptatibus rerum!
                    </span> 
                </div>

                <div className={style.switcher}>
                <input type="checkbox" id="toggle1" className={style.toggle} onChange={() => {setActiveTicket(!activeTicket)}} checked={activeTicket}/>   
                <div className={`${style.selector}`} id='selector'></div>
                <label className={style.switchBar}></label>
                
                <div className={`${style.spanState}`}>
                    <span className={""} id='horrorSelector'>
                        <span 
                            className={style.bubble} 
                            style={{backgroundColor: `${activeTicket ? "rgba(204, 204, 204, 0.50)" : "rgb(var(--red))"}`}}>
                        </span>
                        <b
                            style={{color: `${activeTicket ? "rgba(204, 204, 204, 0.50)" : "black"}`}}
                            >Horreur</b>
                    </span>
                    
                    <span className={""} id='murderSelector'>
                        <span 
                            className={style.bubble} 
                            style={{backgroundColor: `${activeTicket ? "rgb(var(--blue))" : "rgba(204, 204, 204, 0.50)"}`}}>
                        </span>
                        <b
                            style={{color: `${activeTicket ? "black" : "rgba(204, 204, 204, 0.50)"}`}}>
                            Murder mystery
                        </b>
                    </span>
                </div>
                </div>

                <div className={style.ticketPresentation}>
                    <div className={style.presentationText}>
                        <span className={style.ticketName}
                            style={{color: `${activeTicket ? "rgb(var(--blue))" : "rgb(var(--red))"}`}}>
                            {activeContent.ticketName}
                        </span>
                        <span className={style.ticketGoal}>
                            {activeContent.ticketGoal}
                        </span>
                        <span className={style.ticketDescription}>
                            {activeContent.ticketDescription}
                        </span>

                        <button 
                            className={"pageButton"}
                            style={{backgroundColor: `${activeTicket ? "rgb(var(--blue))" : "rgb(var(--red))"}`}}>
                            Contactez nous
                        </button>
                    </div>
                    <div className={style.presentationImage}>
                        <div 
                            className={style.imageContainer} 
                            id='imageContainer'
                            style={{
                                width: `${activeTicket ? "32rem" : "35.5625rem"}`,
                                height: `${activeTicket ? "12rem" : "18.875rem"}`,
                                right: `${activeTicket ? "-5rem" : "0em"}`,
                                transform: `${activeTicket ? "rotate(-11.146deg)" : "rotate(-22.328deg)"}`,
                                mixBlendMode: `${activeTicket ? "normal" : "lighten"}`
                            }}  
                            >
                            <Image 
                                src={activeContent.presentationImage} 
                                alt={'/team icon for horror'}
                                layout='responsive'
                                width={200}
                                height={100}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}