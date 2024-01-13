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
    min?: number
    max?: number
}

export default function InputTextField(props: formInput){
    const {
        label,
        name, 
        type,
        placeholder, 
        isRequired, 
        onChange,
        controller ,
        min,
        max
    } = props

    return(
        <div className={style.InputContainer}>

                    {label ? <label> {label} <b>{isRequired ? "*" : ""}</b> <br /></label>: ''}
                    <input
                    {...controller(name, {
                            required: isRequired ? true : false,
                        }
                        )}
                    type={type} 
                    min ={min ? min : 0}
                    max ={max}
                    placeholder={placeholder}
                    onKeyUp={onChange}
                    />
                    {
                        (isRequired != undefined) && (isRequired[name] && <ErrorForm message={`${isRequired[name]?.message}`}/>)
                    }
        </div>
    )
}