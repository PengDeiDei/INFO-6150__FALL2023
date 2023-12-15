import './css/Service.css'
import { useState, useId, useDebugValue } from 'react';
import Button from './Button';

function Service(){
    const id = useId();

    const [name, setName] = useState('');
    const [nameIsMissing, setNameIsMissing] = useState(false);

    const [email, setEmail] = useState('');
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);

    const [petName, setPetName] = useState('');
    const [petNameIsMissing, setPetNameIsMissing] = useState(false);

    const [date, setDate] = useState('');
    const [dateIsMissing, setDateIsMissing] = useState(false);

    const [event, setEvent] = useState('');

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
        
        if(validatation(name) && validatation(email)){
            console.log(`name: ${name}`);
            console.log(`email: ${email}`);
            console.log(`pet name: ${petName}`);
            console.log(`date: ${date}`);
            console.log(`event: ${event}`);

            setName('');
            setEmail('');
            setDate('');
            setPetName('');
            setEvent('');
        }else{
            console.log("blocked");
        }
    };

    return(
        <div className='service'>
            <form className='service__form' onSubmit={e=>goSubmit(e)}>
            <label htmlFor={`${id}-name`} className="form__lbl form-lbl--name">
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
                {nameIsMissing && <span> Name is required</span>}
                </label>

                <label htmlFor={`${id}-email`} className="form__lbl form-lbl--email">
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
                    {!emailIsMissing && emailIsInvalid && <span> Email is invalid</span>}
                    {emailIsMissing && <span> Email is required</span>}
                </label>

                <label htmlFor={`${id}-petName`} className='form__lbl form-lbl--petName'>
                    <span> Pet Name: *required</span>
                    <input id={`${id}-petName`} className='form__petName'
                        name='petName' type='text'
                        placeholder="Please enter your pet's name"
                        onInput={(e)=>{
                            setPetName(e.target.value);
                            setPetNameIsMissing(!validatation(e.target.value));
                        }}
                    />
                    {petNameIsMissing && <span> Pet Name is required</span>}
                </label>

                <label htmlFor={`${id}-date`} className='form__lbl form-lbl--date'>
                    <span> Appointment Date: *required</span>
                    <input id={`${id}-date`} className='form__date'
                        name='date' type='date'
                        onInput={(e)=>{
                            setDate(e.target.value);
                            setDateIsMissing(!validatation(e.target.value));
                        }}
                    />
                    {dateIsMissing && <span> Appointment date is required</span>}
                </label>
                
                <label htmlFor={`${id}-event`} className='form__lbl form-lbl--event'>
                    <span> Please select event you want to book:</span>
                    <select
                        className='form__select'
                        value={event}
                        onChange={e => setEvent(e.target.value)}
                    >
                        <option value=''></option>
                        <option value='Exam'> Exam</option>
                        <option value='Dewormer'> Dewormer</option>
                        <option value='Tapeworm '> Tapeworm Treatment</option>
                        <option value='Flea'> Flea Treatment</option>
                        <option value='FELV/FIV'> FELV/FIV Test</option>
                        <option value='Heartworm'> Heartworm Test</option>
                        <option value='Microchip'> Microchip</option>
                    </select>
                    {event === '' && <span> Appointment event is required</span>}
                </label>

                <Button 
                    children='Book Now!'
                    className='service-btn'
                    aria_label='submit appointment form'
                    type='submit'
                    visual='btn'
                />
            </form>
        </div>
    );
}

export default Service;