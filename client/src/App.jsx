import { Navbar, Welcome, Services, Footer, Transactions } from './components'
import { TransactionProvider } from './context/TransactionContext'

const App = () => {
  return (
    <div className="max-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <TransactionProvider>
          <Welcome />
        </TransactionProvider>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
