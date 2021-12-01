import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/topoutlogo.png'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">
         <Image
         src={logo} 
         alt="Logo for Topout"
         width={500}
         height={500}
         />
          </a>
      </Link>
      .
    </h2>
  )
}
