import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import ClubsTable from '../components/home/ClubsTable'
import ClubsCard from '../components/home/ClubsCard'

const Home = () => {
  const [clubs, setClubs] = useState([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')

  useEffect(() => {
    setLoading(true)
    Axios
      .get('http://localhost:5555/clubs')
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setClubs(response.data.data)
        } else {
          console.error('Error: response.data.data is not an array:', response.data.data)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [])


  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-blue-300 hover:bg-blue-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >Table</button>
      
      <button className='bg-blue-300 hover:bg-blue-600 px-4 py-1 rounded-lg'
        onClick={() => setShowType('card')}
      >Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-4'>Club List</h1>
        <Link to='/clubs/create' className='text-blue-800 text-4xl'>
          <MdOutlineAddBox className='inline-block' />
        </Link>
      </div>
      {loading ? <Spinner /> : (showType === 'table' ? <ClubsTable clubs={clubs} /> : <ClubsCard clubs={clubs} />)}
    </div>
  )
}

export default Home