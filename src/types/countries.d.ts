interface CountryData {
    alpha3Code: string;
    nativeName: string;
    flag: string;
    name: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string[];
    currencies: Array<{ name: string; }>;
    languages: Array<{ name: string; }>;
    borders?: string[];
    relatedCountries?: Array<{
        alphaCode: string;
        name: string;
    }>;
}

interface CountryCardProps {
    alpha3Code: string;
    flag: string;
    name: string;
    population: number;
    region: string;
    capital: string;
}

interface GetCountryDataProps {
    regionFilter?: string;
    searchFilter?: string;
    countryAlphaCode?: string;
}