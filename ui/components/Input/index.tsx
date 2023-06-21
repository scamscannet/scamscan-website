import {forwardRef} from 'react';
import {DebounceInput} from "react-debounce-input";

const Input = (
    {
        type = 'text',
        placeholder,
        search = false,
        size = null,
        readonly = false,
        value = '',
        onChange = undefined,
        onReset = undefined,
        onFocus = undefined,
        minLength = 2,
        debounceTimeout = 500,
        inputRef = null
    }, ref) => {
    return (
        <label className="form-control-container" id="search-input-label">
            {search ? <div className="form-control-icon"></div> : null}
            <DebounceInput
                id="search-input"
                minLength={minLength}
                debounceTimeout={debounceTimeout}
                type={type}
                className={`form-control form-control-full ${!!size ? 'form-control-' + size : ''}`}
                placeholder={placeholder}
                readOnly={readonly}
                value={value}
                onFocus={onFocus}
                onChange={(e)=> onChange && onChange(e.target.value)}
                inputRef={inputRef}
            />
            {onReset && value !== '' ? <button className="form-control-button" onClick={onReset}><CancelIcon/></button> : null}
        </label>
    )
}

export default forwardRef(Input)