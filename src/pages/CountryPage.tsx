import { Link, useParams } from "react-router"
import { getCountriesData } from "../lib/utils";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const CountryPage = () => {

    const { alphaCode } = useParams();
    const [countryData, setCountryData] = useState<CountryData | null>(null);

    useEffect(() => {
        const fetchCurrentCountry = async () => {
            const result = await getCountriesData({ countryAlphaCode: alphaCode });
            setCountryData(result[0]);
        }
        fetchCurrentCountry();
    }, [alphaCode]);

    if (!countryData) return;

    const {
        flag,
        name,
        nativeName,
        population,
        region,
        capital,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        relatedCountries
    } = countryData;

    return (
        <section className="country-page">
            <Link to="/" className="back-button">
                <ArrowLeft className="arrow-left-icon" />
                <p>Back</p>
            </Link>
            <section className="country-info-section">
                <div className="country-info-wrapper">
                    <img
                        src={flag}
                        alt={name}
                    />
                    <div className="country-info">
                        <h1 className="country-name">{name}</h1>
                        <div className="country-info-inner">
                            <div className="country-subcontent">
                                <p>
                                    <span>Native name: </span>
                                    {nativeName}
                                </p>
                                <p>
                                    <span>Population: </span>
                                    {population.toLocaleString()}
                                </p>
                                <p>
                                    <span>Region: </span>
                                    {region}
                                </p>
                                <p>
                                    <span>Sub Region: </span>
                                    {subregion}
                                </p>
                                <p>
                                    <span>Capital: </span>
                                    {capital}
                                </p>
                            </div>

                            <div className="country-subcontent">
                                <p>
                                    <span>Top Level Domain: </span>
                                    {topLevelDomain}
                                </p>
                                <p>
                                    <span>Currencies: </span>
                                    {currencies.map(({ name }, index) =>
                                        index < currencies.length - 1
                                            ? name + ", "
                                            : name
                                    )}
                                </p>
                                <p>
                                    <span>Languages: </span>
                                    {languages.map(({ name }, index) =>
                                        index < languages.length - 1
                                            ? name + ", "
                                            : name
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="border-countries">
                            <h2>Border Countries: </h2>
                            <div className="border-countries-wrapper">
                                {relatedCountries?.length !== 0
                                    ? relatedCountries?.map((relatedCountry) =>
                                        <Link key={relatedCountry.name} to={`/country/${relatedCountry.alphaCode}`} className="country-link">{relatedCountry.name}</Link>)
                                    : <p>This country has no border with other countries</p>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default CountryPage