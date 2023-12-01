import './Button.css'

function Button({
    children,
    className,
    aria_label,
    disabled = false, 
    type="button", 
    visual="button",
    onClick
}){
    let btnClass = "button-btn";
    if(visual == "link") {
        btnClass = "button-link";
    };

    return (
        <button 
            className={`${btnClass} ${className}`}
            aria-label={aria_label}
            disabled={disabled}
            type={type}
            
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;