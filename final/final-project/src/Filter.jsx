import './css/Filter.css'

function Filter({
   className,
   selectGender,setSelectGender,
   selectAge, setSelectAge 
}){
    return(
        <div className={`${className} filter__container`}>
            <label className="filter__lbl filter__lbl--gender">
                <span>Select gender of pet you prefer:</span>
                <select 
                    className="filter__select filter__select--gender"
                    value={selectGender}
                    onChange={e => setSelectGender(e.target.value)}  
                >
                    <option value="All"> All</option>
                    <option value="0"> Female</option>
                    <option value="1"> Male</option>
                </select>
            </label>
            <label className="filter__lbl filter__lbl--age">
                <span>Select age of pet you prefer:</span>
                <select 
                    className="filter__select filter__select--age"
                    value={selectAge}
                    onChange={e => setSelectAge(e.target.value)}  
                >
                    <option value="All"> All</option>
                    <option value="0"> Under One</option>
                    <option value="1"> 1 Year</option>
                    <option value="2"> 2 Years</option>
                    <option value="3"> 3+ Years</option>
                </select>
            </label>
        </div>

    );
}

export default Filter