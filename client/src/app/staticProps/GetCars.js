export default async function getStaticProps() {
    const res = await fetch('http://localhost:8080/cars')
    const repo = await res.json()
    return repo 
  }