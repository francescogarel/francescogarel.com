import { WeatherData } from '@/lib/types';

const BASE_URL = 'https://api.weatherapi.com/v1'; // FIX 1: Use HTTPS

export async function fetchWeather(
    city: string = 'Milan'
): Promise<WeatherData> {
    console.log('Current Key:', process.env.WEATHERAPI_KEY);
    if (!process.env.WEATHERAPI_KEY) {
        console.error('Weather API Key is missing');
        return {
            temperature: 0,
            condition: { text: 'Unknown', icon: 'sun' },
        }; // Fail gracefully
    }

    try {
        const response = await fetch(
            `${BASE_URL}/current.json?key=${process.env.WEATHERAPI_KEY}&q=${city}`,
            {
                next: { revalidate: 3600 },
            }
        );

        if (!response.ok) {
            throw new Error(`Weather API Error: ${response.statusText}`);
        }

        const data = await response.json();

        return {
            temperature: Math.round(data.current.temp_c),
            condition: {
                text: data.current.condition.text,
                icon: data.current.condition.icon,
            },
        };
    } catch (error) {
        console.error('Failed to fetch weather:', error);
        // Return a fallback so the UI doesn't crash
        return { temperature: 0 };
    }
}
