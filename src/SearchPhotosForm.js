import React, { useState } from "react";

export default function SearchPhotosForm (){
    const[query, setQuery] = useState("");
        console.log(query)
        return (
            <div>
                <form className="form">
                    <label className="label" htmlFor="query">
                        {" "}
                        📷
                    </label>
                    <input 
                        type="text" 
                        name= "query" 
                        className="input" 
                        placeholder={`Try "SanFran" or "dog"`} 
                        value={query}
                        onChange={(e)=> setQuery(e.target.value)}
                        />
                    <button type="submit" className="button">Search</button>
                </form>
            </div>
        )
    }

