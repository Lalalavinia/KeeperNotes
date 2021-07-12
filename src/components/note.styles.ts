import styled from "styled-components";
export const Wrapper = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 2px 5px #ccc;
    padding: 10px;
    width: 240px;
    margin: 16px;
    float: left;

    h5{
        font-size: 1.1rem;
        margin-bottom: 1vw;
        white-space: pre-wrap;
    }
    button{
        position:absolute;
        right: 5px;
        bottom:2px;
        color: #39bce4;
        background-color: #fff;
        border: none;
        cursor: pointer;
        outline: none;
    }
`;