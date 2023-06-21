import Input from "@/ui/components/Input";

export default function SearchForm({}) {
    let value = "";

    const handleChange = (e) => {

    }

    const handleFocus = () => {

    }

    const handleCategory = () => {

    }

    return (
        <form>
            <Input
                value={value}
                placeholder="Enter a domain.tld"
                readonly={false}
                search
                onChange={handleChange}
                onFocus={handleFocus}
                inputRef={null}>

            </Input>
        </form>
    )
}