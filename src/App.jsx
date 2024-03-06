import { useState } from 'react'
import './App.css'
import NavbarComponent from './Component/NavbarComponent'
import FooterComponent from './Component/FooterComponent'
import ProductComponent from './Component/ProductComponent'
import RatingStar from './Component/RatingStar'
import FeedbackForm from './Component/FeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <header>
          <nav>
            <NavbarComponent />
          </nav>
        </header>

        <main>
          <div className=' w-full lg:px-40 my-20 mx-auto md:px-30 sm:px-20 px-10 '>
            <h1 className=' text-4xl font-semibold my-4 '>Products </h1>
            <div className=' w-full grid lg:grid-cols-3 lg:gap-4 sm:grid-cols-2 gap-2 '>
              <div>
                <ProductComponent />
              </div>
              <div>
                <ProductComponent />
              </div>
              <div>
                <ProductComponent />
              </div>
              <div>
                <ProductComponent />
              </div>
              <div>
                <ProductComponent />
              </div>
              <div>
                <ProductComponent />
              </div>
            </div>
          </div>



          <div className=' w-full mt-[100px] lg:px-40 my-20 mx-auto md:px-30 sm:px-20 px-10 '>
            <h1 className=' text-4xl font-semibold my-4 '>Feedback and Rating </h1>
            <div className=' w-full'>
              <h2 className=' text-xl font-normal my-4 p-0'>
                Your Rating
              </h2>
              <div className=' relative bottom-[20px] '>
              <RatingStar/>
              <FeedbackForm/>
              </div>

            </div>
            <div >

            </div>
          </div>

        </main>

        <footer>
          <FooterComponent />
        </footer>
      </body>
    </>
  )
}

export default App
