import './Subscribe.css'
import Button from './Button'
import Register from './Register';
import { useRef} from 'react';

function Subscribe(){
    const dialogRef = useRef();
    return (
        <div className='subscribe'>
            <Button
                children='Subscribe for More'
                className='subscribe__link'
                aria_label='open register modal'
                visual='link'
                onClick={() => dialogRef.current.showModal()}
            />
            <dialog className='subscribe__dialog' ref={dialogRef}>
                <h3 className="subscribe__title"> Subscribe to the Latest Mews!</h3>
                <Register/>
                <Button
                    children={<i className='gg-close-r'></i>}
                    className='dialog__close'
                    aria_label='close register modal'
                    onClick={()=>dialogRef.current.close()}
                />
            </dialog>
        </div>
    );
}

export default Subscribe;