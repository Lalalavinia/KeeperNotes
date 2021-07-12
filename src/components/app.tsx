import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import InputBox from "./inputBox";
import GlobalStyle from "../global";

export const App = () => {
    const[noteList,setNoteList]=useState<any[]>([]);

    useEffect(()=>{
        const json: string | null = localStorage.getItem("notes");
        if(json){
            const savedNotes=JSON.parse(json);
            setNoteList(savedNotes);
        }
    },[]);
    
    const addNote=(input: any)=>{
        setNoteList((prevValue)=>{
            return([...prevValue,input]);
        })
    }
    const deleteNote=(id: number)=>{
        setNoteList(prevValue=>{
            return(prevValue.filter((item,index)=>{
                return(index!==id);
            }))
        });
    }

    useEffect(()=>{
        const json = JSON.stringify(noteList);
        localStorage.setItem("notes",json);
    },[noteList]);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <InputBox addNote={addNote}/>
            {noteList.map((note,index) => <Note
            key={index}
            id={index}
            title ={note.title}
            content = {note.content}
            deleteItem ={deleteNote}
            />)}
            <Footer />
        </div>
    )
}
export default App;