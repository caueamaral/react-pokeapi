import './App.css'
import { Header } from './header/Header' 
import { Footer } from './footer/Footer'
import { Cards } from './cards/Cards'

function App() {
  return (
    <>
      <div className="container">
        <article>
          <Header />
          <main>
            <Cards />
          </main>
        </article>
      </div>
      <Footer />
    </>
  )
}

export default App