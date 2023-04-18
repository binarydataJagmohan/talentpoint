import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import { useRouter } from 'next/router'
import { Props } from "./Props";
export default function Layout({ children, ...props }: Props) {
  const router = useRouter()
  return (
    <div> 
      <Header />
      <section className='dashboard-page'>
        <div className='container-fluid'>
          <div className='row'> 
            <div className='col-lg-3 col-md-12 bg-fff'>
              <Sidebar />
            </div>
            <div className='col-lg-9 col-md-12 bg-'>
             <main {...props}>{children}</main>
            </div> 
          </div>
        </div>
      </section>
     
    </div>
  )
}