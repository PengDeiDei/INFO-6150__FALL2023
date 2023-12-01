import './Register.css'
import Button from './Button'
import {useState,useId } from 'react'

function Register(){
    const id = useId();
    const [username, setUsername] = useState('');
    const [usernameIsMissing, setUsernameIsMissing] = useState(false);
    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);

    function validatation(param){
        return param;
    }

    function goSubmit(e){
        e.preventDefault();
        setUsernameIsMissing(!validatation(username));
        setEmailIsMissing(!validatation(email));
        
        if(validatation(username) && validatation(email)){
            console.log(`username: ${username}`);
            console.log(`email: ${email}`);
            setUsername("");
            setEmail("");
        }else{
            console.log("blocked");
        }
    };

    return(
        <form className='subscribe__form' onSubmit={e=>goSubmit(e)}>
            <label htmlFor={`${id}-username`} className="form__lbl form-username">
                <span> Username:*required</span>
                <input 
                    id={`${id}-username`} className="form__username"
                    name='username' type='text' 
                    placeholder="Please enter your username"
                    onInput={(e)=>{
                        setUsername(e.target.value);
                        setUsernameIsMissing(!validatation(e.target.value));
                    }}
                />
                {usernameIsMissing && <span>Username is required</span>}
                </label>
                <label htmlFor={`${id}-email`} className="form__lbl form-email">
                    <span> Email: *required</span>
                    <input id={`${id}-email`} className="form__email"
                        name='email' type='text' 
                        placeholder="Please enter your email"
                        onInput={(e)=>{
                            setEmail(e.target.value);
                            setEmailIsMissing(!validatation(e.target.value));
                        }}    
                    />
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