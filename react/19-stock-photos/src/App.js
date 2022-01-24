import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const mounted = useRef(false);
    const [newImages, setNewImages] = useState(false);
    const fetchImages = async () => {
        //let because url is changing when getting default images or searching images
        setLoading(true);
        let url;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;

        if (query) {
            url = `${searchUrl + clientID + urlPage + urlQuery}`;
        } else {
            url = `${mainUrl + clientID + urlPage}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();

            setPhotos((oldPhotos) => {
                if (query && page === 1) {
                    return data.results;
                } else if (query) {
                    return [...oldPhotos, ...data.results];
                } else {
                    return [...oldPhotos, ...data];
                }
            });

            setNewImages(false);
            setLoading(false);
        } catch (error) {
            setNewImages(false);
            setLoading(false);
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // no fetching when searchbar is empty(query is empty)
        if (!query) return;
        if (page === 1) {
            fetchImages();
        }
        setPage(1);
    };

    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line
    }, [page]);

    useEffect(() => {
        //prevent running on initial render
        if (!mounted.current) {
            mounted.current = true;
            return;
        }
        if (!newImages) return;
        if (loading) return;
        setPage((oldPage) => oldPage + 1);
        console.log("no inital rendering here");
    }, [newImages]);

    const event = () => {
        if (
            window.innerHeight + window.scrollY >=
            document.body.scrollHeight - 5
        ) {
            setNewImages(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", event);

        return () => {
            window.removeEventListener("scroll", event);
        };
    }, []);

    return (
        <main>
            <section className="search">
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="search your image"
                        className="form-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="submit-btn"
                        onClick={handleSubmit}
                    >
                        <FaSearch />
                    </button>
                </form>
            </section>
            <section className="photos">
                <div className="photos-center">
                    {photos.map((image) => {
                        return <Photo key={image.id} {...image} />;
                    })}
                </div>
                {loading && <h2 className="loading">loading...</h2>}
            </section>
        </main>
    );
}

export default App;
