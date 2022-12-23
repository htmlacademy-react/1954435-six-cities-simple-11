import {Offers} from '../types/offer';
import {PHOTO_URL} from './const-mocks';


export const offers: Offers = [
  {
    id: 1,
    isPremium: true,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    rating: 4.8,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 3}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 3,
    maxAdults: 4,
    goods: ['Heating', 'Kitchen' , 'Fridge', 'Towels'],
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    host: {
      id: 5,
      name: 'Angelina',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.370216,
        longitude: 4.895168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.35514938496378,
      longitude: 4.673877537499948
    }
  },
  {
    id: 2,
    isPremium: false,
    title: 'Wood and stone place',
    type: 'private room',
    price: 80,
    rating: 4,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 4}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 2,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Heating', 'Kitchen' , 'Fridge', 'Towels'],
    description: 'The building is green and from 18th century.',
    host: {
      id: 4,
      name: 'Ole',
      isPro: false,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.380216,
        longitude: 4.905168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.39514938496378,
      longitude: 4.693877537499948
    }
  },
  {
    id: 3,
    isPremium: false,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 3,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 2}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 1,
    maxAdults: 2,
    goods: ['Wi-Fi', 'Towels'],
    description: 'An independent House, strategically located between Rembrand Square and National Opera.',
    host: {
      id: 3,
      name: 'Bill',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 52.310216,
        longitude: 4.955168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 52.35514938496378,
      longitude: 4.653877537499948
    }
  },
  {
    id: 4,
    isPremium: false,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5,
    previewImage: `${PHOTO_URL.Offer}${Math.random()}`,
    images: Array.from({length: 3}, () => `${PHOTO_URL.Offer}${Math.random()}`),
    bedrooms: 5,
    maxAdults: 3,
    goods: ['Towels'],
    description: 'The building is green and from 18th century.',
    host: {
      id: 2,
      name: 'Max',
      isPro: true,
      avatarUrl: `${PHOTO_URL.Avatar}${Math.random()}`
    },
    city: {
      location: {
        zoom: 10,
        latitude: 51.310216,
        longitude: 5.955168
      },
      name: 'Amsterdam'
    },
    location: {
      zoom: 8,
      latitude: 51.35514938496378,
      longitude: 5.653877537499948
    }
  }
];
