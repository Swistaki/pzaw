import prestiz from './zdjecia/prestiz.jpg';
import incepcja from './zdjecia/incepcja.jpg';
import spirited from './zdjecia/spirited.jpg'; 
import metro2033 from './zdjecia/metro2033.jpg';
import metro2034 from './zdjecia/metro2034.jpg';
import metro2035 from './zdjecia/metro2035.jpg';
import breach from './zdjecia/breach.jpg';
import showbiz from './zdjecia/showbiz.jpg';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Movie({ titleMovie, yearMovie, posterMovie, rating }: MovieProps) {
    return (
        <div className="col">
            <img src={posterMovie} alt={titleMovie} />
            <p>{titleMovie}</p>
            {rating >= 8 && <p>Polecany</p>}
            <p>Rok produkcji: {yearMovie}</p>
            <p>Ocena: {rating}/10</p>
        </div>
    );
}
const movies: MovieProps[] = [
    {
        titleMovie: 'Prestiż',
        yearMovie: 2006,
        posterMovie: prestiz,
        rating: 9,
    },
    {
        titleMovie: 'Spirited Away: W krainie bogów',
        yearMovie: 2001,
        posterMovie: spirited,
        rating: 7,
    },
    {
        titleMovie: 'Incepcja',
        yearMovie: 2011, //2010, zmienione aby pasowało do polecenia
        posterMovie: incepcja,
        rating: 10,
    },
];
movies.sort((a, b) => a.titleMovie.localeCompare(b.titleMovie, 'pl'));

const moviesAfter2010 = movies.filter((movie) => movie.yearMovie > 2010);



function Book({ coverBook, titleBook, yearBook, pagesBook }: BookProps) {
    return (
        <div className="col">
            <img src={coverBook} alt={titleBook} />
            <p>{titleBook}</p>
            {yearBook < 2000 && <p>Klasyka</p>}
            <p>Rok wydania: {yearBook}</p>
            <p>Liczba stron: {pagesBook}</p>
        </div>
    );
}
const books: BookProps[] = [
    {
        coverBook: metro2033,
        titleBook: 'Metro 2033',
        yearBook: 2005,
        pagesBook: 577,
    },
    {
        coverBook: metro2034,
        titleBook: 'Metro 2034',
        yearBook: 2009,
        pagesBook: 384,
    },
    {
        coverBook: metro2035,
        titleBook: 'Metro 2035',
        yearBook: 2015,
        pagesBook: 546,
    },
];
books.sort((a, b) => a.titleBook.localeCompare(b.titleBook, 'pl'));

const booksByNewestFirst = [...books].sort((a, b) => b.yearBook - a.yearBook);



function Album({ coverAlbum, titleAlbum, artistAlbum, genreAlbum, yearAlbum, tracks }: AlbumProps) {
    return (
        <div className="col">
            <img src={coverAlbum} alt={titleAlbum} />
            <p>{titleAlbum}</p>
            <p>Wykonawca: {artistAlbum}</p>
            <p>Gatunek: {genreAlbum}</p>
            <p>Rok wydania: {yearAlbum}</p>
            {tracks.length > 0 ? 
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Numer</th>
                            <th scope="col">Utwór</th>
                            <th scope="col" className="text-end">Czas trwania</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tracks.map(({ title, duration }, index) => (
                        <tr key={title}>
                            <th scope="row">{index + 1}</th>
                            <td>{title}</td>
                            <td className="text-end">{duration}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
             : 
                <div className="alert alert-info" role="alert">Brak utworów!</div>
            }
        </div>  
    );
}
const albums: AlbumProps[] = [
    {
        coverAlbum: breach,
        titleAlbum: 'Breach',
        artistAlbum: 'Twenty One Pilots',
        genreAlbum: 'Rock alternatywny, pop rock',
        yearAlbum: 2025,
        tracks: [
            { title: 'City Walls', duration: '5:22' },
            { title: 'Rawfear', duration: '3:22' },
            { title: 'Drum Show', duration: '3:23' },
            { title: 'Garbage', duration: '3:16' },
            { title: 'The Contract', duration: '3:45' },
            { title: 'Downstairs', duration: '5:26' },
            { title: 'Robot Voices', duration: '3:57' },
            { title: 'Center Mass', duration: '3:48' },
            { title: 'Cottonwood', duration: '3:08' },
            { title: 'One Way', duration: '2:43' },
            { title: 'Days Lie Dormant', duration: '3:26' },
            { title: 'Tally', duration: '3:32' },
            { title: 'Intentions', duration: '2:15' },
        ],
    },
    {
        coverAlbum: showbiz,
        titleAlbum: 'Showbiz',
        artistAlbum: 'Muse',
        genreAlbum: 'Rock alternatywny, indie rock',
        yearAlbum: 1999,
        tracks: [
            { title: 'Sunburn', duration: '3:54' },
            { title: 'Muscle Museum', duration: '4:23' },
            { title: 'Fillip', duration: '4:01' },
            { title: 'Falling Down', duration: '4:33' },
            { title: 'Cave', duration: '4:46' },
            { title: 'Showbiz', duration: '5:16' },
            { title: 'Unintended', duration: '3:57' },
            { title: 'Uno', duration: '3:37' },
            { title: 'Sober', duration: '4:04' },
            { title: 'Escape', duration: '3:31' },
            { title: 'Overdue', duration: '2:26' },
            { title: "Hate This and I'll Love You", duration: '5:09' },
        ],
    },
    {
        coverAlbum: showbiz,
        titleAlbum: 'Showbiz (bez utworów)',
        artistAlbum: 'Muse (gdyby nie tworzyli muzyki)',
        genreAlbum: 'Rock alternatywny, indie rock (skąd wiadomo skoro nie ma żadnego utworu)',
        yearAlbum: 1999,
        tracks: [
            // faktycznie nie ma utworów
        ]
    }
];
albums.sort((a, b) => a.titleAlbum.localeCompare(b.titleAlbum, 'pl'));

const albumWithMostTracks = albums.reduce((mostTracks, album) =>
    album.tracks.length > mostTracks.tracks.length ? album : mostTracks,
);



function App() {
    const [isMovieOpen, setIsMovieOpen] = useState(true);
    const [isMoviesAfter2010Open, setIsMoviesAfter2010Open] = useState(true);
    const [isBookOpen, setIsBookOpen] = useState(true);
    const [isAlbumOpen, setIsAlbumOpen] = useState(true);
    const [isAlbumWithMostTracksOpen, setIsAlbumWithMostTracksOpen] = useState(true);

    return (
        <main className="container">
            <section className='card'>
                <h2 onClick={() => setIsMovieOpen(!isMovieOpen)}>
                {isMovieOpen ? "▸" : "▾"} Filmy
                </h2>

                {!isMovieOpen && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {movies.map((movie) => <Movie key={movie.titleMovie} {...movie} />)}
                    </div>
                )}
            </section>

            <section className='card'>
                <h2 onClick={() => setIsMoviesAfter2010Open(!isMoviesAfter2010Open)}>
                {isMoviesAfter2010Open ? "▸" : "▾"} Filmy wydane po 2010 roku
                </h2>

                {!isMoviesAfter2010Open && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {moviesAfter2010.map((movie) => <Movie key={movie.titleMovie} {...movie} />)}
                    </div>
                )}
            </section>

            <section className='card'>
                <h2 onClick={() => setIsBookOpen(!isBookOpen)}>
                {isBookOpen ? "▸" : "▾"} Książki
                </h2>

                {!isBookOpen && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {booksByNewestFirst.map((book) => <Book key={book.titleBook} {...book} />)}
                    </div>
                )}
            </section>

            <section className='card'>
                <h2 onClick={() => setIsAlbumOpen(!isAlbumOpen)}>
                {isAlbumOpen ? "▸" : "▾"} Albumy
                </h2>
                
                {!isAlbumOpen && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {albums.map((album) => <Album key={album.titleAlbum} {...album} />)}
                    </div>
                )}
            </section>

            <section className='card'>
                <h2 onClick={() => setIsAlbumWithMostTracksOpen(!isAlbumWithMostTracksOpen)}>
                {isAlbumWithMostTracksOpen ? "▸" : "▾"} Album z największą liczbą utworów
                </h2>

                {!isAlbumWithMostTracksOpen && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <Album key={albumWithMostTracks.titleAlbum} {...albumWithMostTracks} />
                    </div>
                )}
            </section>
        </main>
    );
}

type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface MovieProps {
    titleMovie: string;
    yearMovie: number;
    posterMovie?: string;
    rating: Rating;
}

interface BookProps {
    coverBook: string;
    titleBook: string;
    yearBook: number;
    pagesBook: number;
}

interface AlbumProps {
    coverAlbum: string;
    titleAlbum: string;
    artistAlbum: string;
    genreAlbum: string;
    yearAlbum: number;
    tracks: { title: string; duration: string }[];
}

export default App;