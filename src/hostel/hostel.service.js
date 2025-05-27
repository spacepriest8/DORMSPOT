import Hostel from '../models/hostel.model.js';
import { NotFoundError } from '../lib/errors.js';

export const createHostel = async (hostelData) => {
    return await Hostel.create(hostelData);
  };

// export const getAllHostels = async (filters = {}) => {
//   return await Hostel.find(filters);
// };

export const getAllHostels = async (query) => {
    const filterQuery = {};
  
    if (query.location) {
      filterQuery.location = query.location;
    }
  
    if (query.propertyType) {
      filterQuery.propertyType = query.propertyType;
    }
  
    if (query.paymentDuration) {
      filterQuery.paymentDuration = query.paymentDuration;
    }
  
    if (query.amenities) {
      const amenitiesArray = query.amenities.split(',');
      filterQuery.amenities = { $all: amenitiesArray };
    }
  
    const hostels = await Hostel.find(filterQuery);
    return hostels;
  };

export const getHostelById = async (id) => {
  const hostel = await Hostel.findById(id);
  if (!hostel) throw new NotFoundError('Hostel');
  return hostel;
};