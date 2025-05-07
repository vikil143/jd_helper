import { config } from "../utilities/config";

export const companySearchByGoogle = async (name) => {
    try {
        console.log('Searching for company:', name);
        const url = `https://kgsearch.googleapis.com/v1/entities:search?query=${name}&limit=1&key=${config.GOOGLE_API_KEY}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log('Company data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching company data:', error);
        return null;
    }
}