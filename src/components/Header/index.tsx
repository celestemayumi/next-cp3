import './styles.css';
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <header className="header">
                <Image 
                    src ="/movie.ico"
                    width={100}
                    height={100}
                    alt = "Icone de filme"
                />
                <h1>Os melhores filmes estão aqui!</h1>
            </header>
        </>
    )
}

export default Header;