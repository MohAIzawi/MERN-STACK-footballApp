import { Link } from 'react-router-dom'
import { PiBookOpenTextLight} from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { AiOutlineDelete } from 'react-icons/ai'

const ClubsCard = ({ clubs }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {clubs.map((club) => (
                <div key={club._id} className='border border-gray-500 rounded-lg px-4 py-4 m-4 relative hover:shadow:xl'>
                    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>{club.name}</h2>
                    <p className='text-lg'>{club.location}</p>
                    <p className='text-lg'>{club.stadium}</p>
                    <p className='text-lg'>{club.manager}</p>
                    <p className='text-lg'>{club.yearFounded}</p>
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
                </div>
            ))}
        </div>
    )
}

export default ClubsCard;
            
