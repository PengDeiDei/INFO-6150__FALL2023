import './css/Subscribe.css'
import Button from './Button'
import { useState,useId } from 'react'

function Register(){
    const id = useId();
    const [name, setName] = useState('');
    const [nameIsMissing, setNameIsMissing] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
    const [nameSubscribed, setNameSubscribed] = useState('');
    const [emailSubscribed, setEmailSubscribed] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);


    function validatation(param){
        return param;
    }

    function emailVlidation(email){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    function goSubmit(e){
        e.preventDefault();
        setNameIsMissing(!validatation(name));
        setEmailIsMissing(!validatation(email));

        if(validatation(name) && validatation(email)
            && emailVlidation(email)){
            console.log(`name: ${name}`);
            console.log(`email: ${email}`);
            setNameSubscribed(name);
            setEmailSubscribed(email);
            setIsSubscribed(true);
            setName("");
            setEmail("");
        }else{
            console.log("blocked");
        }
    };

    return(
        <form className='subscribe__form' onSubmit={e=>goSubmit(e)}>
            {isSubscribed &&
                <div className='from__message--subscribed'>
                    <p> Thanks for subscribing!</p> 
                    <p> Your Email is: {emailSubscribed}</p>
                    <p> The email may be in your junk mail, lease check your email.</p>
                    <p> Hope to see you soon, {nameSubscribed}!</p>
                </div>
            }

            <label htmlFor={`${id}-name`} className="form__lbl form-name">
                <span> Name:*required</span>
                <input 
                    id={`${id}-name`} className="form__name"
                    name='name' type='text' 
                    placeholder="Please enter your name"
                    onInput={(e)=>{
                        setName(e.target.value);
                        setNameIsMissing(!validatation(e.target.value));
                    }}
                />
                {nameIsMissing && <span>Name is required</span>}
                </label>
                <label htmlFor={`${id}-email`} className="form__lbl form-email">
                    <span> Email: *required</span>
                    <input id={`${id}-email`} className="form__email"
                        name='email' type='text' 
                        placeholder="Please enter your email"
                        onInput={(e)=>{
                            setEmail(e.target.value);
                            setEmailIsMissing(!validatation(e.target.value));
                            setEmailIsInvalid(!emailVlidation(e.target.value));
                        }}    
                    />
                    {!emailIsMissing && emailIsInvalid && <span>Email is invalid</span>}
                    {emailIsMissing && <span>Email is required</span>}
                </label>
                <Button 
                    children='Subscribe!'
                    className='subscribe-btn'
                    aria_label='submit register form'
                    type='submit'
                    visual='link'
                />
        </form>
    );
}

export default Register;