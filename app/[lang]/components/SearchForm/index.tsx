import {DebounceInput} from "react-debounce-input";
import {ChangeEvent} from "react";
import ArrowIcon from "@/ui/icons/ArrowIcon";

export default function SearchForm({}) {
    let value = "";
    let size = undefined;
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        value = e.currentTarget.value;
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
                    placeholder="Please enter the domain you want to check"
                    onFocus={handleFocus}
                    onChange={handleChange}
                />
                <button className="form-control-button">
                    Search
                </button>
            </label>

        </form>
    )
}