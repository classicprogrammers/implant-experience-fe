import { api } from '../../utils/api'

export const getFaqResources = async () => {
    const response = await api.get('/faq/resources')
    return response.data?.data || []
}

export const getBlogs = async () => {
    const response = await api.get('/blogs/')
    return response.data?.data || []
}

export const getSafetyGuides = async () => {
    const response = await api.get('/safety-guides/')
    return response.data?.data || []
}

export const getBlogDetail = async (blogId) => {
    if (!blogId) return null
    const response = await api.get(`/blogs/${blogId}`)
    return response.data?.data || null
}

