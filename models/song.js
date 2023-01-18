import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema( {
  content: String,
  rating: {
    type:  Number, 
    min: 1, 
    max: 5, 
    default: 5 
  },
  author: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"
  },
} , {
  timestamps: true
})

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId, 
    ref: "Profile"
  },
  genre: {
    type: String,
    required: true,
    enum: ['Hip-Hop', 'Rhythm-and-Blues', 'Rock', 'Pop', 'Country', 'Jazz', 'Heavy Metal', 'Classical', 'Indie', 'Reggaeton', 'Electronic', 'Latin']
  },
  explicitRating: {
    type: Boolean, 
    default: false
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}