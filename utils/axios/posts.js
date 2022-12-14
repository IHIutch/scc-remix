import axios from 'redaxios'

const PUBLIC_STRAPI_API_URL = process.env.PUBLIC_STRAPI_API_URL

export const getPosts = async (params = null) => {
  const { data } = await axios
    .get(`${PUBLIC_STRAPI_API_URL}/posts`, {
      params: {
        ...params,
        populate: '*',
      },
    })
    .catch((res) => {
      throw new Error('API Error: ' + res?.data?.error?.message)
    })
  return data
}

export const getPost = async (id) => {
  const { data } = await axios
    .get(`${PUBLIC_STRAPI_API_URL}/posts/${id}`, {
      params: {
        populate: '*',
      },
    })
    .catch((res) => {
      throw new Error('API Error: ' + res?.data?.error?.message)
    })
  return data
}
