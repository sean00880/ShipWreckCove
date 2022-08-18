
import background from '../images/background2.jpg';
import GlassCard from './glasscard.js';
import Title from './Title'
import { useTheme } from '../context/themeContext';
import styled from 'styled-components'

function Promotions() {
  const theme = useTheme()
  return (
    <PromotionsSectionStyled className='u-pad-lg-2' theme={theme} id="partners">
            <div className="title-con">
                <Title
                    name={'Our Partners'}
                    subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                />
            </div>
    <div className="Promotions"
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <GlassCard />
    </div>
    </PromotionsSectionStyled>
  );
}

const PromotionsSectionStyled = styled.section`
.Promotions img{
  display: block;
margin-left: auto;
margin-right: auto;
width: 25%;
height: 25%;
}



.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;

export default Promotions;