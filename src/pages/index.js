import {Navigation} from '../app/navigation';
import Posts from '../app/posts';
import '../styles/globals.css'
import {fetchPostsList} from '../app/posts/fetchData';

function Home({list}) {
    return (
        <>
            <header className='header'>
                <Navigation/>
            </header>
            <main className="main">
                <Posts postsList={list}/>
            </main>
            <footer className="footer">
                🦉
            </footer>
        </>
    )
}

export async function getStaticProps() {
    const data = await fetchPostsList();

    return {
        props: {
            list: data
        },
    }
}

export default Home;