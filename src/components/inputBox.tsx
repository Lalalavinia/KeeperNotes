import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Zoom, Fab } from '@material-ui/core';
import { Wrapper } from "./inputBox.styles";

const InputBox = (props: { addNote: (arg0: { title: string; content: string; }) => void; }) => {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    const handleInput = ((event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setInputText(prevValue => {
            return ({
                ...prevValue,
                [name]: value
            })
        })
    })
    const[expansion,setExpansion]=useState(false);
    function expansionClick(){
        setExpansion(true);
    }
    function submitClick(e: { preventDefault: () => void; }){

        props.addNote(inputText); 
        setInputText({
            title: "",
            content: ""
        }); 
        e.preventDefault()
        setExpansion(false);

    }



    return (
        <Wrapper>
        <div>
            <form className="create-note">
                {expansion &&<input onChange={handleInput}
                    name="title"
                    placeholder="Title"
                    value={inputText.title}>
                </input>}

                <textarea 
                onClick ={expansionClick}
                onChange={handleInput}
                    name="content"
                    value={inputText.content}
                    placeholder="Take a note..."
                    rows={expansion? 3:1}>
                </textarea>
                <Zoom in={expansion}>
                <Fab className="fabBtn" onClick={submitClick} type="submit"><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
        </Wrapper>
    )
}
export default InputBox;