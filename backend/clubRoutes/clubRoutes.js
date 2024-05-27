import express from 'express';
import { Club } from '../models/clubModel.js';

const router = express.Router();

// route to save a new Club
router.post('/', async (request, response) => {
    console.log(request.body);
    try {
        if (
            !request.body.name ||
            !request.body.location ||
            !request.body.stadium ||
            !request.body.manager ||
            !request.body.yearFounded ||
            !request.body.description
        ) {
            return response.status(400).send({ message: 'All fields of data are required' });
        }
        const newClub = {
            name: request.body.name,
            location: request.body.location,
            stadium: request.body.stadium,
            manager: request.body.manager,
            yearFounded: request.body.yearFounded,
            description: request.body.description,
        };

        const club = await Club.create(newClub)

        return response.status(201).send(club);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// route to get all Clubs
router.get('/', async (request, response) => {
    try {
        const clubs = await Club.find({});

        return response.status(200).send({
            count: clubs.length,
            data: clubs
        });
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

// route to get a Club by id
router.get('/:id', async (request, response) => {
    console.log(request.params.id);
    try {
        const club = await Club.findById(request.params.id);

        if (club) {
            return response.status(200).send(club);
        } else {
            return response.status(404).send({ message: 'Club not found' });
        }
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

// route to update a Club by id
router.put('/:id', async (request, response) => {
    console.log(request.params.id);
    try {
        const club = await Club.findById(request.params.id);

        if (club) {
            club.name = request.body.name || club.name;
            club.location = request.body.location || club.location;
            club.stadium = request.body.stadium || club.stadium;
            club.manager = request.body.manager || club.manager;
            club.yearFounded = request.body.yearFounded || club.yearFounded;
            club.description = request.body.description || club.description;

            const updatedClub = await club.save();

            return response.status(200).send(updatedClub);
        } else {
            return response.status(404).send({ message: 'Club not found' });
        }
    } catch (error) {
        console.log(error.message);
        response.status(400).send({ message: error.message });
    }
});

// route to delete a Club by id
router.delete('/:id', async (request, response) => {
    console.log(request.params);
    try {
        const club = await Club.findByIdAndDelete(request.params.id);

        if (club) {
            return response.status(200).send({ message: 'Club removed' });
        }
        return response.status(404).send({ message: 'Club not found' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;