import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import getApiData from '../../services/api'
import './GenreAndMoods.css'

const GenreAndMoods = () => {
  const [categoriesData, setCategoriesData] = useState([])

  const getData = async () => {
    const url = 'https://apis2.ccbp.in/spotify-clone/categories'
    const data = await getApiData(url)
    console.log(data.apiRes.categories)
    setCategoriesData(data.apiRes.categories)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ul className="category-ul-container">
      {/* {console.log(playlistData)} */}
      {categoriesData.length !== 0 ? (
        categoriesData.items.map(each => {
          const linkStyle = {
            backgroundImage: `url(${each.icons[0].url})`,
          }
          return (
            <li key={each.id} className="category-li-container">
              <Link to="/">
                <div className="category-card" style={linkStyle}>
                  <p className="category-name">{each.name}</p>
                </div>
              </Link>
            </li>
          )
        })
      ) : (
        <p>no playlist</p>
      )}
    </ul>
  )
}

export default GenreAndMoods
