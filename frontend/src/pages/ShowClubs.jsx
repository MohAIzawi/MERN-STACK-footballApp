import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
import BackButton from './BackButton'

const ShowClubs = () => {
  const [club, setClub] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    Axios
      .get(`http://localhost:5555/clubs/${id}`)
      .then((response) => {
        setClub(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [id])

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Club Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        club && (
          <div className='flex flex-col border-2 border-blue-400 rounded-xl w-fit p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>ID</span>
              <span className='text-xl'>{club._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Name</span>
              <span className='text-xl'>{club.name}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Location</span>
              <span className='text-xl'>{club.location}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Stadium</span>
              <span className='text-xl'>{club.stadium}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Manager</span>
              <span className='text-xl'>{club.manager}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Year Founded</span>
              <span className='text-xl'>{club.yearFounded}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>Description</span>
              <span className='text-xl'>{club.description}</span>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ShowClubs