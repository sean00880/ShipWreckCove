import React, {useState} from 'react'
import {motion} from 'framer-motion';
import './Blogs.css';
import Title from './Title'
import artex from '../img/python.png'
import blockflix from '../img/python2.png'
import mind from '../img/mind.jpg'
import cryptoRafting from '../img/cryptorafting.jpg'

function Blogs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <section>
    <div className="title-con" >
                <Title
                    name={'Gems'}
                    subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
                />
            </div>
    <div className="Blogs">
    <motion.div id="blogs" transition={{
        layout: {duration: .5, type: "spring"}
    }} layout onClick={() => setIsOpen(!isOpen)} className="card" >
        <motion.h2 layout="position">🎬 BlockFlix</motion.h2>
        {isOpen && (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="expand">
            
            
            <p className='para'><img src={blockflix} alt="" />
            BlockFlix is a movie platform like Netflix. It has a lot of premium content which can be paid for with $BlockFlixTokens. 50% tokens received from premium activations are burned and 50% will be shared to community via lottery! If credit card or paypal is used for purchase Premium account, then 50% from payment will be used for buyback and of course those tokens will be burned!
<br/><br/>
WATCH TO EARN BEING ADDED!
<br/><br/>
🎥TOKENOMICS🎥
<br/><br/>
✅ LOCKED LIQUIDITY🔐
<br/><br/>
Liquidity is locked and 1% Tax of every transaction will be added to liquidity
<br/><br/>
✅Growth
<br/><br/>
3% Tax is allocated for continuous development.
<br/><br/>
✅ MARKETING
<br/><br/>
3% Tax of every transaction is allocated for marketing efforts
<br/><br/>
✅ Passive Income
<br/><br/>
$BlockFlixToken loves to give back. 2% of all transactions redistributed to holders.
<br /><br />
<span className='links'>Links</span>
<hr
        style={{
          background: 'grey',
          color: 'lime',
          borderColor: 'gold',
          height: '3px',
        }}
      />
<h5>Website: https://artex.app/ </h5><h5>Telegram: https://t.me/artexcommunity</h5><h5>Presale is Live: https://www.pinksale.finance/launchpad/0x9B15BaFB092bccc17479E8508Dc6e3D8D36AD50A?chain=BSC</h5>
            </p>
        </motion.div>)
}
    </motion.div>
    <motion.div transition={{
        layout: {duration: .5, type: "spring"}
    }} layout onClick={() => setIsOpen2(!isOpen2)} className="card" >
        <motion.h2 layout="position">🏞 Artex</motion.h2>
        {isOpen2 && (
        
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="expand2">
            <p className='para'><img src={artex} alt="" />

            This is an official Legacy Capital backed project. These guys have gone through our tight vetting and KYC process and hold the PinkSale “SAFU” Badge. This ensures the contract is safe and will be deployed by a pinksale trusted developer.<br/>

Artex is the world's first and only blockchain-based art smart contract technology investment platform where you can easily trade and manage your fine art investments anytime and everywhere.<br/>

Artex is the 4th project to ever have the Pinksale SAFU Badge<br/>
<br/>
🔥Artex Art CEX ✅<br/><br/>

🔥3% USDT Reflection ✅<br/><br/>

🔥ArtBay Platform 🛠⚙️<br/><br/>

🔥Artex Tier System 🛠⚙️<br/><br/>

🔥Artex NFT Platform 🛠⚙️<br/><br/>

🔥Artex Multichain DEX 🛠⚙️<br/><br/>

🔥Artex Multifunction Wallet 🛠⚙️<br/><br/>

🔥Artex Limited edition NFTs 🛠⚙️<br/><br/>
✅ Total Supply 100 M<br></br>
<br/>
<span className='links'>Links</span>
<hr
        style={{
          background: 'grey',
          color: 'lime',
          borderColor: 'gold',
          height: '3px',
        }}
      />
<h5>Website: https://artex.app/ </h5><h5>Telegram: https://t.me/artexcommunity</h5><h5>Presale is Live: https://www.pinksale.finance/launchpad/0x9B15BaFB092bccc17479E8508Dc6e3D8D36AD50A?chain=BSC</h5><br />



</p>

        </motion.div>)
}
    </motion.div>

    <motion.div transition={{
        layout: {duration: .5, type: "spring"}
    }} layout onClick={() => setIsOpen3(!isOpen3)} className="card" >
        <motion.h2 layout="position">🌷 MiNDTOKEN</motion.h2>
        {isOpen3 && (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="expand3">
            
            
            <p className='para'><img src={mind} alt="" />
            Bringing wellness to crypto through mental health and tele-health services.<br/><br/>

Their innovative platform grants access to doctors, counselors, lawyers and other professionals by simply staking $50/month!<br/><br/>

PRESALE INFO:<br/><br/>

⚡️ Hard Cap: 200 BNB<br/><br/>

💰 Price per token: .016<br/><br/>

🌱 Minimum Buy: .1 BNB<br/><br/>

🔥 Max Buy: 3 BNB<br/><br/>

WHITELIST INFO: Whitelists are exclusively available through The Candle Factory partners.<br/><br/>

*To receive a whitelist spot, do the following 2 tasks:<br/><br/>

Fill this form - https://forms.gle/dM3K7j3FupeTkRxFA<br/>
Join the Mind Token Community (Mandatory). https://t.me/MiNDOfficialbsc<br/>
Check out the Candle Factory Partners - https://linktr.ee/thecandlefactory<br/><br/>

PRESALE LIVE at DEGEM on July 20th, 7PM UTC - https://ido.degem.tech/<br/><br/>

🏴‍☠️ ShipWreck Cove is partnering with Ninja Lounge to extend the opportunity on this presale to our community<br/><br />
<span className='links'>Links</span>
<hr
        style={{
          background: 'grey',
          color: 'lime',
          borderColor: 'gold',
          height: '3px',
        }}
      />
<h5>Website: https://artex.app/ </h5><h5>Telegram: https://t.me/artexcommunity</h5><h5>Presale is Live: https://www.pinksale.finance/launchpad/0x9B15BaFB092bccc17479E8508Dc6e3D8D36AD50A?chain=BSC</h5>
            </p>
        </motion.div>)
}
    </motion.div>

    <motion.div transition={{
        layout: {duration: .5, type: "spring"}
    }} layout onClick={() => setIsOpen4(!isOpen4)} className="card" >
        <motion.h2 layout="position">🛶 CryptoRafting</motion.h2>
        {isOpen4 && (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="expand3">
            
            
            <p className='para'><img src={cryptoRafting} alt="" />
            An NFT 3D "Play, Compete and Earn" game.<br></br>

⭐ Sustainable Reward System<br></br>

⭐ Non Self-destructive economy cycle<br/><br/>

⭐ Non invasive in-game advertising banners<br/><br/>

⭐ Dev aiming to the Metaverse with VR tech<br/><br/>

"The Sport of the Future"<br/><br/>

Launch arrangement<br/><br/>

⭐️ PrivateSale of 2% of the total supply, July 20th in PinkSale<br/><br/>

⭐️ Running twitter Competition:<br/><br/>

✅ 25 WL spots for the PinkSale Private Sale.<br/><br/>

✅ 2 winners of 100BUSD each.<br/><br/>

Rules, tasks and participate here: https://forms.gle/AMmau7uCGu3pQfXJA<br/><br/>

⭐️ The Presale, August 1st and will be managed in two platforms with two pairs:<br/><br/>

✅ DxSale pairing with BNB there we will have 250BNB Soft Cap<br/><br/>

✅ PinkSale Pairing with BUSD there we will have $50K BUSD Soft Cap<br/><br />
<span className='links'>Links</span>
<hr
        style={{
          background: 'grey',
          color: 'lime',
          borderColor: 'gold',
          height: '3px',
        }}
      />
<h5>Website: https://artex.app/ </h5><h5>Telegram: https://t.me/artexcommunity</h5><h5>Presale is Live: https://www.pinksale.finance/launchpad/0x9B15BaFB092bccc17479E8508Dc6e3D8D36AD50A?chain=BSC</h5>
            </p>
        </motion.div>)
}
    </motion.div>

    </div>
    </section>
  )
}



export default Blogs