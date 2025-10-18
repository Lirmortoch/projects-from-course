function FormGroup({ labelText, inputName, onChangeFunc }) {
    return (
        <fieldset className="form__group">
            <label className="form__label" htmlFor={inputName}>{labelText}</label>
            <input className="form__input" name={inputName} id={inputName} type="number" onChange={(e) => onChangeFunc(inputName, e.target.value)} placeholder="0" required />
        </fieldset>
    );
}

export default function UserInput({ handleSetUserInput }) {
    return (
        <form id="user-input" className="main__form form">
            <FormGroup 
                labelText='Initial Investment' 
                inputName="initialInvestment" 
                onChangeFunc={handleSetUserInput} 
            />
            <FormGroup 
                labelText='Annual Investment' 
                inputName='annualInvestment' 
                onChangeFunc={handleSetUserInput} 
            />
            <FormGroup 
                labelText='Expected Return' 
                inputName='expectedReturn' 
                onChangeFunc={handleSetUserInput} 
            />
            <FormGroup 
                labelText='Duration' 
                inputName='duration' 
                onChangeFunc={handleSetUserInput} 
            />
        </form>
    );
}