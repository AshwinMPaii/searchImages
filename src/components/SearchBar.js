import { useState } from "react";
import './searchBar.css'

export default function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }
    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    return (
        <div className='search-bar'>
            <form onSubmit={onFormSubmit} >
                <label>Enter search term:</label>
                <input value={term} onChange={handleChange} style={{ border: '2px solid blue' }} />
            </form>
        </div>
    )
}
