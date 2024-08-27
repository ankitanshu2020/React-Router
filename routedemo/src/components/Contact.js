import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
    const location = useLocation()
  return (
    <div>Contact Page {location.pathname} {location.state.topic}</div>
  )
}
