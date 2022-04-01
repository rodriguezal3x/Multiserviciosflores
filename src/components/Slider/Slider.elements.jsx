import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // background-color: coral;
    position: relative;
    overflow: hidden;
`;

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`;

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
    width: 100vw;   
    height: 100vh; 
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

export const ImgContainer = styled.div`
    height: 100%;
    flex:1;
    max-width: 50%
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    flex:1;
    text-align:center;
`;

export const Title = styled.h1`
    font-size: 40px;
`;

export const Desc = styled.p`
    margin: 0px 40px;
    font-size: 18px;
    font-weight: 500;
`;

export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;
