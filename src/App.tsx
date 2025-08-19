import { useEffect, useState } from "react";
import Header from "./components/Header";
import ActionsSection from "./components/ActionsSection";
import CountryCard from "./components/CountryCard";

const App = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("/src/constants/api/data.json")
        .then((response) => response.json())
        .then(data => setCountries(data))
        .catch((error) => console.log(error))
    }, []);

    return (
        <main className="size-full">
            <Header />
            <section className="content-section">
                <ActionsSection />
                <section className="countries-grid">
                    {countries && countries.map((country: CountryCardProps) => (
                        <CountryCard 
                            flag={country.flag}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    ))}
                </section>
            </section>
        </main>
    )
}

export default App;