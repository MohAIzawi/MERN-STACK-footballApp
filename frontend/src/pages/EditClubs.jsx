import React, { useState, useEffect } from 'react'
import BackButton from './BackButton'
import Spinner from './Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditClubs = () => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [stadium, setStadium] = useState('')
  const [manager, setManager] = useState('')
  const [yearFounded, setYearFounded] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:5555/clubs/${id}`)
      .then(response => {
        setName(response.data.name)
        setLocation(response.data.location)
        setStadium(response.data.stadium)
        setManager(response.data.manager)
        setYearFounded(response.data.yearFounded)
        setDescription(response.data.description)
      })
      .catch(error => console.error('Error fetching club:', error))
  }, [id])

  const handleUpdateClub = () => {
    const updatedClub = {
      name,
      location,
      stadium,
      manager,
      yearFounded,
      description,
    }
  
    setLoading(true)
  
    axios
      .put(`http://localhost:5555/clubs/${id}`, updatedClub)
      .then((response) => {
        console.log(response.data)
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        console.error('Error updating club:', error)
        setLoading(false)
      })
  }


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Club</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='name' className='text-xl'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='location' className='text-xl'>
              Location
            </label>
            <input
              type='text'
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='stadium' className='text-xl'>
              Stadium
            </label>
            <input
              type='text'
              id='stadium'
              value={stadium}
              onChange={(e) => setStadium(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='manager' className='text-xl'>
              Manager
            </label>
            <input
              type='text'
              id='manager'
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='yearFounded' className='text-xl'>
              Year Founded
            </label>
            <input
              type='text'
              id='yearFounded'
              value={yearFounded}
              onChange={(e) => setYearFounded(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <label htmlFor='description' className='text-xl'>
              Description
            </label>
            <input
              type='text'
              id='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='border-2 border-blue-400 rounded-md p-2'
            />
          </div>
          <button
            onClick={handleUpdateClub}
            className='bg-blue-400 text-white p-2 rounded-md w-1/4 self-center'
          >
            Update
          </button>
        </div>
      )}
    </div>
  )
  
  
}

export default EditClubs