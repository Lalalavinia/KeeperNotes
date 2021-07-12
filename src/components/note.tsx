import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import {Wrapper} from "./note.styles";

type Props= {
    title:String;
    content:String;
    id:number;
    deleteItem:(id:number) => void;
}
const Note: React.FC<Props> =({title,content,deleteItem,id}) => {
    return(
    <Wrapper>
        <h5>{title}</h5>
        <p>{content}</p>
        {/* <button onClick={()=>props.editItem(props.id)} className="editBtn"><EditIcon/></button> */}
        <button onClick={()=>deleteItem(id)} className="deleteBtn"><DeleteIcon/></button>
    </Wrapper>
)}
export default Note;