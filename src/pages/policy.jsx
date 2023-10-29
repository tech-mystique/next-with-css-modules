import {Policy} from '../app/policy';
import {Navigation} from '../app/navigation';
import '../styles/globals.css'

export default function PolicyPage() {
    return (
        <>
            <header className='header'>
                <Navigation/>
            </header>
            <main className="main">
                <Policy/>
            </main>
            <footer className="footer">
                🦉
            </footer>
        </>
    )
}