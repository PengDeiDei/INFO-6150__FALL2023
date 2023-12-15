import './css/Meet.css'
import Button from './Button'
import Subscribe from './Subscribe'
import { useRef } from 'react'

function Meet(){
    const dialogRef = useRef();

    return(
        <div className='meet'>
            <Button
                children='Read More'
                className='meet__link'
                aria_label='open meeting scheduling modal'
                visual='link'
                onClick={() => dialogRef.current.showModal()}
            />
            <dialog className='meet__dialog' ref={dialogRef}>
                <h3 className="meet__title"> Subscribe for More Information!</h3>
                <Subscribe/>
                <Button
                    children={<i className='gg-close-r'></i>}
                    className='dialog__close'
                    aria_label='close meeting scheduling modal'
                    onClick={()=>dialogRef.current.close()}
                />
            </dialog>
        </div>
    );
}

export default Meet;