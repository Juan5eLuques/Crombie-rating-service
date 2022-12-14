import { useForm } from "./useForm";
import { FormArea } from "./FormArea";
import { Stars } from "../Stars/Stars";
import '../../styles/Form.css'
import {Link} from 'react-router-dom'

export const Form = () => {

const {form, handlerChangeCountry,handlerChangeName,handlerChangeEmail,handlerChangeCompany,handlerChangeStar} = useForm()

const setStars = (stars : number) => {
    handlerChangeStar(stars)
}

return (
    <div className="form-container">
        <form className="form" onSubmit={(e)=> {e.preventDefault();console.log(form)}}>
           <FormArea title="My name is " handlerOnChange={handlerChangeName} placeholder={'your name'}></FormArea>
           <FormArea title="I'm from " handlerOnChange={handlerChangeCountry} placeholder={'city, country'}></FormArea>
           <FormArea title="My email is" handlerOnChange={handlerChangeEmail} placeholder={'your email'}></FormArea>
           <FormArea title="My company is" handlerOnChange={handlerChangeCompany} placeholder={'your company'}></FormArea>
           <br/><br/>
           <Stars getStars={setStars}/>
           <br/><br/>
           <button className="button-next-page">Next</button>
        </form>
    </div>);
}