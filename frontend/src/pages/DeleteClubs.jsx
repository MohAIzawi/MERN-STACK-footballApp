import React, { useState, useEffect } from 'react'
import BackButton from './BackButton'
import Spinner from './Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteClubs = () => {
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

  const handleDeleteClub = () => {
    setLoading(true)
  
    axios
      .delete(`http://localhost:5555/clubs/${id}`)
      .then((response) => {
        console.log(response.data)
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        console.error('Error deleting club:', error)
        setLoading(false)
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Club</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='title' className='text-xl'>
            Title
          </label>
          <input
            type='text'
            id='title'
            value={name}
            disabled
            className='border-2 border-blue-400 rounded-md p-2'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='author' className='text-xl'>
            Author
          </label>
          <input
            type='text'
            id='author'
            value={location}
            disabled
            className='border-2 border-blue-400 rounded-md p-2'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='publishYear' className='text-xl'>
            Publish Year
          </label>
          <input
            type='text'
            id='publishYear'
            value={stadium}
            disabled
            className='border-2 border-blue-400 rounded-md p-2'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='genre' className='text-xl'>
            Genre
          </label>
          <input
            type='text'
            id='genre'
            value={manager}
            disabled
            className='border-2 border-blue-400 rounded-md p-2'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='pages' className='text-xl'>
            Pages
          </label>
          <input
            type='text'
            id='pages'
            value={yearFounded}
            disabled
            className='border-2 border-blue-400 rounded-md p-2'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='description' className='text-xl'>
            Description
          </label>
          <textarea
            id='description'
            value={description}
            disabled
            className='border-2 border-blue-400 rounded-md p-2'
          />
        </div>
        <button
          onClick={handleDeleteClub}
          className='bg-red-400 text-white p-2 rounded-md w-1/4 self-center'
        >
          Delete
        </button>
      </div>
      )}
    </div>
  )
}

export default DeleteClubs