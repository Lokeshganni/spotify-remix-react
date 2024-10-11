import Cookies from 'js-cookie'

const getApiData = async url => {
  const token = Cookies.get('jwt_token')
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await fetch(url, options)
  if (response.ok) {
    const data = await response.json()
    return {apiRes: data}
  }
  return {apiRes: 'failed'}
}
export default getApiData
