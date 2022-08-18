import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';
import Title from '../Components/Title'

import latest from '../img/latest.jpg'
import Button from './Button';

function LatestSection() {
    const theme = useTheme()
    return (
        <LatestSectionStyled className='u-pad-lg-2' theme={theme}>
            <div className="title-con">
                <Title
                    name={'Our Partners'}
                    subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                />
            </div>

            <div className="latest-container">
                <div className="latest-content">
                    <img src={latest} alt="" />
                    <div className="latest-text">
                        <h4 className="title">
                        Nexus Crypto Services ✖
                        </h4>
                        <h6>All in one platform for traders old and new</h6>
                        <p>
                        Nexus provides new and experienced crypto users with an all-in-one platform for their entire crypto journey. From learning how to get set up in the world of crypto & making your first trade to facilitating cross-chain bridging of funds & NFT tracking.<br/>
✅dApp LIVE<br/>
✅Doxxed Team & LLC in Wyoming<br/>
✅Established project Launched Okt. '21<br/>
The $NEXUS token is the financial backbone of the ecosystem and will be used to facilitate a variety of actions within the platform.<br/>
🚀10M Supply<br/>
🚀Staking LIVE<br/>
🚀5% Tax<br/>
🚀Cross-Chain Launch Imminent<br/>
Nexus Folio is the market entry product and enjoys continuous updates based on community feedback.<br/>
🤑FREE Unstoppable Domains NFT for new users 📈Charting tools for BSC & ETH 💰Portfolio tracking for BSC, ETH & CRO Chains 🚨Spam Token Detection 🚀AVAX & NEAR Support coming soon<br/>
                        </p>
                        <Button
                            name={'EXPLORE MORE'}
                            icon={'fas fa-chevron-right'}
                            arrow={'arrow'}
                            blob={'blob'}
                        />
                    </div>
                </div>
            </div>
            <div className="latest-controlls">
                <div className="control control-1"></div>
                <div className="control control-2"></div>
                <div className="control control-3"></div>
            </div>
        </LatestSectionStyled>
    )
}

const LatestSectionStyled = styled.section`
    .latest-container{
        margin-top: 1.5rem;
        background-color: ${props => props.theme.colorGreyLight2};
        border-radius: 7px;
        .latest-content{
            display: grid;
            grid-template-columns: 40% auto;
            padding: 5rem 10rem;
            grid-gap: 2rem;
            img{
                width: 100%;
                border-radius: 7px;
                object-fit: cover;
            }
            .latest-text{
                margin-left: 3rem;
                h4{
                    font-size: 2rem;
                    padding-bottom: 1.5rem;
                }
                h6{
                    padding-bottom: 1.5rem;
                    color: ${props => props.theme.colorFont};
                    font-size: 1.2rem;
                }
                p{
                    padding-bottom: 1.5rem;
                }
                a{
                    background: transparent;
                    border: 2px solid ${props => props.theme.colorGrey4};
                    text-transform: inherit;
                }
            }
        }
    }
    .latest-controlls{
        display: flex;
        justify-content: center;
        margin-top: 2.5rem;
        .control{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin: 0 0.2rem;
            cursor: pointer;
        }
        .control-1{
            background-color: ${props => props.theme.colorAccent};
        }
        .control-2{
            background-color: ${props => props.theme.colorGrey9};
            transform: scale(0.85);
        }
        .control-3{
            background-color: ${props => props.theme.colorGrey9};
            transform: scale(0.6);
        }
    }
`;

export default LatestSection