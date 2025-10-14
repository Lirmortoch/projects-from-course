function FormGroup({ labelText, inputName, onChangeFunc }) {
    return (
        <fieldset className="form__group">
            <label className="form__label" htmlFor={inputName}>{labelText}</label>
            <input className="form__input" name={inputName} id={inputName} type="number" onChange={onChangeFunc} placeholder="0" />
        </fieldset>
    );
}

export default function UserInput({ handleIniInvestChange, handleAnnInvestChange, handleExpectedReturnChange, handleDurationChange }) {
    return (
        <form id="user-input" className="main__form form">
            <FormGroup 
                labelText='Initial Investment' 
                inputName="ini-investment" 
                onChangeFunc={handleIniInvestChange} 
            />
            <FormGroup 
                labelText='Annual Investment' 
                inputName='ann-investment' 
                onChangeFunc={handleAnnInvestChange} 
            />
            <FormGroup 
                labelText='Expected Return' 
                inputName='expect-return' 
                onChangeFunc={handleExpectedReturnChange} 
            />
            <FormGroup 
                labelText='Duration' 
                inputName='duration' 
                onChangeFunc={handleDurationChange} 
            />
        </form>
    );
}