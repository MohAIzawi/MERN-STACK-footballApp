import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const ClubsTable = ({ clubs }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-gray-600 rounded-md'>No</th>
            <th className='border border-gray-600 rounded-md'>Name</th>
            <th className='border border-gray-600 rounded-md'>Location</th>
            <th className='border border-gray-600 rounded-md'>Stadium</th>
            <th className='border border-gray-600 rounded-md'>Manager</th>
            <th className='border border-gray-600 rounded-md'>Year Founded</th>
            <th className='border border-gray-600 rounded-md'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club, index) => (
            <tr key={club._id} className='h-8'>
              <td className='border border-gray-700 rounded-md'>{index + 1}</td>
              <td className='border border-gray-700 rounded-md'>{club.name}</td>
              <td className='border border-gray-700 rounded-md'>{club.location}</td>
              <td className='border border-gray-700 rounded-md'>{club.stadium}</td>
              <td className='border border-gray-700 rounded-md'>{club.manager}</td>
              <td className='border border-gray-700 rounded-md'>{club.yearFounded}</td>
              <td className='border border-gray-700 rounded-md'>
                <div className='flex justify-center gap-x-4'>
                  <Link to={`/clubs/details/${club._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                  </Link>
                  <Link to={`/clubs/edit/${club._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                  </Link>
                  <Link to={`/clubs/delete/${club._id}`}>
                    <AiOutlineDelete className='text-2xl text-red-600' />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default ClubsTable;