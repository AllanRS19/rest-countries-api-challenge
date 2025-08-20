import { Link } from "react-router";

const CountryCard = ({ alpha3Code: alphaCode, flag, name, population, region, capital, }: CountryCardProps) => {
    return (
        <Link className="country-card" to={`/country/${alphaCode}`}>
            {flag ? (
                <img src={flag} alt={name} className="country-image" />
            ) : (
                <div className="empty-image">
                    <p>No Image Available</p>
                </div>
            )}
            <article className="country-card-info">
                <h2>{name}</h2>
                <div className="country-description">
                    <p>
                        <span>Population: </span>{population.toLocaleString()}
                    </p>
                    <p>
                        <span>Region: </span>{region}
                    </p>
                    <p>
                        <span>Capital: </span>{capital ?? "No capital"}
                    </p>
                </div>
            </article>
        </Link>
    )
}

export default CountryCard;