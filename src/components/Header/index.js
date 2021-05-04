import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import './styles.css'

const SITE_QUERY = gql`
  query {
    site {
      title
      logoImage
    }
    profile {
      firstName
    }
  }
`

const Header = () => {
  const { data, loading, error } = useQuery(SITE_QUERY)
  const title = data?.site?.title
  const logoImage = data?.site?.logoImage
  const firstName = data?.profile?.firstName

  if (loading || error) {
    return null
  }

  return (
    <header className="header-wrapper">
      <Link to={"/"}><img src={logoImage} alt="logo" /></Link>
      <h1>{title}</h1>
      <Link to={"/profile"}>Welcome {firstName}</Link>
    </header>
  )
}

export default Header