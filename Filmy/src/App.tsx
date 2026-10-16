function Movie({ titleMovie, yearMovie, posterMovie }: Props) {
    return (
        <div className="movie">
            <img src={posterMovie} alt={titleMovie} />
            <p>{titleMovie}</p>
            <p>Rok produkcji: {yearMovie}</p>
        </div>
    );
}

function Book({ coverBook, titleBook, yearBook, pagesBook }: Props) {
    return (
        <div className="book">
            <img src={coverBook} alt={titleBook} />
            <p>{titleBook}</p>
            <p>Rok wydania: {yearBook}</p>
            <p>Liczba stron: {pagesBook}</p>
        </div>
    );
}

function Album({ coverAlbum, titleAlbum, artistAlbum, genreAlbum, yearAlbum }: Props) {
    return (
        <div className="album">
            <img src={coverAlbum} alt={titleAlbum} />
            <p>{titleAlbum}</p>
            <p>Wykonawca: {artistAlbum}</p>
            <p>Gatunek: {genreAlbum}</p>
            <p>Rok wydania: {yearAlbum}</p>
        </div>
    );
}

function App() {
    return (
        <>
            <div>
                <Movie
                    titleMovie="Prestiż"
                    yearMovie="2006"
                    posterMovie="zdjecia/prestiz.jpg"
                />

                <Movie
                    titleMovie="Spirited Away: W krainie bogów"
                    yearMovie="2001"
                    posterMovie="zdjecia/spirited.jpg"
                />

                <Movie
                    titleMovie="Incepcja"
                    yearMovie="2010"
                    posterMovie="zdjecia/incepcja.jpg"
                />
            </div>

            <div>
                <Book
                    coverBook="/zdjecia/metro2033.jpg"
                    titleBook="Metro 2033"
                    yearBook="2005"
                    pagesBook="577"
                />

                <Book
                    coverBook="/zdjecia/metro2034.jpg"
                    titleBook="Metro 2034"
                    yearBook="2009"
                    pagesBook="384"
                />

                <Book
                    coverBook="/zdjecia/metro2035.jpg"
                    titleBook="Metro 2035"
                    yearBook="2015"
                    pagesBook="546"
                />
            </div>

            <div>
                <Album
                    coverAlbum="/zdjecia/breach.jpg"
                    titleAlbum="Breach"
                    artistAlbum="Twenty One Pilots"
                    genreAlbum="Rock alternatywny, pop rock"
                    yearAlbum="2025"
                />
                <ol>
                    <li>City Walls - 5:22</li>
                    <li>Rawfear - 3:22</li>
                    <li>Drum Show - 3:23</li>
                    <li>Garbage - 3:16</li>
                    <li>The Contract - 3:45</li>
                    <li>Downstairs - 5:26</li>
                    <li>Robot Voices - 3:57</li>
                    <li>Center Mass - 3:48</li>
                    <li>Cottonwood - 3:08</li>
                    <li>One Way - 2:43</li>
                    <li>Days Lie Dormant - 3:26</li>
                    <li>Tally - 3:32</li>
                    <li>Intentions - 2:15</li>
                </ol>

                <Album
                    coverAlbum="/zdjecia/showbiz.jpg"
                    titleAlbum="Showbiz"
                    artistAlbum="Muse"
                    genreAlbum="Rock alternatywny, indie rock"
                    yearAlbum="1999"
                />
                <ol>
                    <li>Sunburn - 3:54</li>
                    <li>Muscle Museum - 4:23</li>
                    <li>Fillip - 4:01</li>
                    <li>Falling Down - 4:33</li>
                    <li>Cave - 4:46</li>
                    <li>Showbiz - 5:16</li>
                    <li>Unintended - 3:57</li>
                    <li>Uno - 3:37</li>
                    <li>Sober - 4:04</li>
                    <li>Escape - 3:31</li>
                    <li>Overdue - 2:26</li>
                    <li>Hate This and I'll Love You - 5:09</li>
                </ol>
            </div>
        </>
    );
}

interface Props {
    titleMovie?: string;
    yearMovie?: string;
    posterMovie?: string;
    coverBook?: string;
    titleBook?: string;
    yearBook?: string;
    pagesBook?: string;
    coverAlbum?: string;
    titleAlbum?: string;
    artistAlbum?: string;
    genreAlbum?: string;
    yearAlbum?: string;
}

export default App;