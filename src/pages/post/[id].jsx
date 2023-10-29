import {Navigation} from '../../app/navigation';
import Post from '../../app/post';
import {fetchPost} from '../../app/post/fetchData';

export default function PostPage(post) {
    return (
        <>
            <header className='header'>
                <Navigation/>
            </header>
            <main className="main">
                <Post post={post}/>
            </main>
            <footer className="footer">
                🦉
            </footer>
        </>
    )
}

export async function getServerSideProps(context) {
    const data = await fetchPost(context.params.id);
    return {
        props: data,
    }
}