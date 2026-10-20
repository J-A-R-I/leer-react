import { useEffect, useState } from "react";
import { Cloud, CloudLightning, CloudRain, CloudSnow, Droplets, Sun, Wind } from "lucide-react";
import Card from "./Card";

function getWeatherInfo(code) {
  if (code === 0) return { label: "Zonnig", icon: Sun, color: "text-amber-500" };
  if (code >= 1 && code <= 3) return { label: "Bewolkt", icon: Cloud, color: "text-slate-400" };
  if (code === 45 || code === 48) return { label: "Mistig", icon: Cloud, color: "text-slate-400" };
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return { label: "Regen", icon: CloudRain, color: "text-blue-500" };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { label: "Sneeuw", icon: CloudSnow, color: "text-sky-400" };
  if (code >= 95) return { label: "Onweer", icon: CloudLightning, color: "text-amber-600" };
  return { label: "Wisselvallig", icon: Cloud, color: "text-slate-400" };
}

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.21&longitude=4.26&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=Europe%2FBrussels"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weer ophalen mislukt");
        }
        return response.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading || !weather) {
    return (
      <Card title="Het Weer" description="Live weerbericht in België">
        <div className="animate-pulse space-y-4">
          <div className="h-24 rounded-2xl bg-slate-100" />
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded-xl bg-slate-100" />
            <div className="h-16 rounded-xl bg-slate-100" />
            <div className="h-16 rounded-xl bg-slate-100" />
          </div>
        </div>
      </Card>
    );
  }

  const weatherInfo = getWeatherInfo(weather.current.weather_code);
  const WeatherIcon = weatherInfo.icon;

  return (
    <Card title="Het Weer" description="Live weerbericht in België">
      {/* Hoofdblok met temperatuur en weertype */}
      <div className="mb-3 flex items-center justify-between rounded-2xl border border-blue-100/60 bg-gradient-to-br from-blue-50/70 to-slate-50 p-4 text-left">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-extrabold tracking-tight text-slate-900">
              {Math.round(weather.current.temperature_2m)}°
            </span>
            <span className="text-sm font-semibold text-slate-500">C</span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Gevoel: {Math.round(weather.current.apparent_temperature)}°C
          </p>
        </div>

        <div className="flex flex-col items-center">
          <WeatherIcon size={42} className={`${weatherInfo.color} transition-transform hover:scale-110`} />
          <span className="mt-1 text-xs font-semibold text-slate-700">
            {weatherInfo.label}
          </span>
        </div>
      </div>

      {/* Detailtegels */}
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5">
          <div className="mb-1 flex items-center gap-1 text-xs font-medium text-slate-500">
            <Wind size={13} className="text-blue-500" />
            <span>Wind</span>
          </div>
          <span className="text-sm font-bold text-slate-800">
            {weather.current.wind_speed_10m}{" "}
            <span className="text-[10px] font-normal text-slate-400">km/u</span>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5">
          <div className="mb-1 flex items-center gap-1 text-xs font-medium text-slate-500">
            <Droplets size={13} className="text-blue-500" />
            <span>Vocht</span>
          </div>
          <span className="text-sm font-bold text-slate-800">
            {weather.current.relative_humidity_2m}%
          </span>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5">
          <div className="mb-1 flex items-center gap-1 text-xs font-medium text-slate-500">
            <CloudRain size={13} className="text-blue-500" />
            <span>Regen</span>
          </div>
          <span className="text-sm font-bold text-slate-800">
            {weather.current.precipitation}{" "}
            <span className="text-[10px] font-normal text-slate-400">mm</span>
          </span>
        </div>
      </div>
    </Card>
  );
}