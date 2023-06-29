'use client'
import Image from 'next/image'
import Header from './Header'
import TestimonialSection from './TestimonialSection'
import Scroller from './Scroller'

export default function Home() {
  return (
   <main>
    <>
    <Header/>
    <TestimonialSection/>
    <Scroller/>
    </>
    </main>
  )
}
