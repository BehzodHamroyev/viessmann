import Head from 'next/head'
import Container from '../Containers/Container/Container'
import Home1 from '../Containers/Home/Home1'
import Home2 from '../Containers/Home/Home2'
import Home3 from '../Containers/Home/Home3'
import Home4 from '../Containers/Home/Home4'


export default function Home() {
  return (
  <Container>
   <Home1/>
   <Home2/>
   <Home3/>
   <Home4/>
  </Container>
)
}
