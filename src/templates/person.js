import React from 'react'

export default function Person ({ pageContext }) {
  const { name, age } = pageContext
  return <div>{name} {age}</div>
}