import { useState } from "react";

function Search(props) {
    const [writen, setWriten] = useState("");

    const { data } = props;

    const searchInput = (event) => {
        setWriten(event.target.value);
    }

    return (
        <div>
            <input 
            type="text"
            placeholder='search...'
            onChange={(event) => searchInput(event)}/>
            {
            data.filter(value => {
                if (writen === "") {
                    return value;
                } else if (value.first_name.toLowerCase().includes(writen.toLowerCase())) {
                    return value;
                }
            }).map(item => {
                return (
                    <div>
                        <p>{item.first_name}</p>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Search;