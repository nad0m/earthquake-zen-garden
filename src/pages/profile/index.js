import React from 'react'
import { useQuery, gql } from '@apollo/client'
import './styles.css'
import ItemList from '../../components/ItemList'

const PROFILE_QUERY = gql`
  query {
    profile {
      firstName
      lastName
      avatarImage
      phone
      email
      bio
    }
  }
`

const Profile = () => {
  const { data, loading, error } = useQuery(PROFILE_QUERY)

  const profile = data?.profile || {}

  const details = [
    {
      name: 'First name',
      content: profile?.firstName
    },
    {
      name: 'Last name',
      content: profile?.lastName
    },
    {
      name: 'Phone',
      content: profile?.phone
    },
    {
      name: 'Email',
      content: profile?.email
    },
    {
      name: 'Bio',
      content: profile?.bio
    }
  ]

  if (loading || error) {
    return null
  }

  return (
    <div className="profile-wrapper">
      <h4>Profile</h4>
      <div className="profile-content-wrapper">
        {/* TODO: add lazy image loader custom hook */}
        <img src={profile?.avatarImage} alt="avatar" />
        <ItemList list={details} />
      </div>
    </div>
  )
}

export default Profile