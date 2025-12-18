export interface Country {
  name: string;
  url: string;
  lat: number;
  lng: number;
  color: string;
  flag: string;
}

export interface Channel {
  name: string;
  url: string;
  liveViews: number;
}

export const countries: Country[] = [
  { name: "Afghanistan", url: "https://iptv-org.github.io/iptv/countries/af.m3u", lat: 33.93911, lng: 67.709953, color: '#1a5276', flag: 'https://flagcdn.com/w80/af.png' },
  { name: "Albania", url: "https://iptv-org.github.io/iptv/countries/al.m3u", lat: 41.153332, lng: 20.168331, color: '#27ae60', flag: 'https://flagcdn.com/w80/al.png' },
  { name: "Algeria", url: "https://iptv-org.github.io/iptv/countries/dz.m3u", lat: 28.033886, lng: 1.659626, color: '#2ecc71', flag: 'https://flagcdn.com/w80/dz.png' },
  { name: "Andorra", url: "https://iptv-org.github.io/iptv/countries/ad.m3u", lat: 42.506285, lng: 1.521801, color: '#e74c3c', flag: 'https://flagcdn.com/w80/ad.png' },
  { name: "Angola", url: "https://iptv-org.github.io/iptv/countries/ao.m3u", lat: -11.202692, lng: 17.873887, color: '#f39c12', flag: 'https://flagcdn.com/w80/ao.png' },
  { name: "Argentina", url: "https://iptv-org.github.io/iptv/countries/ar.m3u", lat: -38.416097, lng: -63.616672, color: '#3498db', flag: 'https://flagcdn.com/w80/ar.png' },
  { name: "Armenia", url: "https://iptv-org.github.io/iptv/countries/am.m3u", lat: 40.069099, lng: 45.038189, color: '#d35400', flag: 'https://flagcdn.com/w80/am.png' },
  { name: "Australia", url: "https://iptv-org.github.io/iptv/countries/au.m3u", lat: -25.274398, lng: 133.775136, color: '#e67e22', flag: 'https://flagcdn.com/w80/au.png' },
  { name: "Austria", url: "https://iptv-org.github.io/iptv/countries/at.m3u", lat: 47.516231, lng: 14.550072, color: '#16a085', flag: 'https://flagcdn.com/w80/at.png' },
  { name: "Azerbaijan", url: "https://iptv-org.github.io/iptv/countries/az.m3u", lat: 40.143105, lng: 47.576927, color: '#c0392b', flag: 'https://flagcdn.com/w80/az.png' },
  { name: "Bahamas", url: "https://iptv-org.github.io/iptv/countries/bs.m3u", lat: 25.03428, lng: -77.39628, color: '#2980b9', flag: 'https://flagcdn.com/w80/bs.png' },
  { name: "Bahrain", url: "https://iptv-org.github.io/iptv/countries/bh.m3u", lat: 25.930414, lng: 50.637772, color: '#7f8c8d', flag: 'https://flagcdn.com/w80/bh.png' },
  { name: "Bangladesh", url: "https://iptv-org.github.io/iptv/countries/bd.m3u", lat: 23.684994, lng: 90.356331, color: '#27ae60', flag: 'https://flagcdn.com/w80/bd.png' },
  { name: "Belarus", url: "https://iptv-org.github.io/iptv/countries/by.m3u", lat: 53.709807, lng: 27.953389, color: '#e74c3c', flag: 'https://flagcdn.com/w80/by.png' },
  { name: "Belgium", url: "https://iptv-org.github.io/iptv/countries/be.m3u", lat: 50.503887, lng: 4.469936, color: '#3498db', flag: 'https://flagcdn.com/w80/be.png' },
  { name: "Bolivia", url: "https://iptv-org.github.io/iptv/countries/bo.m3u", lat: -16.290154, lng: -63.588653, color: '#e67e22', flag: 'https://flagcdn.com/w80/bo.png' },
  { name: "Bosnia and Herzegovina", url: "https://iptv-org.github.io/iptv/countries/ba.m3u", lat: 43.915886, lng: 17.679076, color: '#3498db', flag: 'https://flagcdn.com/w80/ba.png' },
  { name: "Brazil", url: "https://iptv-org.github.io/iptv/countries/br.m3u", lat: -14.235004, lng: -51.92528, color: '#27ae60', flag: 'https://flagcdn.com/w80/br.png' },
  { name: "Bulgaria", url: "https://iptv-org.github.io/iptv/countries/bg.m3u", lat: 42.733883, lng: 25.48583, color: '#3498db', flag: 'https://flagcdn.com/w80/bg.png' },
  { name: "Cambodia", url: "https://iptv-org.github.io/iptv/countries/kh.m3u", lat: 12.565679, lng: 104.990963, color: '#2ecc71', flag: 'https://flagcdn.com/w80/kh.png' },
  { name: "Cameroon", url: "https://iptv-org.github.io/iptv/countries/cm.m3u", lat: 7.369722, lng: 12.354722, color: '#1a5276', flag: 'https://flagcdn.com/w80/cm.png' },
  { name: "Canada", url: "https://iptv-org.github.io/iptv/countries/ca.m3u", lat: 56.130366, lng: -106.346771, color: '#e74c3c', flag: 'https://flagcdn.com/w80/ca.png' },
  { name: "Chile", url: "https://iptv-org.github.io/iptv/countries/cl.m3u", lat: -35.675147, lng: -71.542969, color: '#3498db', flag: 'https://flagcdn.com/w80/cl.png' },
  { name: "China", url: "https://iptv-org.github.io/iptv/countries/cn.m3u", lat: 35.86166, lng: 104.195397, color: '#e74c3c', flag: 'https://flagcdn.com/w80/cn.png' },
  { name: "Colombia", url: "https://iptv-org.github.io/iptv/countries/co.m3u", lat: 4.570868, lng: -74.297333, color: '#f1c40f', flag: 'https://flagcdn.com/w80/co.png' },
  { name: "Costa Rica", url: "https://iptv-org.github.io/iptv/countries/cr.m3u", lat: 9.748917, lng: -83.753428, color: '#e67e22', flag: 'https://flagcdn.com/w80/cr.png' },
  { name: "Croatia", url: "https://iptv-org.github.io/iptv/countries/hr.m3u", lat: 45.1, lng: 15.2, color: '#3498db', flag: 'https://flagcdn.com/w80/hr.png' },
  { name: "Cuba", url: "https://iptv-org.github.io/iptv/countries/cu.m3u", lat: 21.521757, lng: -77.781167, color: '#e74c3c', flag: 'https://flagcdn.com/w80/cu.png' },
  { name: "Cyprus", url: "https://iptv-org.github.io/iptv/countries/cy.m3u", lat: 35.126413, lng: 33.429859, color: '#f39c12', flag: 'https://flagcdn.com/w80/cy.png' },
  { name: "Czech Republic", url: "https://iptv-org.github.io/iptv/countries/cz.m3u", lat: 49.817492, lng: 15.472962, color: '#16a085', flag: 'https://flagcdn.com/w80/cz.png' },
  { name: "Denmark", url: "https://iptv-org.github.io/iptv/countries/dk.m3u", lat: 56.26392, lng: 9.501785, color: '#c0392b', flag: 'https://flagcdn.com/w80/dk.png' },
  { name: "Dominican Republic", url: "https://iptv-org.github.io/iptv/countries/do.m3u", lat: 18.735693, lng: -70.162651, color: '#e74c3c', flag: 'https://flagcdn.com/w80/do.png' },
  { name: "Ecuador", url: "https://iptv-org.github.io/iptv/countries/ec.m3u", lat: -1.831239, lng: -78.183406, color: '#f1c40f', flag: 'https://flagcdn.com/w80/ec.png' },
  { name: "Egypt", url: "https://iptv-org.github.io/iptv/countries/eg.m3u", lat: 26.820553, lng: 30.802498, color: '#1a5276', flag: 'https://flagcdn.com/w80/eg.png' },
  { name: "Estonia", url: "https://iptv-org.github.io/iptv/countries/ee.m3u", lat: 58.595272, lng: 25.013607, color: '#9b59b6', flag: 'https://flagcdn.com/w80/ee.png' },
  { name: "Ethiopia", url: "https://iptv-org.github.io/iptv/countries/et.m3u", lat: 9.145, lng: 40.489673, color: '#1a5276', flag: 'https://flagcdn.com/w80/et.png' },
  { name: "Finland", url: "https://iptv-org.github.io/iptv/countries/fi.m3u", lat: 61.92411, lng: 25.748151, color: '#3498db', flag: 'https://flagcdn.com/w80/fi.png' },
  { name: "France", url: "https://iptv-org.github.io/iptv/countries/fr.m3u", lat: 46.227638, lng: 2.213749, color: '#c0392b', flag: 'https://flagcdn.com/w80/fr.png' },
  { name: "Georgia", url: "https://iptv-org.github.io/iptv/countries/ge.m3u", lat: 42.315407, lng: 43.356892, color: '#3498db', flag: 'https://flagcdn.com/w80/ge.png' },
  { name: "Germany", url: "https://iptv-org.github.io/iptv/countries/de.m3u", lat: 51.165691, lng: 10.451526, color: '#1a5276', flag: 'https://flagcdn.com/w80/de.png' },
  { name: "Ghana", url: "https://iptv-org.github.io/iptv/countries/gh.m3u", lat: 7.946527, lng: -1.023194, color: '#f1c40f', flag: 'https://flagcdn.com/w80/gh.png' },
  { name: "Greece", url: "https://iptv-org.github.io/iptv/countries/gr.m3u", lat: 39.074208, lng: 21.824312, color: '#2ecc71', flag: 'https://flagcdn.com/w80/gr.png' },
  { name: "Guatemala", url: "https://iptv-org.github.io/iptv/countries/gt.m3u", lat: 15.783471, lng: -90.230759, color: '#3498db', flag: 'https://flagcdn.com/w80/gt.png' },
  { name: "Honduras", url: "https://iptv-org.github.io/iptv/countries/hn.m3u", lat: 15.199999, lng: -86.241905, color: '#3498db', flag: 'https://flagcdn.com/w80/hn.png' },
  { name: "Hungary", url: "https://iptv-org.github.io/iptv/countries/hu.m3u", lat: 47.162494, lng: 19.503304, color: '#e74c3c', flag: 'https://flagcdn.com/w80/hu.png' },
  { name: "Iceland", url: "https://iptv-org.github.io/iptv/countries/is.m3u", lat: 64.963051, lng: -19.020835, color: '#2ecc71', flag: 'https://flagcdn.com/w80/is.png' },
  { name: "India", url: "https://iptv-org.github.io/iptv/countries/in.m3u", lat: 20.593684, lng: 78.96288, color: '#f39c12', flag: 'https://flagcdn.com/w80/in.png' },
  { name: "Indonesia", url: "https://iptv-org.github.io/iptv/countries/id.m3u", lat: -0.789275, lng: 113.921327, color: '#1a5276', flag: 'https://flagcdn.com/w80/id.png' },
  { name: "Iran", url: "https://iptv-org.github.io/iptv/countries/ir.m3u", lat: 32.427908, lng: 53.688046, color: '#27ae60', flag: 'https://flagcdn.com/w80/ir.png' },
  { name: "Iraq", url: "https://iptv-org.github.io/iptv/countries/iq.m3u", lat: 33.223191, lng: 43.679291, color: '#e74c3c', flag: 'https://flagcdn.com/w80/iq.png' },
  { name: "Ireland", url: "https://iptv-org.github.io/iptv/countries/ie.m3u", lat: 53.41291, lng: -8.24389, color: '#27ae60', flag: 'https://flagcdn.com/w80/ie.png' },
  { name: "Israel", url: "https://iptv-org.github.io/iptv/countries/il.m3u", lat: 31.046051, lng: 34.851612, color: '#3498db', flag: 'https://flagcdn.com/w80/il.png' },
  { name: "Italy", url: "https://iptv-org.github.io/iptv/countries/it.m3u", lat: 41.87194, lng: 12.56738, color: '#16a085', flag: 'https://flagcdn.com/w80/it.png' },
  { name: "Japan", url: "https://iptv-org.github.io/iptv/countries/jp.m3u", lat: 36.204824, lng: 138.252924, color: '#e74c3c', flag: 'https://flagcdn.com/w80/jp.png' },
  { name: "Jordan", url: "https://iptv-org.github.io/iptv/countries/jo.m3u", lat: 30.585164, lng: 36.238414, color: '#1a5276', flag: 'https://flagcdn.com/w80/jo.png' },
  { name: "Kazakhstan", url: "https://iptv-org.github.io/iptv/countries/kz.m3u", lat: 48.019573, lng: 66.923684, color: '#3498db', flag: 'https://flagcdn.com/w80/kz.png' },
  { name: "Kenya", url: "https://iptv-org.github.io/iptv/countries/ke.m3u", lat: -0.023559, lng: 37.906193, color: '#e74c3c', flag: 'https://flagcdn.com/w80/ke.png' },
  { name: "Kuwait", url: "https://iptv-org.github.io/iptv/countries/kw.m3u", lat: 29.31166, lng: 47.481766, color: '#27ae60', flag: 'https://flagcdn.com/w80/kw.png' },
  { name: "Latvia", url: "https://iptv-org.github.io/iptv/countries/lv.m3u", lat: 56.879635, lng: 24.603189, color: '#9b59b6', flag: 'https://flagcdn.com/w80/lv.png' },
  { name: "Lebanon", url: "https://iptv-org.github.io/iptv/countries/lb.m3u", lat: 33.854721, lng: 35.862285, color: '#e74c3c', flag: 'https://flagcdn.com/w80/lb.png' },
  { name: "Lithuania", url: "https://iptv-org.github.io/iptv/countries/lt.m3u", lat: 55.169438, lng: 23.881275, color: '#f1c40f', flag: 'https://flagcdn.com/w80/lt.png' },
  { name: "Luxembourg", url: "https://iptv-org.github.io/iptv/countries/lu.m3u", lat: 49.815273, lng: 6.129583, color: '#e74c3c', flag: 'https://flagcdn.com/w80/lu.png' },
  { name: "Malaysia", url: "https://iptv-org.github.io/iptv/countries/my.m3u", lat: 4.210484, lng: 101.975766, color: '#3498db', flag: 'https://flagcdn.com/w80/my.png' },
  { name: "Mexico", url: "https://iptv-org.github.io/iptv/countries/mx.m3u", lat: 23.634501, lng: -102.552784, color: '#27ae60', flag: 'https://flagcdn.com/w80/mx.png' },
  { name: "Morocco", url: "https://iptv-org.github.io/iptv/countries/ma.m3u", lat: 31.791702, lng: -7.09262, color: '#e74c3c', flag: 'https://flagcdn.com/w80/ma.png' },
  { name: "Netherlands", url: "https://iptv-org.github.io/iptv/countries/nl.m3u", lat: 52.132633, lng: 5.291266, color: '#f39c12', flag: 'https://flagcdn.com/w80/nl.png' },
  { name: "New Zealand", url: "https://iptv-org.github.io/iptv/countries/nz.m3u", lat: -40.900557, lng: 174.885971, color: '#1a5276', flag: 'https://flagcdn.com/w80/nz.png' },
  { name: "Nigeria", url: "https://iptv-org.github.io/iptv/countries/ng.m3u", lat: 9.081999, lng: 8.675277, color: '#27ae60', flag: 'https://flagcdn.com/w80/ng.png' },
  { name: "Norway", url: "https://iptv-org.github.io/iptv/countries/no.m3u", lat: 60.472024, lng: 8.468946, color: '#e74c3c', flag: 'https://flagcdn.com/w80/no.png' },
  { name: "Pakistan", url: "https://iptv-org.github.io/iptv/countries/pk.m3u", lat: 30.375321, lng: 69.345116, color: '#27ae60', flag: 'https://flagcdn.com/w80/pk.png' },
  { name: "Panama", url: "https://iptv-org.github.io/iptv/countries/pa.m3u", lat: 8.537981, lng: -80.782127, color: '#3498db', flag: 'https://flagcdn.com/w80/pa.png' },
  { name: "Paraguay", url: "https://iptv-org.github.io/iptv/countries/py.m3u", lat: -23.442503, lng: -58.443832, color: '#e74c3c', flag: 'https://flagcdn.com/w80/py.png' },
  { name: "Peru", url: "https://iptv-org.github.io/iptv/countries/pe.m3u", lat: -9.189967, lng: -75.015152, color: '#e74c3c', flag: 'https://flagcdn.com/w80/pe.png' },
  { name: "Philippines", url: "https://iptv-org.github.io/iptv/countries/ph.m3u", lat: 12.879721, lng: 121.774017, color: '#3498db', flag: 'https://flagcdn.com/w80/ph.png' },
  { name: "Poland", url: "https://iptv-org.github.io/iptv/countries/pl.m3u", lat: 51.919438, lng: 19.145136, color: '#e74c3c', flag: 'https://flagcdn.com/w80/pl.png' },
  { name: "Portugal", url: "https://iptv-org.github.io/iptv/countries/pt.m3u", lat: 39.399872, lng: -8.224454, color: '#27ae60', flag: 'https://flagcdn.com/w80/pt.png' },
  { name: "Qatar", url: "https://iptv-org.github.io/iptv/countries/qa.m3u", lat: 25.354826, lng: 51.183884, color: '#9b59b6', flag: 'https://flagcdn.com/w80/qa.png' },
  { name: "Romania", url: "https://iptv-org.github.io/iptv/countries/ro.m3u", lat: 45.943161, lng: 24.96676, color: '#f1c40f', flag: 'https://flagcdn.com/w80/ro.png' },
  { name: "Russia", url: "https://iptv-org.github.io/iptv/countries/ru.m3u", lat: 61.52401, lng: 105.318756, color: '#e74c3c', flag: 'https://flagcdn.com/w80/ru.png' },
  { name: "Saudi Arabia", url: "https://iptv-org.github.io/iptv/countries/sa.m3u", lat: 23.885942, lng: 45.079162, color: '#27ae60', flag: 'https://flagcdn.com/w80/sa.png' },
  { name: "Serbia", url: "https://iptv-org.github.io/iptv/countries/rs.m3u", lat: 44.016521, lng: 21.005859, color: '#e74c3c', flag: 'https://flagcdn.com/w80/rs.png' },
  { name: "Singapore", url: "https://iptv-org.github.io/iptv/countries/sg.m3u", lat: 1.352083, lng: 103.819836, color: '#e74c3c', flag: 'https://flagcdn.com/w80/sg.png' },
  { name: "Slovakia", url: "https://iptv-org.github.io/iptv/countries/sk.m3u", lat: 48.669026, lng: 19.699024, color: '#3498db', flag: 'https://flagcdn.com/w80/sk.png' },
  { name: "Slovenia", url: "https://iptv-org.github.io/iptv/countries/si.m3u", lat: 46.151241, lng: 14.995463, color: '#3498db', flag: 'https://flagcdn.com/w80/si.png' },
  { name: "South Africa", url: "https://iptv-org.github.io/iptv/countries/za.m3u", lat: -30.559482, lng: 22.937506, color: '#27ae60', flag: 'https://flagcdn.com/w80/za.png' },
  { name: "South Korea", url: "https://iptv-org.github.io/iptv/countries/kr.m3u", lat: 35.907757, lng: 127.766922, color: '#3498db', flag: 'https://flagcdn.com/w80/kr.png' },
  { name: "Spain", url: "https://iptv-org.github.io/iptv/countries/es.m3u", lat: 40.463667, lng: -3.74922, color: '#f1c40f', flag: 'https://flagcdn.com/w80/es.png' },
  { name: "Sweden", url: "https://iptv-org.github.io/iptv/countries/se.m3u", lat: 60.128161, lng: 18.643501, color: '#f1c40f', flag: 'https://flagcdn.com/w80/se.png' },
  { name: "Switzerland", url: "https://iptv-org.github.io/iptv/countries/ch.m3u", lat: 46.818188, lng: 8.227512, color: '#e74c3c', flag: 'https://flagcdn.com/w80/ch.png' },
  { name: "Taiwan", url: "https://iptv-org.github.io/iptv/countries/tw.m3u", lat: 23.69781, lng: 120.960515, color: '#e74c3c', flag: 'https://flagcdn.com/w80/tw.png' },
  { name: "Thailand", url: "https://iptv-org.github.io/iptv/countries/th.m3u", lat: 15.870032, lng: 100.992541, color: '#3498db', flag: 'https://flagcdn.com/w80/th.png' },
  { name: "Tunisia", url: "https://iptv-org.github.io/iptv/countries/tn.m3u", lat: 33.886917, lng: 9.537499, color: '#e74c3c', flag: 'https://flagcdn.com/w80/tn.png' },
  { name: "Turkey", url: "https://iptv-org.github.io/iptv/countries/tr.m3u", lat: 38.963745, lng: 35.243322, color: '#e74c3c', flag: 'https://flagcdn.com/w80/tr.png' },
  { name: "Ukraine", url: "https://iptv-org.github.io/iptv/countries/ua.m3u", lat: 48.379433, lng: 31.16558, color: '#f1c40f', flag: 'https://flagcdn.com/w80/ua.png' },
  { name: "United Arab Emirates", url: "https://iptv-org.github.io/iptv/countries/ae.m3u", lat: 23.424076, lng: 53.847818, color: '#27ae60', flag: 'https://flagcdn.com/w80/ae.png' },
  { name: "United Kingdom", url: "https://iptv-org.github.io/iptv/countries/uk.m3u", lat: 55.378051, lng: -3.435973, color: '#e74c3c', flag: 'https://flagcdn.com/w80/gb.png' },
  { name: "United States", url: "https://iptv-org.github.io/iptv/countries/us.m3u", lat: 37.09024, lng: -95.712891, color: '#3498db', flag: 'https://flagcdn.com/w80/us.png' },
  { name: "Uruguay", url: "https://iptv-org.github.io/iptv/countries/uy.m3u", lat: -32.522779, lng: -55.765835, color: '#3498db', flag: 'https://flagcdn.com/w80/uy.png' },
  { name: "Venezuela", url: "https://iptv-org.github.io/iptv/countries/ve.m3u", lat: 6.42375, lng: -66.58973, color: '#f1c40f', flag: 'https://flagcdn.com/w80/ve.png' },
  { name: "Vietnam", url: "https://iptv-org.github.io/iptv/countries/vn.m3u", lat: 14.058324, lng: 108.277199, color: '#e74c3c', flag: 'https://flagcdn.com/w80/vn.png' },
];

export const getMarkerColor = (color: string): string => {
  return color || '#00ffcc';
};

export const getMarkerSize = (): number => {
  return 0.02; // Smaller fixed size for all markers
};

// Parse M3U playlist content
export const parseM3U = (content: string): Channel[] => {
  const lines = content.split('\n');
  const channels: Channel[] = [];
  let currentName = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('#EXTINF:')) {
      const nameMatch = line.match(/,(.+)$/);
      currentName = nameMatch ? nameMatch[1].trim() : 'Unknown Channel';
    } else if (line && !line.startsWith('#') && currentName) {
      channels.push({
        name: currentName,
        url: line,
        liveViews: Math.floor(Math.random() * 90 + 10) * 1000, // 10k-100k views
      });
      currentName = '';
    }
  }

  return channels;
};
