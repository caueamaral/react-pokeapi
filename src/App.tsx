import './css/App.css'
import { Header } from './header/Header'
import { Main } from './main/Main'
import { Footer } from './footer/Footer'

function App() {
  return (
    <>
      <div className="container">
        <article>
          <Header />
          <Main />
        </article>
      </div>
      <Footer />
    </>
  )
}

export default App