import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { config } from './wagmi'
import { baseSepolia } from 'wagmi/chains'
import Register from './components/Register'
import GroupChat from './components/GroupChat'
import PrivateChat from './components/PrivateChat'
import MainChat from './components/MainChat'
import UserProfile from './components/UserProfile'
import RegistrationCheck from './components/RegistrationCheck'
import SimpleOnboarding from './components/SimpleOnboarding'

const queryClient = new QueryClient()

function App() {
  const [activeTab, setActiveTab] = useState<'register' | 'group' | 'private' | 'main' | 'check'>('register')
  const [_hasRegistered, _setHasRegistered] = useState(false)
  const [_showRegistrationCheck, _setShowRegistrationCheck] = useState(false)

  const handleRegistrationSuccess = () => {
    _setHasRegistered(true)
    setActiveTab('private') // Switch to private chat after registration
  }

  const handleStartChatting = () => {
    console.log('Start Chatting button clicked')
    _setShowRegistrationCheck(true)
    setActiveTab('check')
  }

  const handleRegistrationCheckComplete = () => {
    _setShowRegistrationCheck(false)
    setActiveTab('main')
  }

  const handleRegistrationRequired = () => {
    _setShowRegistrationCheck(false)
    setActiveTab('register')
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          initialChain={baseSepolia}
          showRecentTransactions={true}
        >
          <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                  <h1 className="text-3xl font-bold text-gray-900">HerENS</h1>
                  <div className="flex items-center space-x-4">
                    <UserProfile />
                    <SimpleOnboarding
                      onComplete={() => {
                        console.log('SimpleOnboarding onComplete called')
                        setActiveTab('main')
                      }}
                      onRegister={() => {
                        console.log('SimpleOnboarding onRegister called')
                        setActiveTab('register')
                      }}
                    />
                  </div>
                </div>
              </div>
            </header>

            <div className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <img
                src="/hero-image.jpg"
                alt="HerENS Hero"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="text-center">
                  <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
                    HerENS
                  </h1>
                  <p className="text-sm mb-3 max-w-xl mx-auto leading-relaxed">
                    The elegant web3 chat dApp where women in blockchain connect, collaborate, and share their contributions through ENS-verified conversations.
                  </p>
                  <div className="flex justify-center space-x-2 mb-4">
                    <button
                      onClick={handleStartChatting}
                      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-xs"
                    >
                      Start Chatting
                    </button>
                    <button className="border border-white text-white hover:bg-white hover:text-purple-700 font-bold py-1 px-3 rounded-full transition-all duration-300 text-xs">
                      View Demo
                    </button>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20">
                    <h2 className="text-lg font-bold mb-2">Built for Web3 Women</h2>
                    <p className="text-sm mb-3">
                      Connect with verified ENS identities, create private groups, and build meaningful relationships in the web3 space.
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="text-center">
                        <div className="bg-pink-500 bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1">
                          <span className="text-base">👩‍💻</span>
                        </div>
                        <h3 className="font-semibold mb-1 text-xs">ENS Verified</h3>
                        <p className="text-xs">All users are verified through ENS domains, ensuring authentic conversations.</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-500 bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1">
                          <span className="text-base">👥</span>
                        </div>
                        <h3 className="font-semibold mb-1 text-xs">Group Chats</h3>
                        <p className="text-xs">Create topic-focused groups for DeFi, NFTs, DAOs, and more.</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-indigo-500 bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-1">
                          <span className="text-base">💬</span>
                        </div>
                        <h3 className="font-semibold mb-1 text-xs">Private Messages</h3>
                        <p className="text-xs">Secure one-on-one conversations with on-chain storage.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-pink-200 text-xs">Built with 💜 for the Web3 Ladies community</p>
                  </div>
                </div>
              </div>
            </div>

            <nav className="bg-white shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-8">
                  <button
                    onClick={() => {
                      console.log('Register tab clicked')
                      setActiveTab('register')
                    }}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'register'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Register
                  </button>
                  <button
                    onClick={() => setActiveTab('group')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'group'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Group Chat
                  </button>
                  <button
                    onClick={() => setActiveTab('private')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'private'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Private Chat
                  </button>
                  <button
                    onClick={() => setActiveTab('main')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'main'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Chat App
                  </button>
                </div>
              </div>
            </nav>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {activeTab === 'register' && <Register onRegistrationSuccess={handleRegistrationSuccess} />}
              {activeTab === 'group' && <GroupChat />}
              {activeTab === 'private' && <PrivateChat />}
              {activeTab === 'main' && <MainChat />}
              {activeTab === 'check' && (
                <RegistrationCheck
                  onRegistered={handleRegistrationCheckComplete}
                  onNotRegistered={handleRegistrationRequired}
                />
              )}
            </main>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App