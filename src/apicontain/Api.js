const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API = '7a13561d1ce6e64431e7765e54553be5'

export default async function Api(city) {
    const r = await fetch(`${URL}${city}&appid=${KEY}&units=metric`);
    const data = await r.json();
    return data;
}