import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export async function getCountriesData({ regionFilter, searchFilter, countryAlphaCode }: GetCountryDataProps) {
    const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
    const apiUrl = new URL(apiEndpoint);
    let countriesData: CountryData[] = [];

    await fetch(apiUrl)
        .then((res) => res.json() as Promise<CountryData[]>)
        .then(data => {
            countriesData = data;
        });

    if (regionFilter && regionFilter !== "all" && searchFilter) {
        console.log("Both things active", regionFilter, searchFilter);
        return countriesData.filter((country: CountryData) =>
            country.region.toLowerCase() === regionFilter && country.name.toLowerCase().includes(searchFilter.toLowerCase())
        );
    }

    if (regionFilter && regionFilter !== "all") {
        return countriesData.filter((country: CountryData) =>
            country.region.toLowerCase() === regionFilter.toLowerCase()
        );
    }

    if (searchFilter) {
        return countriesData.filter((country: CountryData) =>
            country.name.toLowerCase().includes(searchFilter.toLowerCase())
        );
    }

    if (countryAlphaCode) {

        const relatedCountries: Array<{alphaCode: string, name: string}> = [];
        const country = countriesData.filter((country: CountryData) => country.alpha3Code === countryAlphaCode);

        if (country[0].borders && country[0].borders.length !== 0) {
            country[0].borders.forEach((borderCountry) => {
                const relatedCountry = countriesData.filter((country) => borderCountry === country.alpha3Code);
                if (relatedCountry) {
                    const relatedCountryData = {
                        alphaCode: relatedCountry[0].alpha3Code,
                        name: relatedCountry[0].name
                    }
                    relatedCountries.push(relatedCountryData);
                }
            });
        }

        country[0].relatedCountries = relatedCountries;

        return country;
    }

    return countriesData;
}