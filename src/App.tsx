import React, {useState, useEffect} from 'react';
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

export type TourType ={
  id: 'string';
  image:'string';
  info: 'string';
  name: 'string';
  price: number;
  }

function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState<TourType[]>([])

  const removeTour= (id:string) =>{
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }  

  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main className='w-[90vw] max-w-4xl mx-auto my-20'>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )

}
export default App
