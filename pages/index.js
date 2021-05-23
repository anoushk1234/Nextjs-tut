import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './comps/footer'
import Navbar from './comps/navbar'

export default function Home() {
  return (
   <div>
     <Navbar/>
     <h1>Homepage</h1>
     <Footer/>
   </div>
  )
}
