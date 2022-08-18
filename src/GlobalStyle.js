
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    overflow-x: hidden;
}
@font-face {
    font-family: 'Bebas Neue', cursive;
    
    }

@font-face {
    font-family: coolvetica;
    src: url("coolvetica.otf") format("opentype");

}

*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Nova Square, cursive;
    
}

.icon img{
    max-width: 80px;
}

.box-img{
    max-width: 100px;
}

    body{
        font-size: 1.2rem;
        position: relative;
        overflow-x: hidden;
        background: black;
    }
    body::-webkit-scrollbar{
        width: 7px;
    }
    body::-webkit-scrollbar-track{
        width: 7px;
        background: #333;
    }
    body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: linear-gradient(319deg,#141416 -17.99%,#ddd719 111.32%,#f50808 111.32%);
    }
    body::-webkit-scrollbar-thumb:hover{
        border-radius: 10px;
        background: linear-gradient(179deg,#b3b3b3 -17.99%,#ddd719 111.32%,#f50808 111.32%);
    }
    a{
        font-weight: 500;
        font-family: inherit;
        font-size: inherit;
    }
    p{
        font-weight: 500;
        font-size-adjust: 1.6rem;
    }
    //utility classes
    .u-pad-lg{
        padding: 8rem 18rem;
    }
    .u-pad-lg-2{
        padding-top: 7rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 5rem;
    }
    .arrow{
        margin-left:0.5rem;
        i{
            font-size: .9rem;
            animation: moveLR 2s infinite;
        }
        @keyframes moveLR {
            0%{
                transform: translateX(0);
            }
            50%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
    .title-con{
        text-align: center;
        width: 60%;
        margin: 0 auto;
        p{
            text-align: center;
            padding-top: 2rem;
            padding-bottom: 2rem;
        }
    }

    
    @media only screen and (max-width: 760px){
        .kZenjY .latest-container .latest-content {
        display: flex;
        flex-flow: column;
        padding: 0;
        }

        .u-pad-lg-2{
            padding-left:10px;
            padding-right:10px;
        }

        .u-pad-lg{
            padding-left: 10px;
            padding-right: 10px;
        }

        .fezgRd{
            display:flex;
            flex-flow: column;
        grid-gap: 2rem;
        }
    }

`

export default GlobalStyle;