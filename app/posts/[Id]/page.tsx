import styles from './page.module.scss'
import { getPost, getComments, getAuthor } from '../../getters.module'

type Comment = {
  postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export default async function Post({ params }: { params: { Id: number } }) {
    const post = await getPost(params.Id)
    const comments = await getComments(params.Id)

    return (
        <div className={styles.post}>
            <div className={styles.post__elem}>
                <span className={styles.post__elem__author}>{getAuthor(post.userId)}</span>
                <h2>{post.title}</h2>
                <p className={styles.post__elem__body}>{post.body}</p>
                <h2>Комментарии: </h2>
                <div className={styles.comments}>
                    {
                        comments.map((comment: Comment) => {
                            return (
                                <div className={styles.comment} key={comment.id}>
                                    <h2 className={styles.comment__title}>{comment.name}</h2>
                                    <p className={styles.comment__body}>{comment.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}