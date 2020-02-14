import axios from 'axios'

const baseUrl = process.env.BASE_API_URL

const endpoints = {
  blogs: `${baseUrl}/api/blog`
}

const fetchBlogPosts = async () => {
  try {
    const { data } = await axios.get(endpoints.blogs)
    return data
  } catch (err) {
    console.error(`Failed to fetchBlogPosts()`, err.message)
  }
}

export {
  fetchBlogPosts
}