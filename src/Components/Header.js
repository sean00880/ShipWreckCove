import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import Button from './Button';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import studio2 from '../img/studio2.webp'
import studio3 from '../img/studio3.webp'
import { useState } from 'react';
/*eslint-disable */

function Header() {
    const theme = useTheme()
    const [fix, setFix] = useState(false)
    return (
        <HeaderStyled theme={theme}>
            <div className="NavBar --var(ColorBg)">
            <NavBar />
            <MobileNavBar/>
            </div>
            <div className="header-content u-pad-lg" id="HeaderSection">
                <div className="left-content">
                <h1>
                    <span>GEM FINDERS</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae corrupti quae vero, expedita maiores voluptatibus quod iure laudantium itaque odit dicta? Eligendi consectetur repellendus rem ipsam mollitia impedit minus veritatis pariatur animi dicta totam perferendis nam delectus, quibusdam molestias aspernatur repudiandae architecto magni facere maxime temporibus nulla ex assumenda est. Similique vitae magnam sapiente illum at beatae dolore temporibus voluptatum quae qui omnis ipsam, repudiandae neque esse sit et aliquid odio non officiis vel, quam ullam! Minima eligendi nesciunt esse saepe repudiandae reprehenderit temporibus laudantium itaque similique nulla? Magnam autem modi quo quae nisi quos, voluptatem quisquam qui officia accusamus.
                </p>
                    <Button 
                        name={'Get Started'}
                        icon={'fas fa-chevron-right'}
                        arrow={'arrow'}
                        blob={'blob'}
                    />
                </div>
                <div className="right-content">
                    <img  className='h-img-3'  src={studio3} alt="" />
                    <img className='h-img-2' src={studio2} alt="" />
                </div>
            </div>
            <div className="mouse">
                <span></span>
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    min-height: 100vh;
    .navigation{
        top: 0;
        z-index: 10;
        background: #0c0c0c;
        width: 100%;
        position: fixed;
        display: grid;
        grid-template-columns: 100px 1fr auto;
        padding: 1rem 2rem;
        border-bottom: 1px solid ${props => props.theme.colorGrey9};
        animation: navHide 1s ease-in-out;
        @keyframes navHide {
            0%{
                transform: translateY(-100%) scaleY(0);
                opacity: 0;
            }
            100%{
                transform: translateY(0) scaleY(1);
                opacity: 1;
                visibility: visible;
            }
        }
        .logo{
            display: flex;
            align-items: center;
            animation: navHide 1s ease-in-out;
            animation-delay: 0.2s;
            visibility: hidden;
            animation-fill-mode: forwards;
        }
        .nav-items{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-left: 10px;
            margin-right: 4rem;
            animation: navHide 1s ease-in-out;
            animation-delay: .38s;
            visibility: hidden;
            animation-fill-mode: forwards;
            .nav-item{
                cursor: pointer;
                margin: 0 5px;
                a{
                    margin: 10px;
                    letter-spacing: 3px;
                    font-size:1.1rem;
                    font-size: 1.3rem;
                    padding: .8rem;
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: ${props => props.theme.colorGradientPrimary};
                        border: 1px solid white;
                        border-radius:  120px 90px 17px 50px;
                        transform: scale(.8);
                        display:none;
                        transition: all .4s ease-in-out;
                        z-index: -1;
                    }
                    &:hover:not(.active-menu){
                        &::before{
                            transform: scale(1);
                            display: block;
                        }
                    }
                    
                }
                
            }
            .active-menu{
                color: #0c0c0c;
                padding: 10px;
                border: 1px solid linear-gradient(red, 
                    rgba(0, 0, 0, 0)
                  ) 1 100%);
                border-radius: 17px 50px 120px 90px;      
                
            }
        }
    }
    .mobileNavigation{
        ul{
            z-index: 10; 
        background:black;
        height: 70vw;
        padding:70vw 0px;
        }

        display: none;
        grid-template-columns: 100px 1fr auto;
        padding: 1rem 2rem;
        border-bottom: 1px solid ${props => props.theme.colorGrey9};
        animation: navHide 1s ease-in-out;
        @keyframes navHide {
            0%{
                transform: translateY(-100%) scaleY(0);
                opacity: 0;
            }
            100%{
                transform: translateY(0) scaleY(1);
                opacity: 1;
                visibility: visible;
            }
        }
        .logo{
            display: flex;
            align-items: center;
            animation: navHide 1s ease-in-out;
            animation-delay: 0.2s;
            visibility: hidden;
            animation-fill-mode: forwards;
        }
        .nav-items{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-left: 10px;
            margin-right: 4rem;
            animation: navHide 1s ease-in-out;
            animation-delay: .38s;
            visibility: hidden;
            animation-fill-mode: forwards;
            .nav-item{
                cursor: pointer;
                margin: 0 5px;
                a{

                    letter-spacing: 3px;
                    font-size: 1.3rem;
                    padding: .8rem;
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: ${props => props.theme.colorGradientPrimary};
                        border: 1px solid white;
                        border-radius:  120px 90px 17px 50px;
                        transform: scale(.8);
                        display:none;
                        transition: all .4s ease-in-out;
                    }
                    &:hover:not(.active-menu){
                        &::before{
                            transform: scale(1);
                            display: block;
                        }
                    }
                    
                }
                
            }
            .active-menu{
                color: #0c0c0c;
                padding: 10px;
                border: 1px solid linear-gradient(red, 
                    rgba(0, 0, 0, 0)
                  ) 1 100%);
                border-radius: 17px 50px 120px 90px;      
                
            }
        }
    }

    @media (max-width: 990px){
        .NavBar .navigation{
            display: none;
        }
        
        .NavBar .mobileNavigation{
            display: flex;
            align-items: center;
        }
        
        .NavBar .mobileNavigation .hamburger{
            position: absolute;
            right: 5%;
            cursor: pointer;
            width: 70px;
            height: auto;
        }
        
        .NavBar nav ul{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 150px;
            right: -40px;
            witdth: 95%;
            background-color: #181818;
            border-top: 2px solid white;
        }
        .mobileNavigation .nav-items{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-left: 10px;
            margin-right: 4rem;
            animation: navHide 1s ease-in-out;
            animation-delay: .38s;
            visibility: hidden;
            animation-fill-mode: forwards;
            .nav-item{
                cursor: pointer;
                margin: 0 5px;
                position: relative;
                top: 180px;
                a{
                    margin: 10px;
                    letter-spacing: 3px;
                    font-size:1.1rem;
                    font-size: 1.3rem;
                    padding: .8rem;
                    position: relative;
                    &::before{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: ${props => props.theme.colorGradientPrimary};
                        border: 1px solid white;
                        border-radius:  120px 90px 17px 50px;
                        transform: scale(.8);
                        display:none;
                        transition: all .4s ease-in-out;
                        z-index:-20;
                    }
                    &:hover:not(.active-menu){
                        &::before{
                            transform: scale(1);
                            display: block;
                        }
                    }
                    
                }
                
            }
            .active-menu{
                color: black;
                padding: 10px;
                border: 1px solid linear-gradient(red, 
                    rgba(0, 0, 0, 0)
                  ) 1 100%);
                border-radius: 17px 50px 120px 90px;      
                
            }
        }
        
        
        .nav-btns-con {
            position:relative;
            padding: 0px 0px;
            top:20px;
            margin-left: 50px;
            position: relative;
    right: 29px;
        }
        .nav-btns-con a{
            padding: 10px 10px;

        }

        
        .nav-items {
            width: 100%;
        }

        .NavBar nav ul li {
            padding: 20px 30px;
            
        }
    }


    .header-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        padding: 13px;
        height: 140vh;
        top: 80px;
        margin-top:100px;
        position: relative;
        .left-content{
            animation: contentHide 1s ease-in-out;
            @keyframes contentHide {
                0%{
                    opacity: 0;
                    transform: translateX(-120%) scaleX(0);
                }
                100%{
                    opacity: 1;
                    transform: translateX(0) scaleX(1);
                }
            }
            h1{
                font-size: 4rem;
                font-weight: 800;
                span{
                    background:${props => props.theme.colorGradientPrimary2} ;
                    background-clip: text;
                    -webkit-background-clip: text;
                    color: transparent;
                }
            }
            p{
                font-size: 1.1rem;
                line-height: 1.6rem;
                padding: 2rem 1.7rem;
            }
        }
        .right-content{
            position: relative;
            transition: all .5s ease-in-out;
            animation: contentHide2 1s ease-in-out;
            animation-delay: .1s;
            opacity: 0;
            animation-fill-mode: forwards;
            top: -80px;
            @keyframes contentHide2 {
                0%{
                    opacity: 0;
                    transform: translateY(-120%) scale(0);
                    visibility: none;
                }
                100%{
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    visibility: visible;
                }
            }
            &:hover{
                .h-img-2{
                    transform: scale(0.9);
                }
                .h-img-3{
                    transform: scale(1.1);
                }
            }
            .h-img-2{
                position: absolute;
                width: 350px;
                height: 400px;
                object-fit: cover;
                left: 6%;
                top: -15%;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 70px;
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
                transition: all .4s ease-in-out;
            }
            .h-img-3{
                position: absolute;
                width: 56%;
                height: 600px;
                object-fit: cover;
                right: 0;
                border-bottom-right-radius: 70px;
                border-bottom-left-radius: 5px;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                transition: all .4s ease-in-out;
            }
        }
    }
    .mouse{
        position: absolute;
        bottom: 3%;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 45px;
        border-radius: 30px;
        border: 2px solid ${props => props.theme.colorWhite};
        pointer-events: none;
        span{
            position: absolute;
            left: 50%;
            top: 50%;
            width: 6px;
            height: 6px;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: ${props => props.theme.colorGradientPrimary3};
            animation: upDown 1s infinite;
            @keyframes upDown {
                0%{
                    transform: translateY(-13px) translateX(-50%) scale(1.3);
                }
                10%{
                    transform: translateY(-13px) translateX(-50%) scale(1.3);
                }
                50%{
                    transform: translateY(10px) translateX(-50%) scale(1);
                }
                100%{
                    transform: translateY(-13px) translateX(-50%) scale(1);
                }
            }
        }
    }

    
    @media only screen and (max-width: 1500px){
        .navigation .nav-items .nav-item a {
            letter-spacing:1px;
            margin: 0;
        }
        .navigation .nav-items {
        margin-right: 0px;
        }
    }
    
    @media only screen and (max-width: 1242px){
    .navigation{
        display: flex;
        flex-flow: column;
    }
    .navigation .nav-items {
        flex-flow: row;
        line-height: 30px;
        margin: 20px 10px;
    }
    .navigation .nav-items .nav-item a{
                   padding: 8px;
                   position: relative;
               }
    
               .nav-btns-con {
                float:right;
                postion:relative;
                display: flex;
                justify-content:end;
            }
    }
    @media only screen and (max-width: 900px){
        .header-content{
            top:0px;
            height: 290vh;
        }

        .header-content .right-content{
            display: flex;
            position: relative;
            top:30px;
        }
        .header-content .right-content .h-img-2{
            left:-96%;
            top:50%;
            width: 100%;
        }
        .header-content .right-content .h-img-3{
            top:-250px;
            width: 100%;
        }
    }
    @media only screen and (max-width:420px){
        .nav-btns-con a{
            position: relative;
            padding: 10px 10px;
            right: 55px;
            font-size:14px;
            top: 0px;
        }
    }

    .header-content {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-row-gap: 2rem;
    }
    .header-content .right-content .h-img-3{
        position: relative;
    }
    .header-content .right-content .h-img-2{
        position: relative;
    }
    .right-about .box-img{
        display:none;
    }

    
`;

export default Header