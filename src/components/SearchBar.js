import React, { useEffect, useRef, useState } from "react";
const SearchBar = ({ onFormSubmit, defaultTerm }) => {
    const [data, setData] = useState(defaultTerm);
    const formRef = useRef();

    useEffect(() => {
        const handleEvent = (e) => {
            e.preventDefault();
            onFormSubmit(data);
        }
        const formRefNode = formRef.current;
        formRefNode.addEventListener('submit', handleEvent);
        return (() => {
            formRefNode.removeEventListener('submit', handleEvent);
        });
    });
    return (
        <div className="ui segment" style={{ marginTop: "20px" }}>
            <form className="ui form" ref={formRef}>
                <div className="field">
                    <label htmlFor="inputBar">Youtube Search : </label>
                    <div className="ui icon input">
                        <input type="text" className="ui input" id="inputBar"
                            onChange={(e) => {
                                setData(e.target.value)
                            }}
                            value={data}
                        />
                        <button type="submit" className="ui submit button">
                            <i className="search icon"></i>
                        </button>
                    </div>
                </div>
                <footer>{data.length === 0 ? "Input should not be empty !" : ""}</footer>
            </form>
        </div>
    );
}

export default SearchBar;