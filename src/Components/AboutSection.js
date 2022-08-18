import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

import project_management from '../img/icons/project_management.png'
import team_management from '../img/icons/team_management.png'
import box from '../img/box.png'
import agency1 from '../img/studio1.webp'
import skull from '../img/icons/skull.png'
import ship from '../img/icons/ship.png'
import treasure from '../img/icons/treasure.png'

function AboutSection() {
    const theme = useTheme()
    return (
        <AboutSectionStyled className='u-pad-lg-2' theme={theme} id="AboutSection" >
            <div className="left-about">
                <h1 className="title">
                    About
                </h1>
                <h2 className="sub-title">
                    Crypto-Currency Investment Group
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at,
                    nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?
                </p>
                <div className="about-info">
                    <div className="about-info-item">
                        <div className="icon">
                            <img src={ship} alt="" />
                        </div>
                        <div className="text-con">
                            <h5>
                                Web3 Community
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ut ratione atque blanditiis at, Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    
                    <div className="about-info-item">
                        <div className="icon">
                            <img src={treasure} alt="" />
                        </div>
                        <div className="text-con">
                            <h5>
                                Gem Listings
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ut ratione atque blanditiis at, Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div className="about-info-item">
                        <div className="icon">
                            <img src={skull} alt="" />
                        </div>
                        <div className="text-con">
                            <h5>
                                Collaborate
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ut ratione atque blanditiis at, Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-about">
                <img src={agency1} className={'about-img'} alt="" />
                <img src={box} className={'box-img'}  alt="" />
            </div>
        </AboutSectionStyled>
    )
}

const AboutSectionStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding-top: 17rem !important;
    .left-about{
        p{
            padding: 1.5rem 0;
        }
        .title{
            font-size: 2.7rem;
            margin: 20px 0px;
        }
        .about-info{
            .about-info-item{
                display: grid;
                grid-template-columns: 120px auto;
                margin-bottom: 1.5rem;
                p{
                    padding:.6rem 0;
                }
                h5{
                    font-size: 1.3rem;
                }
                .icon{
                    background-color: ${props => props.theme.colorWhite};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    align-self: flex-start;
                    margin-right: 1rem;
                    padding: 1rem;
                    border-radius: 7px;
                }
            }
        }
    }
    .right-about{
        position: relative;
        display: flex;
        justify-content: flex-end;
        .about-img{
            width: 90%;
            object-fit: cover;
            height: 500px;
            border-top-left-radius: 70px;
            border-bottom-right-radius: 70px;
            border-top-right-radius: 3px;
            border-bottom-left-radius: 3px;
            transition: all .3s ease-in-out;
            &:hover{
                transform: scale(1.05);
            }
        }
        .box-img{
            position: absolute;
            left: 3%;
            top: -8%;
            animation: scaleUp 8s infinite;
            @keyframes scaleUp {
                0%{
                    transform: scale(1);
                }
                50%{
                    transform: scale(1.2);
                }
                100%{
                    transform: scale(1);
                }
            }
        }
    }
`;

export default AboutSection