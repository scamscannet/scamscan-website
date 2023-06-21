import {DebounceInput} from "react-debounce-input";

export default function SearchForm({}) {
    let value = "";
    let size = undefined;
    function handleChange(){
        console.log("Banana")
    }

    const handleFocus = () => {

    }

    const handleCategory = () => {

    }

    return (
        <form>
            <label className="form-control-container" id="search-input-label">
                <div className="form-control-icon"></div>
                <input
                    id="search-input"
                    minLength={2}
                    className={`form-control form-control-full ${!!size ? 'form-control-' + size : ''}`}
                    placeholder="Please enter the domain youw ant to check"
                    value={value}
                    onFocus={handleFocus}
                    onChange={handleChange}
                />
            </label>

        </form>
    )
}