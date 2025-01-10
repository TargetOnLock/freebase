import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const waveAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/chainedearth.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1; /* Ensure it stays behind other content */
`;

const rainAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(100vh) translateX(20px);
  }
`;

const RainLogo = styled.img`
  position: absolute;
  width: 30px; /* Smaller size for the logos */
  animation: ${rainAnimation} 5s linear infinite;
  opacity: 0.5; /* Adjust opacity for a subtle effect */
  pointer-events: none; /* Prevent interaction with the logo */
`;

const Container = styled.div`
  text-align: center;
  color: #fff; /* White text for contrast */
  padding: 20px;
  min-height: 100vh; /* Full height */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Allow absolute positioning of RainLogo */
  overflow: hidden; /* Prevent overflow of animated logos */
`;

const Content = styled.div`
  max-width: 800px; /* Limit the width of the content */
  width: 100%; /* Full width within the max */
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #007bff; /* Blue border */
  border-radius: 8px;
  background-color: #2a2a3c; /* Lighter shade of the background */
`;

const Hero = styled.h1`
  color: #007bff; /* Blue text */
`;

const Logo = styled.img`
  width: 500px; /* Adjust logo size to be bigger */
`;

const Socials = styled.div`
  margin: 10px 0;
`;

const SocialIcon = styled.a`
  margin: 0 10px;
`;

const CopyButton = styled.button`
  background-color: #007bff; /* Blue background */
  color: white; /* White text */
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin: 10px 0;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center items horizontally */
`;

const PartnerLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PartnerLogo = styled.a`
  margin: 10px;
`;

const WBTCLogo = styled.img`
  width: 30px; /* Adjust size as needed */
  margin-left: 5px; /* Space between text and logo */
`;

const data = [
  { name: 'CEX/Partnerships', value: 5 },
  { name: 'Future Utility', value: 5 },
  { name: 'Community Distribution', value: 90 }, // Assuming the remaining is 90%
];

const COLORS = ['#007bff', '#28a745', '#ffc107']; // Colors for the pie chart

function App() {
  const smartContractAddress = "0x0000000000000000000000000000000000000000"; // Replace with your actual smart contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(smartContractAddress);
    alert("Smart contract address copied to clipboard!");
  };

  const [showLegend, setShowLegend] = useState(false);
  const [heroText, setHeroText] = useState("");
  const fullText = "";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setHeroText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Background />
      {/* Raining logos */}
      {Array.from({ length: 50 }).map((_, index) => (
        <RainLogo 
          key={index} 
          src="/baselogo.png" 
          alt="Base Logo" 
          style={{ 
            left: `${Math.random() * 100}vw`, // Random horizontal position
            top: `${Math.random() * -100}vh`, // Start from a random position above the viewport
            animationDelay: `${Math.random() * 5}s`, 
            animationDuration: `${3 + Math.random() * 5}s` // Random duration for each logo
          }} 
        />
      ))}
      <Content>
        <Section>
          <Hero>{heroText}</Hero>
          <HeroSection>
            <Logo src="/freebase.png" alt="Logo" />
            <CopyButton onClick={copyToClipboard}>Copy Contract Address</CopyButton>
            <Socials>
              <SocialIcon href="https://t.me/FreeBasePortal" target="_blank">
                <img src="/telegram.png" alt="Telegram" width="40" />
              </SocialIcon>
              <SocialIcon href="https://x.com/Based_Free_Base" target="_blank">
                <img src="/twitter.png" alt="Twitter" width="40" />
              </SocialIcon>
              <SocialIcon href="mailto:info@freebased.info" target="_blank">
                <img src="/email.png" alt="Email" width="40" />
              </SocialIcon>
            </Socials>
          </HeroSection>
        </Section>
        <Section>
          <h2>About Free Base (FREE)</h2>
          <p>
            Welcome to Free Base, the token that embodies the spirit of breaking free from traditional finance and embracing true decentralization. Built on the Base Chain, FREE is designed to empower individuals with a fair and transparent financial system, free from the constraints of central authorities.
          </p>
          <p>
            Our mission is simple: Break the Chains of Centralization. With a solid foundation and a fun, engaging approach, Free Base is more than just a token — it's a movement for financial freedom.
          </p>
          <h3>Key Features</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ 
              margin: '10px', 
              textAlign: 'center', 
              padding: '15px', 
              border: '1px solid #007bff', 
              borderRadius: '8px', 
              backgroundColor: '#2a2a3c', 
              width: '250px' // Set a fixed width for uniformity
            }}>
              <h4>Breaking the Chains</h4>
              <p>Free Base symbolizes the liberation from centralized systems, allowing individuals to take control of their financial destiny.</p>
            </div>
            <div style={{ 
              margin: '10px', 
              textAlign: 'center', 
              padding: '15px', 
              border: '1px solid #007bff', 
              borderRadius: '8px', 
              backgroundColor: '#2a2a3c', 
              width: '250px' // Set a fixed width for uniformity
            }}>
              <h4>5% Transaction Tax</h4>
              <p>Every transaction contributes 2% to the liquidity pool, ensuring a robust and growing floor price.</p>
              <p>Additionally, 3% of each transaction is allocated as rewards in Coinbase Wrapped Bitcoin (WBTC).</p>
            </div>
            <div style={{ 
              margin: '10px', 
              textAlign: 'center', 
              padding: '15px', 
              border: '1px solid #007bff', 
              borderRadius: '8px', 
              backgroundColor: '#2a2a3c', 
              width: '250px' // Set a fixed width for uniformity
            }}>
              <h4>Uniswap Launch</h4>
              <p>Post-presale, FREE will launch on Uniswap, making it accessible to everyone.</p>
            </div>
            <div style={{ 
              margin: '10px', 
              textAlign: 'center', 
              padding: '15px', 
              border: '1px solid #007bff', 
              borderRadius: '8px', 
              backgroundColor: '#2a2a3c', 
              width: '250px' // Set a fixed width for uniformity
            }}>
              <h4>Locked Liquidity</h4>
              <p>Through Gempad’s launchpad, liquidity will be locked to ensure security and trust.</p>
            </div>
            <div style={{ 
              margin: '10px', 
              textAlign: 'center', 
              padding: '15px', 
              border: '1px solid #007bff', 
              borderRadius: '8px', 
              backgroundColor: '#2a2a3c', 
              width: '250px' // Set a fixed width for uniformity
            }}>
              <h4>Renounced Contract</h4>
              <p>To reinforce decentralization, the contract will be renounced at launch, eliminating any centralized control.</p>
            </div>
            <div style={{ 
              margin: '10px', 
              textAlign: 'center', 
              padding: '15px', 
              border: '1px solid #007bff', 
              borderRadius: '8px', 
              backgroundColor: '#2a2a3c', 
              width: '250px' // Set a fixed width for uniformity
            }}>
              <h4>No Team Tokens</h4>
              <p>Free Base is for the community, by the community, with no unfair advantages.</p>
            </div>
          </div>
        </Section>
        <Section>
          <h2>Tokenomics</h2>
          <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #007bff', borderRadius: '8px', backgroundColor: '#2a2a3c' }}>
            <h3>Token Details</h3>
            <p><strong>Name:</strong> Free Base</p>
            <p><strong>Ticker:</strong> FREE</p>
            <p><strong>Liquidity Tax:</strong> 2%</p>
            <p>
              <a href="https://basescan.org/token/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf" target="_blank" rel="noopener noreferrer">
                <WBTCLogo src="/wbtc.png" alt="WBTC" />
              </a>
            </p>
            <p><strong>Rewards:</strong> 3% in Coinbase Wrapped Bitcoin</p>
            <p><strong>Total Supply:</strong> 1,000,000,000 tokens</p>
          </div>
          <div style={{ margin: '20px 0', padding: '15px', border: '1px solid #007bff', borderRadius: '8px', backgroundColor: '#2a2a3c' }}>
            <h3>Supply Breakdown</h3>
            <div>
              <p>5% for CEX/Partnerships</p>
              <p>5% for Future Utility</p>
              <p>Remaining for Community Distribution</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'auto', marginTop: '10px' }}
                 onMouseEnter={() => setShowLegend(true)}
                 onMouseLeave={() => setShowLegend(false)}
            >
              <PieChart width={200} height={200}>
                <Pie
                  data={data}
                  cx={100}
                  cy={100}
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              {showLegend && <Legend />}
            </div>
          </div>
          <p>
            Tokenomics will be finalized after the presale to account for exact locking and distribution specifics. This ensures a fair and balanced allocation based on community participation.
          </p>
        </Section>
        <Section>
          <h2>How to Buy</h2>
          
          <h3>Instructions</h3>
          <div style={{ textAlign: 'center' }}>
            <div>
              <img src="/metamask.png" alt="MetaMask" width="40" />
              <p><strong>Step 1:</strong> Use MetaMask as your wallet to store your tokens.</p>
            </div>
            <div>
              <img src="/uniswap.png" alt="Uniswap" width="40" />
              <p><strong>Step 2:</strong> Go to Uniswap to swap for the FREE token.</p>
            </div>
            <p><strong>Step 3:</strong> Don't forget to add the contract address to your wallet if you're using MetaMask!</p>
            <p>Make sure to check the presale details on Gempad for the exact timing and instructions.</p>
            <p>Happy trading and welcome to the Free Base community!</p>
          </div>
        </Section>
        <Section>
          <h2>Listings/Partnerships</h2>
          <PartnerLogos>
            <PartnerLogo href="https://gempad.app" target="_blank">
              <img src="/gempad.png" alt="Gempad" width="100" />
            </PartnerLogo>
            <PartnerLogo href="https://uniswap.app" target="_blank">
              <img src="/uniswap.png" alt="Uniswap" width="100" />
            </PartnerLogo>
            <PartnerLogo href="https://dextools.io" target="_blank">
              <img src="/dextools.png" alt="Dextools" width="100" />
            </PartnerLogo>
            <PartnerLogo href="https://dexscreener.com" target="_blank">
              <img src="/dexscreener.png" alt="Dexscreener" width="100" />
            </PartnerLogo>
            <PartnerLogo href="https://coinmarketcap.com" target="_blank">
              <img src="/cmc.png" alt="CoinMarketCap" width="100" />
            </PartnerLogo>
            <PartnerLogo href="https://www.coingecko.com" target="_blank">
              <img src="/coingecko.png" alt="CoinGecko" width="100" />
            </PartnerLogo>
            {/* Add more logos as needed */}
          </PartnerLogos>
        </Section>
        <Section>
          <h2>Art Gallery</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <img src="/arrowup.jpg" alt="Art 1" style={{ width: '200px', margin: '10px' }} />
            <img src="/baselogofree.jpg" alt="Art 2" style={{ width: '200px', margin: '10px' }} />
            <img src="/chainedearth.jpg" alt="Art 3" style={{ width: '200px', margin: '10px' }} />
            <img src="/Chains.jpg" alt="Art 4" style={{ width: '200px', margin: '10px' }} />
            <img src="/Coin.png" alt="Art 5" style={{ width: '200px', margin: '10px' }} />
            <img src="/Coins Dropping.png" alt="Art 1" style={{ width: '200px', margin: '10px' }} />
            <img src="/coins.jpg" alt="Art 2" style={{ width: '200px', margin: '10px' }} />
            <img src="/FREE BASE Merged.png" alt="Art 3" style={{ width: '200px', margin: '10px' }} />
            <img src="/FREE BASE Text with Chains.png" alt="Art 4" style={{ width: '200px', margin: '10px' }} />
            <img src="/Green Up Arrows.png" alt="Art 5" style={{ width: '200px', margin: '10px' }} />
            <img src="/Logo with Text.png" alt="Art 5" style={{ width: '200px', margin: '10px' }} />
            <img src="/logowout.jpg" alt="Art 5" style={{ width: '200px', margin: '10px' }} />
            <img src="/rockets.jpg" alt="Art 5" style={{ width: '200px', margin: '10px' }} />
            <img src="/textchains.jpg" alt="Art 5" style={{ width: '200px', margin: '10px' }} />
            <img src="/1.png" alt="Meme 1" style={{ width: '200px', margin: '10px' }} />
            <img src="/2.png" alt="Meme 2" style={{ width: '200px', margin: '10px' }} />
            <img src="/3.png" alt="Meme 3" style={{ width: '200px', margin: '10px' }} />
            <img src="/4.png" alt="Meme 4" style={{ width: '200px', margin: '10px' }} />
            <img src="/5.png" alt="Meme 5" style={{ width: '200px', margin: '10px' }} />
            <img src="/6.png" alt="Meme 6" style={{ width: '200px', margin: '10px' }} />
            <img src="/7.png" alt="Meme 7" style={{ width: '200px', margin: '10px' }} />
            <img src="/8.png" alt="Meme 8" style={{ width: '200px', margin: '10px' }} />
            <img src="/9.png" alt="Meme 9" style={{ width: '200px', margin: '10px' }} />
            <img src="/10.png" alt="Meme 10" style={{ width: '200px', margin: '10px' }} />
            <img src="/11.png" alt="Meme 11" style={{ width: '200px', margin: '10px' }} />
            <img src="/12.png" alt="Meme 12" style={{ width: '200px', margin: '10px' }} />
          </div>
        </Section>
      </Content>
    </Container>
  );
}

export default App;