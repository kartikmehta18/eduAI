# CareerLearn AI - AI-Powered Career Learning Platform

CareerLearn AI is a modern web application that provides personalized learning paths and mentorship opportunities for various tech careers. The platform leverages AI to generate customized learning content and connects learners with industry professionals.

![CareerLearn AI Platform](https://i.ibb.co/MP5cq1z/Get-Started-With-Tippy.png)

## Features

### 🎯 Personalized Learning Paths
- AI-generated curriculum based on career goals
- Custom career path generation
- Progress tracking and milestones
- Interactive learning modules

### 🎓 Blockchain Integration
- Secure wallet connection using MetaMask
- Verified certificates stored on EduChain
- Transparent payment system for premium features
- Integration with EDU Chain Testnet

### 👥 Expert Mentorship
- Connect with industry professionals
- Book mentoring sessions
- Real-time feedback on projects
- Career guidance from experts

## Technology Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini AI
- **Blockchain**: EduChain (Ethereum-compatible)
- **Icons**: Lucide React
- **Authentication**: MetaMask Web3

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MetaMask browser extension
- Google Gemini API key

### Environment Setup

1. Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/careerlearn-ai.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Blockchain Setup

1. Install MetaMask browser extension
2. Add EDU Chain Testnet to MetaMask:
   - Network Name: EDU Chain Testnet
   - RPC URL: https://open-campus-codex-sepolia.drpc.org
   - Chain ID: 65647
   - Symbol: EDU
   - Block Explorer: https://opencampus-codex.blockscout.com/

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── LearningPath/
│   ├── MentorList/
│   └── WalletButton/
├── hooks/           # Custom React hooks
└── types/           # TypeScript type definitions
```

## Key Components

### Learning Path Generator
- AI-powered curriculum generation
- Custom career path input
- Progress tracking
- Interactive content

### Wallet Integration
- Secure MetaMask connection
- EDU Chain network support
- Transaction handling
- Account management

### Mentor Marketplace
- Expert profiles
- Booking system
- Rating system
- Session management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Gemini AI for content generation
- EDU Chain for blockchain infrastructure
- MetaMask for wallet integration
- Unsplash for stock images