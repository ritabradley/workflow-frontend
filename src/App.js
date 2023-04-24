import './App.css';

function App() {
    const name = 'Rita Bradley';
    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Hi, I'm {name}!</h1>
                <p>I'm just your friendly, neighborhood web developer. Connect with me on Twitter</p>
                <a
                    className='App-link'
                    href='https://twitter.com/ritabradley_dev'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    My Twitter
                </a>
            </header>
        </div>
    );
}

export default App;
