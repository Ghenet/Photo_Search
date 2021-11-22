

export default function SearchPhotosForm (){
  
        return (
            <div>
                <form className="form">
                    <label className="label" htmlFor="query">
                        {" "}
                        📷
                    </label>
                    <input type="text" name= "query" className="input" placeholder={`Try "SanFran" or "dog"`} />
                    <button type="submit" className="button">Search</button>
                </form>
            </div>
        )
    }

