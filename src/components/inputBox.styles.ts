import styled from "styled-components";
export const Wrapper = styled.div`
form.create-note{
    position: relative;
    width: 480px;
    margin: 30px auto 20px auto;
    background-color: white;
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 1px 5px rgb(138, 137, 137);
}
form.create-note input,form.create-note textarea{
    width: 100%;
    border: none;
    outline: none;
    font-size: 1.2em;
    resize: none;

}
form.create-note button{
    position: absolute;
    background: #39bce4;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    right: 18px;
    bottom: -15px;
    cursor: pointer;
    outline: none;
}
.editBtn{
    position:absolute;
    right: 30px;
    bottom:2px;
    color: #39bce4;
    background-color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
}
`;