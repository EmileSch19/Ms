import style from './index.module.scss'
import ErrorForm from '../ErrorForm';

export interface formInput {
    label?:   string;
    placeholder?:   any;
    type?:   string;
    controller:  any;
    name: string;
    onChange?: any
    isRequired?: any
}

export default function InputTextArea(props: formInput){
    const {
        label,
        name, 
        placeholder, 
        isRequired, 
        onChange,
        controller 
    } = props

    return(
        <div className={style.InputContainer}>

                    {label ? <label> {label} <b>{isRequired ? "*" : ""}</b> <br /></label>: ''}
                    <textarea
                    {...controller(name, {
                            required: isRequired ? true : false,
                        }
                        )}
                    min ="0"
                    placeholder={placeholder}
                    onKeyUp={onChange}
                    />
                    {
                        (isRequired != undefined) && (isRequired[name] && <ErrorForm message={`${isRequired[name]?.message}`}/>)
                    }
        </div>
    )
}