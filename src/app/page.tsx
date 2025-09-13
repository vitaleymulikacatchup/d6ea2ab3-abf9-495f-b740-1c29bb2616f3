"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="NovaSuite Logo"
          logoText="NovaSuite"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => console.log('Privacy') },
              { label: "Terms of Service", onClick: () => console.log('Terms') },
              { label: "Contact Us", onClick: () => console.log('Contact') },
            ]},
            { items: [
              { label: "FAQ", onClick: () => console.log('FAQ') },
              { label: "Help Center", onClick: () => console.log('Help') },
              { label: "Feedback", onClick: () => console.log('Feedback') },
            ]},
            { items: [
              { label: "Blog", onClick: () => console.log('Blog') },
              { label: "Careers", onClick: () => console.log('Careers') },
              { label: "Support", onClick: () => console.log('Support') },
            ]},
          ]}
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to NovaSuite"
          subtitle="Your ultimate tool for managing your SaaS tools efficiently"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="NovaSuite delivers SaaS solutions tailored for modern businesses, bridging the gap between efficiency and technology. Our user-friendly interface redefines the way you manage and scale projects."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Discover our token distribution and economic model that supports stability and growth."
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "Total supply of tokens available." },
            { value: "400K", description: "Circulating Supply", longDescription: "Circulating supply currently in market." },
            { value: "5%", description: "Market Liquidity", longDescription: "Market liquidity to ensure stability." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="NovaSuite Logo"
          logoText="NovaSuite"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => console.log('Privacy') },
              { label: "Terms of Service", onClick: () => console.log('Terms') },
              { label: "Contact Us", onClick: () => console.log('Contact') },
            ]},
            { items: [
              { label: "FAQ", onClick: () => console.log('FAQ') },
              { label: "Help Center", onClick: () => console.log('Help') },
              { label: "Feedback", onClick: () => console.log('Feedback') },
            ]},
            { items: [
              { label: "Blog", onClick: () => console.log('Blog') },
              { label: "Careers", onClick: () => console.log('Careers') },
              { label: "Support", onClick: () => console.log('Support') },
            ]},
          ]}
          onPrivacyClick={() => console.log('Privacy policy clicked')}
        />
      </div>
    </SiteThemeProvider>
  );
}