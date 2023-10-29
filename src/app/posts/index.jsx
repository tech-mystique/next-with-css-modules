import s from './Posts.module.css'
import Link from 'next/link';
import Image from 'next/image'

const Posts = ({postsList}) => {
    return (
        <div>
            <h1 className={s.title}>Posts</h1>
            <div className={s.details}>
                <ul className={s.posts}>
                    {postsList.map(el => (
                            <li key={el.id} className={s.post}>
                                <Link className={s.link} href={`./post/${el.id}`}>
                                    <div className={s.imageWrapper}>
                                        <Image
                                            src="https://plus.unsplash.com/premium_photo-1674487959487-57289d4720ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3542&q=80"
                                            alt="Picture of the author"
                                            fill
                                        />
                                    </div>
                                    <h2 className={s.postTitle}>{el.title}</h2>
                                    <p className={s.postText}>{el.body}</p>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Posts;