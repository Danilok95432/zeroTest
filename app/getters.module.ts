export async function getPosts(page = 1, limit = 10) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const paginatedPosts = posts.slice((page - 1) * limit, page * limit)
  if (!posts) {
    throw new Error('Failed to fetch data')
  }
  return paginatedPosts
}

export async function getAuthor(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await res.json()
  return user.name
}

export async function getPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()
  return post
}

export async function getComments(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  const comments = await res.json()
  return comments
}