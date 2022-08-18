import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext';

import agency2 from '../img/agency2.jpg'
import Button from './Button';

function RecommendationsSection() {
    const theme = useTheme()
    return (
        <ReccomendationsSectionStyled className="recommended" theme={theme} >
            <div className="left-rec">
                <img src={agency2} alt="" />
            </div>
            <div className="right-rec">
                <div className="rec-content">
                    <h3 className="title" >
                        Find hidden gems. <br /> Investment opportunities with real potential. 
                    </h3>
                    <p >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Expedita quam sequi maiores veritatis dolorum cum
                        quidem impedit alias beatae deleniti quisquam nesciunt repellat, explicabo optio.
                    </p>
                    <Button 
                        name={'EXPLORE MORE'}
                        icon={'fas fa-chevron-right'}
                        arrow={'arrow'}
                        blob={'blob'}
                    />
                </div>
            </div>
        </ReccomendationsSectionStyled>
    )
}


const ReccomendationsSectionStyled = styled.section`
    display: grid;

    grid-gap: 2rem;
    background-color: ${props => props.theme.colorBg3};
    margin-bottom: 6rem;
    box-shadow: 0 5px 18px #212529b7;
    .left-rec{
        overflow: hidden;
        border-top-left-radius: 5px;
        img{
            border-top-left-radius: 5px;
            width: 100%;
            object-fit: cover;
            filter: grayscale(100%);
            height: 100%;
            transition: all .3s ease-in-out;
            &:hover{
                filter: grayscale(0);
                transform: scale(1.2) rotate(-5deg);
            }
        }
    }
    .right-rec{
        display: flex;
        align-items: center;
        .rec-content{
            padding: 1rem;
            h3{
                font-size:2.5rem;
                padding-bottom: 1rem;
                position: relative;
                margin-bottom: 2rem;
                &::after{
                    content: '';
                    left: 0;
                    position: absolute;
                    bottom: 0;
                    width: 20%;
                    height: 2px;
                    background-color: ${props => props.theme.colorAccent};
                }
            }
            p{
                color: ${props => props.theme.colorGrey4};
                padding-bottom: 2rem;
            }
        }
    }
    @media only screen and (max-width: 760px){
        .recommended{
            display: flex;
            flex-flow:column;
        }
    }
`;

export default RecommendationsSection