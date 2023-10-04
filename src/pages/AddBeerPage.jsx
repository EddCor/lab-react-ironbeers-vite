import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddBeerPage() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirst_brewed] = useState('')
  const [brewers_tips, setBrewers_tips] = useState('')
  const [attenuation_level, setAttenuation_level] = useState(0)
  const [contributed_by, setContributed_by] = useState('')

  const onSubmit = async event => {
    event.preventDefault()
    const values = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    }
    try {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/new`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-type': 'application/json' },
      })
      if (response.ok) {
        const newBeer = await response.json()
        console.log(newBeer)
        navigate(`/beers`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      style={{ display: 'grid', gridTemplate: 'auto / 1fr', justifyItems: 'center' }}
      onSubmit={onSubmit}
    >
      <label>
        Name
        <input value={name} onChange={event => setName(event.target.value)} required />
      </label>
      <label>
        Tagline
        <input value={tagline} onChange={event => setTagline(event.target.value)} required />
      </label>
      <label>
        Description
        <textarea
          value={description}
          onChange={event => setDescription(event.target.value)}
          required
        />
      </label>
      <label>
        First Brewed
        <input value={first_brewed} onChange={event => setFirst_brewed(event.target.value)} />
      </label>
      <label>
        Brewer&apos;s Tips
        <input value={brewers_tips} onChange={event => setBrewers_tips(event.target.value)} />
      </label>
      <label>
        Attenuation Level
        <input
          type='number'
          value={attenuation_level}
          onChange={event => setAttenuation_level(event.target.value)}
        />
      </label>
      <label>
        Contributed By
        <input value={contributed_by} onChange={event => setContributed_by(event.target.value)} />
      </label>
      <button type='submit'>Create Beer</button>
    </form>
  )
}

export default AddBeerPage