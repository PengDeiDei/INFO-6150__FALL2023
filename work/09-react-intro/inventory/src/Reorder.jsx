function Reorder({onReorder}){
    return(
        <>
            <button 
                className="btn reorder-btn"
                onClick={() => onReorder(5)}
            > 
                Reorder
            </button>
        </>
    );
}

export default Reorder