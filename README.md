# AI Coach SIMBION Pro

Advanced Basketball Performance Analysis & Training Platform with AI-powered plan validation.

## 🏀 Features

- **AI SIMBION Chat** - Conversational AI coaching assistant powered by Google Gemini
- **Diagnostics Module** - Motor testing and NBA/FIBA norm comparison
- **Correlation Matrix** - Scientific relationships between physical abilities
- **Training Plan Analyzer** - AI validation of training programs against diagnostics and correlations
- **Resources** - Training literature and materials

## ⚙️ Setup

1. **Get free Google Gemini API key** (1500 requests/day):
   - Go to https://aistudio.google.com/app/apikey
   - Create or sign in with your Google account
   - Click "Create API key"
   - Copy your key

2. **Configure environment**:
   ```bash
   # Copy example env file
   cp .env.example .env
   
   # Add your API key to .env:
   # VITE_GOOGLE_API_KEY=your_api_key_here
   ```

3. **Install and run**:
   ```bash
   # Install dependencies
   npm install
   
   # Development
   npm run dev
   
   # Build for production
   npm run build
   
   # Build Electron app
   npm run electron:build
   ```

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- Electron 25
- Lucide React icons
- Google Gemini API (Free tier - 1500 req/day)

## 📦 Project Structure

```
simbion-pro/
├── src/
│   ├── components/      # React components
│   ├── i18n/           # Bilingual translations (SR/EN)
│   ├── services/       # API services
│   └── App.tsx         # Main app component
├── electron/           # Electron main process
└── dist/              # Production build
```

## 🌐 Language Support

Serbian (SR) and English (EN) fully supported throughout the application.

## 📝 License

MIT
