import Image from "next/image";
import s from "./Post.module.css";

const Post = ({post}) => {
    return (
        <div className={s.postWrapper}>
            <div className={s.post}>
                <div className={s.imageWrapper}>
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1674487959487-57289d4720ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3542&q=80"
                        alt="owl"
                        fill
                    />
                </div>
                <h2 className={s.postTitle}>{post.title}</h2>
                <p className={s.postText}>{post.body}</p>
                <p className={s.postText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    alias aspernatur, commodi consequatur cum dolore dolorum
                    eius error est fugiat hic illo illum in ipsa iure laboriosam
                    laborum maiores non nulla numquam perferendis praesentium
                    provident quam quidem, quod rerum saepe sint suscipit, vel
                    veniam! Deleniti eius fugiat laboriosam repudiandae saepe.
                    Accusamus autem consectetur dolores doloribus eum iste
                    libero modi quae quam. Asperiores impedit numquam qui.
                    Delectus eligendi id suscipit. Alias aliquid aperiam
                    blanditiis deserunt dicta doloribus dolorum ducimus, est ex
                    id illo laboriosam maxime modi natus nesciunt nulla odio
                    pariatur, perspiciatis porro recusandae repellat sequi sunt
                    tempora totam velit voluptatem?
                </p>
                <p className={s.postText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    alias aspernatur, commodi consequatur cum dolore dolorum
                    eius error est fugiat hic illo illum in ipsa iure laboriosam
                    laborum maiores non nulla numquam perferendis praesentium
                    provident quam quidem, quod rerum saepe sint suscipit, vel
                    veniam! Deleniti eius fugiat laboriosam repudiandae saepe.
                    Accusamus autem consectetur dolores doloribus eum iste
                    libero modi quae quam. Asperiores impedit numquam qui.
                    Delectus eligendi id suscipit. Alias aliquid aperiam
                    blanditiis deserunt dicta doloribus dolorum ducimus, est ex
                    id illo laboriosam maxime modi natus nesciunt nulla odio
                    pariatur, perspiciatis porro recusandae repellat sequi sunt
                    tempora totam velit voluptatem?
                </p>
                <p className={s.postText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    alias aspernatur, commodi consequatur cum dolore dolorum
                    eius error est fugiat hic illo illum in ipsa iure laboriosam
                    laborum maiores non nulla numquam perferendis praesentium
                    provident quam quidem, quod rerum saepe sint suscipit, vel
                    veniam! Deleniti eius fugiat laboriosam repudiandae saepe.
                    Accusamus autem consectetur dolores doloribus eum iste
                    libero modi quae quam. Asperiores impedit numquam qui.
                    Delectus eligendi id suscipit. Alias aliquid aperiam
                    blanditiis deserunt dicta doloribus dolorum ducimus, est ex
                    id illo laboriosam maxime modi natus nesciunt nulla odio
                    pariatur, perspiciatis porro recusandae repellat sequi sunt
                    tempora totam velit voluptatem?
                </p>
            </div>
        </div>
    )
}

export default Post