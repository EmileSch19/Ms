import { useForm } from 'react-hook-form';
import InputTextField from './InputTextField'
import style from './index.module.scss'
import Image from 'next/image'
import InputTextArea from './InputTextArea';
import { useState } from 'react';

function Alert(props: any){
    const {status} = props
    return (
        <div 
            className={style.alterContainer}
            style={{backgroundColor: `${
                status == 200 ?
                "rgb(var(--green))" :
                "rgb(var(--red))"
            }`}}>
            <i className= {`material-icons`} style={{marginRight: "0.5em", fontSize: "1.5em"}}>
            {
            status == 200 ?
            "check_circle" :
            "warning"
          }
            </i>
          <span>
          {
            status == 200 ?
            "Envoi réuissi vous recevrez un email de confirmation" :
            "Une erreur s'est produite, réessayez plus tard"
          }
        </span>
        </div>
    )
}

export default function Form(props: any) {
    const { register,  handleSubmit, formState: {errors} } = useForm();
    const [status, setStatus] = useState<any>(null)

    const onSubmit = async (d: any) => {
        console.log(d)
        const url = "/api/form"

        let headers: any = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          cache: "default",
          body: JSON.stringify(d!)
        }

        let response = await fetch(url, headers)
        .then(response => {
            console.log(response)
            return response;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
        console.log(response)
        setStatus(response.status)
        return response;
    }

    return(
        <div className={style.formSection} id='contact'>
            <div className={style.formContainer}>
            <div className={style.left}>
                <Image 
                    src={'/paysage-dystopique-ville-gens-futuristes.jpg'} 
                    alt={'form paysage image'}
                    layout='fill'
                    objectFit='cover'>

                </Image>
                
            </div>
            <div className={style.right}>
                <span className={style.formTitle}>
                    <span>
                        BEDRINE
                    </span>
                    <b>
                        GAME
                    </b> <br />
                    <span>
                        Réservation/CONTACT 
                    </span>
                </span>

                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>

                    <InputTextField
                            label={"Nom"}
                            placeholder={"Nom de la personnes à contacter"} 
                            controller={register} 
                            isRequired={errors}
                            name={'name'}/>

                    <InputTextField
                            label={"Prénom"}
                            placeholder={"Prénom de la personnes à contacter"} 
                            controller={register} 
                            isRequired={errors}
                            name={'firstName'}/>

                    <InputTextField
                            label={"Société"}
                            placeholder={"Société"} 
                            controller={register} 
                            name={'society'}/>

                    <InputTextField
                            label={"Téléphone"}
                            placeholder={"Téléphone de la personnes à contacter"} 
                            controller={register} 
                            isRequired={errors}
                            name={'phone'}/>

                    <InputTextField
                            label={"email"}
                            type='email'
                            placeholder={"Prénom de la personnes à contacter"} 
                            controller={register} 
                            isRequired={errors}
                            name={'email'}/>

                    <InputTextField
                            label={"Date et heure"}
                            type='datetime-local'
                            placeholder={"Date et heure"} 
                            controller={register} 
                            isRequired={errors}
                            name={'date'}/>

                    <InputTextField
                            label={"Nombre de participants"}
                            type='number'
                            min={2}
                            max={14}
                            placeholder={"Nombre de participants"} 
                            controller={register} 
                            isRequired={errors}
                            name={'participants'}/>

                    <InputTextArea
                            label={"Commentaire"}
                            placeholder={"Ecrivez quelque chose à préciser"} 
                            controller={register} 
                            name={'message'}/>

                    <div className={style.buttonContainer}>
                    {
                        !!status ?
                        <Alert status={status}/> :
                        <button 
                        type='submit'
                        className={"pageButton"}
                        style={{backgroundColor: "rgb(var(--blue))"}}>
                            ENVOYER
                    </button>
                    }
                    {/*  */}
                    </div>

                </form>

            </div>
        </div>
        </div>
    )
}