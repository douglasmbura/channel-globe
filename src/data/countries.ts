export interface Country {
  name: string;
  code: string;
  channels: number;
  lat: number;
  lng: number;
}

export const countries: Country[] = [
  { name: "United States", code: "US", channels: 342, lat: 37.0902, lng: -95.7129 },
  { name: "United Kingdom", code: "GB", channels: 187, lat: 55.3781, lng: -3.4360 },
  { name: "Germany", code: "DE", channels: 156, lat: 51.1657, lng: 10.4515 },
  { name: "France", code: "FR", channels: 143, lat: 46.2276, lng: 2.2137 },
  { name: "Japan", code: "JP", channels: 198, lat: 36.2048, lng: 138.2529 },
  { name: "Brazil", code: "BR", channels: 124, lat: -14.2350, lng: -51.9253 },
  { name: "India", code: "IN", channels: 267, lat: 20.5937, lng: 78.9629 },
  { name: "Russia", code: "RU", channels: 178, lat: 61.5240, lng: 105.3188 },
  { name: "China", code: "CN", channels: 289, lat: 35.8617, lng: 104.1954 },
  { name: "Australia", code: "AU", channels: 98, lat: -25.2744, lng: 133.7751 },
  { name: "Canada", code: "CA", channels: 134, lat: 56.1304, lng: -106.3468 },
  { name: "Mexico", code: "MX", channels: 112, lat: 23.6345, lng: -102.5528 },
  { name: "Italy", code: "IT", channels: 145, lat: 41.8719, lng: 12.5674 },
  { name: "Spain", code: "ES", channels: 138, lat: 40.4637, lng: -3.7492 },
  { name: "South Korea", code: "KR", channels: 167, lat: 35.9078, lng: 127.7669 },
  { name: "Turkey", code: "TR", channels: 156, lat: 38.9637, lng: 35.2433 },
  { name: "Poland", code: "PL", channels: 89, lat: 51.9194, lng: 19.1451 },
  { name: "Netherlands", code: "NL", channels: 76, lat: 52.1326, lng: 5.2913 },
  { name: "Saudi Arabia", code: "SA", channels: 87, lat: 23.8859, lng: 45.0792 },
  { name: "Argentina", code: "AR", channels: 94, lat: -38.4161, lng: -63.6167 },
  { name: "South Africa", code: "ZA", channels: 67, lat: -30.5595, lng: 22.9375 },
  { name: "Egypt", code: "EG", channels: 78, lat: 26.8206, lng: 30.8025 },
  { name: "Nigeria", code: "NG", channels: 54, lat: 9.0820, lng: 8.6753 },
  { name: "Thailand", code: "TH", channels: 82, lat: 15.8700, lng: 100.9925 },
  { name: "Indonesia", code: "ID", channels: 96, lat: -0.7893, lng: 113.9213 },
  { name: "Vietnam", code: "VN", channels: 64, lat: 14.0583, lng: 108.2772 },
  { name: "Philippines", code: "PH", channels: 58, lat: 12.8797, lng: 121.7740 },
  { name: "Sweden", code: "SE", channels: 45, lat: 60.1282, lng: 18.6435 },
  { name: "Norway", code: "NO", channels: 38, lat: 60.4720, lng: 8.4689 },
  { name: "Finland", code: "FI", channels: 32, lat: 61.9241, lng: 25.7482 },
  { name: "Ukraine", code: "UA", channels: 112, lat: 48.3794, lng: 31.1656 },
  { name: "Portugal", code: "PT", channels: 56, lat: 39.3999, lng: -8.2245 },
  { name: "Greece", code: "GR", channels: 48, lat: 39.0742, lng: 21.8243 },
  { name: "Czech Republic", code: "CZ", channels: 42, lat: 49.8175, lng: 15.4730 },
  { name: "Romania", code: "RO", channels: 67, lat: 45.9432, lng: 24.9668 },
  { name: "Belgium", code: "BE", channels: 34, lat: 50.5039, lng: 4.4699 },
  { name: "Austria", code: "AT", channels: 38, lat: 47.5162, lng: 14.5501 },
  { name: "Switzerland", code: "CH", channels: 42, lat: 46.8182, lng: 8.2275 },
  { name: "Israel", code: "IL", channels: 54, lat: 31.0461, lng: 34.8516 },
  { name: "UAE", code: "AE", channels: 67, lat: 23.4241, lng: 53.8478 },
  { name: "Malaysia", code: "MY", channels: 45, lat: 4.2105, lng: 101.9758 },
  { name: "Singapore", code: "SG", channels: 28, lat: 1.3521, lng: 103.8198 },
  { name: "New Zealand", code: "NZ", channels: 34, lat: -40.9006, lng: 174.8860 },
  { name: "Ireland", code: "IE", channels: 32, lat: 53.1424, lng: -7.6921 },
  { name: "Denmark", code: "DK", channels: 36, lat: 56.2639, lng: 9.5018 },
  { name: "Hungary", code: "HU", channels: 45, lat: 47.1625, lng: 19.5033 },
  { name: "Chile", code: "CL", channels: 56, lat: -35.6751, lng: -71.5430 },
  { name: "Colombia", code: "CO", channels: 62, lat: 4.5709, lng: -74.2973 },
  { name: "Peru", code: "PE", channels: 48, lat: -9.1900, lng: -75.0152 },
  { name: "Pakistan", code: "PK", channels: 87, lat: 30.3753, lng: 69.3451 },
];

export const getMarkerColor = (channels: number): string => {
  if (channels >= 200) return '#00ffcc';
  if (channels >= 150) return '#00e6b8';
  if (channels >= 100) return '#00cca3';
  if (channels >= 50) return '#00b38f';
  return '#00997a';
};

export const getMarkerSize = (channels: number): number => {
  if (channels >= 200) return 0.08;
  if (channels >= 150) return 0.065;
  if (channels >= 100) return 0.055;
  if (channels >= 50) return 0.045;
  return 0.035;
};
