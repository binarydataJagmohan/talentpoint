import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import FrontendLayout from '../components/Frontend/layouts/layout';
import AdminLayout from '../components/Admin/layouts/layout';
import EmployeesLayout from '../components/Employees/layouts/layout';
import EmployerLayout from '../components/Employer/layouts/layout';
import StaffLayout from '../components/Staff/layouts/layout';
import { useRouter } from "next/router";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname.startsWith("/admin")) {
    return(
      <>
        <Head>
          <title>Admin Dashboard</title>  
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>    
        </Head>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </>
    ) 
  } else if (router.pathname.startsWith("/employees")) {
    return(
      <>
        <Head>
          <title>Employees Dashboard</title>  
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>       
        </Head>
        <EmployeesLayout>
          <Component {...pageProps} />
        </EmployeesLayout>
      </>
    )
  } else if (router.pathname.startsWith("/employer")) {
    return(
      <>
        <Head>
          <title>Employer Dashboard</title>  
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>       
        </Head>
        <EmployerLayout>
          <Component {...pageProps} />
        </EmployerLayout>
      </>
    )
  } else if (router.pathname.startsWith("/staff")) {
    return(
      <>
        <Head>
          <title>Staff</title>  
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>       
        </Head>
        <StaffLayout>
          <Component {...pageProps} />
        </StaffLayout>
      </>
    )
  } else {
    return (
      <>
        <Head>
          <title>Talent Point</title>     
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>    
        </Head>
        <FrontendLayout>
          <Component {...pageProps} />
        </FrontendLayout>
      </>
    )
  }
}
