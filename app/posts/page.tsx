import Link from 'next/link'
import styles from './page.module.scss'
import { getPosts, getAuthor, getQuery } from '../getters.module'

const page = 4
const limit = 5

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default async function Posts({ query }: { query: { page: string } }) {
    const posts = await getPosts(page, limit)

    return(
        <div className={styles.posts}>
            <h1>Посты</h1>
            <div className={styles.posts__list}>
            {
                posts.map((post: Post) => {
                    return (
                        <Link
                            href={`/posts/${post.id}`} 
                            key={post.id} 
                            className={styles.post}
                        >
                            <span>{getAuthor(post.userId)}</span>
                            <img src='/' className={styles.post__skeleton} />
                            <span className={styles.post__title}>{post.title}</span>
                        </Link>
                    )
                })
            }
            </div>
        </div>
    )
}
