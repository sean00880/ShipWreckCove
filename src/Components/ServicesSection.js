import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import Title from '../Components/Title'
import ServiceCard from './ServiceCard';
import ServiceCard2 from './ServiceCard2';
import ServiceCard3 from './ServiceCard3';
import animation from '../img/icons/3dAnimation.png'
import artificialIntelligence from '../img/icons/artificial_intelligence.png'
import gameDevelopment from '../img/icons/game_dev.png'
import emergencySoftware from '../img/icons/emergency.png'
import globalTeaching from '../img/icons/global.png'
import videoProduction from '../img/icons/video_production.png'

function ServicesSection() {
    const theme = useTheme()
    return (
        <ServicesSectionStyled className='u-pad-lg-2' theme={theme} id='ServicesSection'>
        <div className="title-con">
                <Title 
                    name={'Community'}
                    subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                />
            </div>
        <div className="cardContainer">
        <ServiceCardStyled theme={theme}>
            <div className="s-item-con">
                <img src={animation} alt="" />
                <h4>Crypto Chat</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ducimus modi consequuntur praesentium, veritatis nemo sint.
                </p>
                <a href='#' Name="learn-more">
                    <span>
                        Join Us
                    </span>
                    <span className="arrow">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </a>
            </div>
        </ServiceCardStyled>
        <ServiceCardStyled theme={theme}>
            <div className="s-item-con">
                <img src={globalTeaching} alt="" />
                <h4>Gems & Pinned Posts</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ducimus modi consequuntur praesentium, veritatis nemo sint.
                </p>
                <a href='https://shipwreckc0ve.gitbook.io/shipwreck-cove/gems' Name="learn-more">
                    <span>
                        Join Us
                    </span>
                    <span className="arrow">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </a>
            </div>
        </ServiceCardStyled>
        <ServiceCardStyled theme={theme}>
            <div className="s-item-con">
                <img src={emergencySoftware} alt="" />
                <h4>AMA Lounge</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Ducimus modi consequuntur praesentium, veritatis nemo sint.
                </p>
                <a href='#' Name="learn-more">
                    <span>
                        Join Us
                    </span>
                    <span className="arrow">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </a>
            </div>
        </ServiceCardStyled>
        </div>
        </ServicesSectionStyled>
    )
}

const ServicesSectionStyled = styled.section`
    .services-con{
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        grid-gap: 2rem;
        padding-top: 3rem;
    }

    .cardContainer{
        display: flex;
    }

    @media (max-width: 990px){
        .services-con{
            display: block;
        }

        .cardContainer{
            flex-flow:column;
        }
    }
`;

const ServiceCardStyled = styled.section`
    background-color: ${props => props.theme.colorGreyLight};
    text-align: center;
    padding: 3rem 1rem;
    margin: 4px;
    border-radius: 10px 40px;
    transition: all .4s ease-in-out;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .4rem;
        background: ${props => props.theme.colorGradientPrimary2};
        transition:all .4s ease-in-out;
        transform: scale(0);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    &:hover{
        box-shadow: 10px 10px 0px ${props => props.theme.colorBorder};
        transform: translateY(-15px);
        &::before{
            transform: scale(1);
        }
        border-radius: 10px 50px 0px 0px;
    }
    .s-item-con{
        img{
            padding-bottom: 2rem;
            height: 100px;
        }
        h4{
            font-size: 1.5rem;
            padding-bottom: 1rem;
        }
        p{
            padding-bottom: 1.5rem;
        }
    }
    .cardContainer{
        display: flex;
        flex-direction:column;
    }
`;


export default ServicesSection;