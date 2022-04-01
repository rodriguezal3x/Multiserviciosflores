import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    border-bottom: 1px solid #203A43; 
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;

    p{
        &:nth-child(2) {
            margin-left: 0.3rem;
            font-family: 'Keania One';
            font-weight: 400;
            font-size: 3rem;
            color: #284D95;
        }

        &:nth-child(3) {
            font-family: 'Keania One';
            font-weight: 400;
            font-size: 3rem;
            letter-spacing: 0.05em;
            color: #E31F12;
            text-align: center; 
            
        }

        &:nth-child(4){
            border-left: 4px solid #284D95 ;
            height: 2.5rem;
            margin-left: 0.5rem; 
        }

        &:nth-child(5){
            margin-left: 0.3rem;
            font-family: 'Keania One';
            font-weight: 400;
            font-size: 1rem;
            color: #284D95; 
        }
   }

   @media screen and (max-width: 500px){
        p{
            &:nth-child(2) {
                font-size: 2rem;
            }

            &:nth-child(3) {
                font-size: 2rem;
            }

            &:nth-child(4) {
                border-left: 3px solid #284D95 ;
                height: 1.8rem;
                margin-left: 0.3rem;
            }

            &:nth-child(5) {
                font-size: 0.8rem;
            }  
        }
    }

    @media screen and (max-width: 260px){
        p{
            &:nth-child(2) {
                font-size: 1.4rem;
            }
    
            &:nth-child(3) {
                font-size: 1.4rem;
            }
    
            &:nth-child(4) {
                height: 1.2rem;
                margin-left: 0.2rem;
            }
    
            &:nth-child(5) {
                font-size: 0.6rem;
            }
        }
    }
`;

export const Logo = styled.img`
    width: 70px;

    @media screen and (max-width: 500px){
        width: 50px;
    }

    @media screen and (max-width: 260px){
        width: 40px;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    @media screen and (max-width: 960px) {
        background: #0F2027; 
        background: -webkit-linear-gradient(to top, #2C5364, #203A43, #0F2027);
        background: linear-gradient(to top, #2C5364, #203A43, #0F2027); 
        
        position: absolute;
        top: 70px;

        // import
        left: ${({ open }) => (open ? "0" : "-100%")};
        width: 100%;
        height: 90vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all ease;
    }
`;

export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2rem;
    color: #0A2E36;
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
        color: #14CC60;
        background-color: #225560;
        transition: 0.5s all ease;

        div {
            svg{
                fill: #0A2E36;
            }
        }
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            display: none;
            color: #14CC60;
            margin-right: 0.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        color: #ffffff;

        div {
            width: 30%;
            justify-content: left;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 800px){
        div {
            width: 40%;
            justify-content: left;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 500px){
        div {
            width: 60%;
            justify-content: left;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 260px){
        div {
            width: 100%;
            justify-content: left;

            svg {
                display: flex;
            }
        }
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        cursor: poiter;
    
        svg {
            fill: #14CC60;
            margin-right: 0.5rem;
        }
    }
`;