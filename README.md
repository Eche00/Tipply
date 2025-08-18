Tipply 

A decentralized tipping platform that connects developers with supporters.  
Developers can showcase their projects, receive direct wallet-to-wallet tips, and join a growing community of builders.  
Supporters can browse profiles, explore projects, and send crypto tips instantly.

 Features

-  Developer Profiles – Sign up with your wallet, set up your profile (bio, skills, links).
-  Project Showcase – Add and display your projects with title + demo/live link.
-  Direct Tipping System – Wallet-to-wallet tipping (no withdrawal needed).
-  Leaderboard – Track top tippers, total tips, and community stats.
-  Dev Chat – A dedicated page where all developers can interact and collaborate.
-  Minimum Tip Amount – Enforced $5 equivalent in ETH/MATIC to support fair contributions.

 Tech Stack

Frontend
- React + Tailwind CSS  
- Wallet integration via [Ethers.js](https://docs.ethers.org/)  + [RainbowKit](https://www.rainbowkit.com/)  

Smart Contract
- Solidity (Ethereum / Polygon)  
- Event logging for `TipSent(sender, receiver, amount)`  

Backend / Services
- Firebase (for profiles, metadata, leaderboard display)  
- On-chain event reads (Alchemy/Infura for logs)  

Deployment
- Frontend → Vercel 
- Contracts → Sepolia Testnet → Ethereum Mainnet or Polygon  

 How It Works

 For Developers
1.  sign up.  
2. Fill profile details (name, bio, project links).  
3. Add projects (title + URL).  
4. Join dev chat and connect with other builders.  
5. Start receiving tips directly to your wallet.  

 For Supporters
1. Connect wallet via MetaMask.  
2. Browse developers and their projects.  
3. Click Tip → enter amount → confirm transaction.  
4. Your tip is sent directly to the developer’s wallet.  

Leaderboard
- Tracks top tippers and most tipped developers.  
- Data comes from on-chain events + Firebase metadata.  
- Displays amounts in both crypto & USD equivalent.  

 Roadmap

Phase 1 – Planning & Setup 
- Repo init, UI wireframes, basic React + Tailwind setup.

 Phase 2 – Smart Contract ⚡
- Tipping contract with `tipDeveloper(address)` function.  
- Event logging + minimum tip enforcement.  
- Deploy on Sepolia testnet.  

 Phase 3 – Frontend Integration 🎨
- Wallet connect (MetaMask, Wagmi).  
- Developer signup & project showcase.  
- Tipping modal with contract call.  

Phase 4 – Leaderboard & Dev Chat 💬
- Fetch contract logs + Firebase for display.  
- Build public leaderboard.  
- Add real-time dev chat page.  

 Phase 5 – Testing 🧪
- End-to-end tests on Sepolia.  
- Cross-browser + mobile wallet tests.  

 Phase 6 – Deployment 🌍
- Deploy frontend to Vercel.
- Launch contract on Ethereum mainnet (or Polygon for lower fees).  

 Crypto Handling

- MVP Token: ETH or MATIC  
- $5 minimum tip enforced via price feed (e.g., Chainlink).  
- Example: If ETH = $2,000 → $5 = `0.0025 ETH`  

solidity
require(msg.value >= 0.0025 ether, "Minimum tip is $5");

	•	Future Support: ERC-20 tokens (USDC/DAI), multi-chain expansion.


⸻

📜 License

MIT License – free to use, modify, and distribute.

⸻

🌐 Live Demo (coming soon)

Stay tuned for the deployed version on Vercel + Polygon.

