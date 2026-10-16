import prestiz from './zdjecia/prestiz.jpg';
import incepcja from './zdjecia/incepcja.jpg';
import spirited from './zdjecia/spirited.jpg';
import metro2033 from './zdjecia/metro2033.jpg';
import metro2034 from './zdjecia/metro2034.jpg';
import metro2035 from './zdjecia/metro2035.jpg';
import breach from './zdjecia/breach.jpg';
import showbiz from './zdjecia/showbiz.jpg';


function Movie({ titleMovie, yearMovie, posterMovie }: MovieProps) {
    return (
        <div className="movie">
            <img src={posterMovie} alt={titleMovie} />
            <p>{titleMovie}</p>
            <p>Rok produkcji: {yearMovie}</p>
        </div>
    );
}
const movies: MovieProps[] = [
    {
        titleMovie: 'Prestiż',
        yearMovie: 2006,
        posterMovie: prestiz,
    },
    {
        titleMovie: 'Spirited Away: W krainie bogów',
        yearMovie: 2001,
        posterMovie: spirited,
    },
    {
        titleMovie: 'Incepcja',
        yearMovie: 2010,
        posterMovie: incepcja,
    },
];



function Book({ coverBook, titleBook, yearBook, pagesBook }: BookProps) {
    return (
        <div className="book">
            <img src={coverBook} alt={titleBook} />
            <p>{titleBook}</p>
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



function Album({ coverAlbum, titleAlbum, artistAlbum, genreAlbum, yearAlbum, tracks }: AlbumProps) {
    return (
        <div className="album">
            <img src={coverAlbum} alt={titleAlbum} />
            <p>{titleAlbum}</p>
            <p>Wykonawca: {artistAlbum}</p>
            <p>Gatunek: {genreAlbum}</p>
            <p>Rok wydania: {yearAlbum}</p>
            {tracks && (
                <ol>
                    {tracks.map(({ title, duration }) => (
                        <li key={title}>{title} - {duration}</li>
                    ))}
                </ol>
            )}
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
];



function App() {
    return (
        <div>
            <div>
                {movies.map((movie) => (
                    <Movie key={movie.titleMovie} {...movie} />
                ))}
            </div>

            <div>
                {books.map((book) => (
                    <Book key={book.titleBook} {...book} />
                ))}
            </div>

            <div>
                {albums.map((album) => (
                    <Album key={album.titleAlbum} {...album} />
                ))}
            </div>
        </div>
    );
}

interface MovieProps {
    titleMovie: string;
    yearMovie: number;
    posterMovie: string;
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