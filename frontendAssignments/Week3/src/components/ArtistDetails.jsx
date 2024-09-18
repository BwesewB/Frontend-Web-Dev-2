export default function ArtistDetails({ artist }){
    return(
        <>
            <div className="artistSection">
                <img src={artist.photo_url} alt={`${artist.name}`} className="artistImage"/>
                <div>
                    <h2 className="artistName">{artist.name}</h2>
                    <p className="artistCountry">Country: {artist.country}</p>
                    <p className="artistYear">Years active:{artist.years_active}</p>
                </div>
            </div>
        </>
    )
}