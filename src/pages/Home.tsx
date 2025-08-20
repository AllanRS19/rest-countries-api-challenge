import { useEffect, useState } from "react";
import ActionsSection from "../components/ActionsSection";
import CountryCard from "../components/CountryCard";
import { getCountriesData } from "../lib/utils";
import { useSearchParams } from "react-router";
import Loading from "../components/Loading";

const Home = () => {

    const [searchParams] = useSearchParams();
    const [countries, setCountries] = useState<CountryData[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const options = {
                regionFilter: searchParams.get("filter") as string || "",
                searchFilter: searchParams.get("search") as string || ""
            }
            const countriesData = await getCountriesData(options);
            setCountries(countriesData);
        }
        fetchCountries();
    }, [searchParams]);

    return (
        <section className="content-section">
            <ActionsSection />
            <section className="countries-grid">
                {countries.length > 0 ? countries.map((country: CountryCardProps) => (
                    <CountryCard
                        key={country.name}
                        alpha3Code={country.alpha3Code}
                        flag={country.flag}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                )) : <Loading />}
            </section>
        </section>
    )
}

export default Home;