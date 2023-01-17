import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  location: String,
  favoriteArtist: String,
  gaAlumni: {
    type: Boolean, 
    default: true
  },
  playlist: [{type: Schema.Types.ObjectId, ref: 'Song'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
