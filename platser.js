
/* Platser för jordglobsspelet.
   Varje plats har:
     namn  – plats som visas för eleven
     tips  – land eller område
     lat   – latitud (norr är positivt)
     lon   – longitud (öst är positivt)

   Platserna är grupperade efter världsdel.
*/

var PLATSER = [

  // ==========================================
  // EUROPA
  // ==========================================

  { namn: 'Stockholm',       tips: 'Sverige',          lat: 59.33, lon:  18.07 },
  { namn: 'Oslo',             tips: 'Norge',            lat: 59.91, lon:  10.75 },
  { namn: 'Köpenhamn',       tips: 'Danmark',          lat: 55.68, lon:  12.57 },
  { namn: 'Helsingfors',     tips: 'Finland',          lat: 60.17, lon:  24.94 },
  { namn: 'Reykjavik',       tips: 'Island',           lat: 64.15, lon: -21.94 },
  { namn: 'Tallinn',         tips: 'Estland',          lat: 59.44, lon:  24.75 },
  { namn: 'Riga',            tips: 'Lettland',         lat: 56.95, lon:  24.11 },
  { namn: 'Vilnius',         tips: 'Litauen',          lat: 54.69, lon:  25.28 },
  { namn: 'Warszawa',        tips: 'Polen',            lat: 52.23, lon:  21.01 },
  { namn: 'Berlin',          tips: 'Tyskland',         lat: 52.52, lon:  13.40 },
  { namn: 'Paris',           tips: 'Frankrike',        lat: 48.86, lon:   2.35 },
  { namn: 'London',          tips: 'Storbritannien',   lat: 51.51, lon:  -0.13 },
  { namn: 'Dublin',          tips: 'Irland',           lat: 53.35, lon:  -6.26 },
  { namn: 'Bryssel',         tips: 'Belgien',          lat: 50.85, lon:   4.35 },
  { namn: 'Amsterdam',       tips: 'Nederländerna',    lat: 52.37, lon:   4.90 },
  { namn: 'Luxemburg',       tips: 'Luxemburg',        lat: 49.61, lon:   6.13 },
  { namn: 'Bern',            tips: 'Schweiz',          lat: 46.95, lon:   7.45 },
  { namn: 'Wien',            tips: 'Österrike',        lat: 48.21, lon:  16.37 },
  { namn: 'Prag',            tips: 'Tjeckien',         lat: 50.08, lon:  14.44 },
  /*{ namn: 'Bratislava',      tips: 'Slovakien',        lat: 48.15, lon:  17.11 },*/
  { namn: 'Budapest',        tips: 'Ungern',           lat: 47.50, lon:  19.04 },
  /*{ namn: 'Bukarest',        tips: 'Rumänien',         lat: 44.43, lon:  26.10 },*/
  /*{ namn: 'Sofia',           tips: 'Bulgarien',        lat: 42.70, lon:  23.32 },*/
  { namn: 'Aten',            tips: 'Grekland',         lat: 37.98, lon:  23.73 },
  { namn: 'Rom',             tips: 'Italien',          lat: 41.90, lon:  12.50 },
  { namn: 'Madrid',          tips: 'Spanien',          lat: 40.42, lon:  -3.70 },
  { namn: 'Lissabon',        tips: 'Portugal',         lat: 38.72, lon:  -9.14 },
  { namn: 'Zagreb',          tips: 'Kroatien',         lat: 45.81, lon:  15.98 },
  { namn: 'Belgrad',         tips: 'Serbien',          lat: 44.79, lon:  20.45 },
  { namn: 'Sarajevo',        tips: 'Bosnien-Hercegovina', lat: 43.86, lon: 18.41 },
  /*{ namn: 'Skopje',          tips: 'Nordmakedonien',   lat: 41.99, lon:  21.43 },*/
  /*{ namn: 'Tirana',          tips: 'Albanien',         lat: 41.33, lon:  19.82 },*/
  /*{ namn: 'Chișinău',        tips: 'Moldavien',        lat: 47.01, lon:  28.86 },*/
  { namn: 'Moskva',          tips: 'Ryssland',         lat: 55.76, lon:  37.62 },
  { namn: 'Kyjiv',            tips: 'Ukraina',          lat: 50.45, lon:  30.52 },
  { namn: 'Minsk',           tips: 'Belarus',          lat: 53.90, lon:  27.57 },

  // ==========================================
  // ASIEN
  // ==========================================
   /*

  { namn: 'Tokyo',           tips: 'Japan',            lat: 35.68, lon: 139.69 },
  { namn: 'Peking',          tips: 'Kina',             lat: 39.90, lon: 116.41 },
  { namn: 'Seoul',           tips: 'Sydkorea',         lat: 37.57, lon: 126.98 },
  { namn: 'Pyongyang',       tips: 'Nordkorea',        lat: 39.04, lon: 125.76 },
  { namn: 'Ulaanbaatar',     tips: 'Mongoliet',        lat: 47.92, lon: 106.92 },
  { namn: 'Taipei',          tips: 'Taiwan',           lat: 25.03, lon: 121.57 },
  { namn: 'Hanoi',           tips: 'Vietnam',          lat: 21.03, lon: 105.85 },
  { namn: 'Bangkok',         tips: 'Thailand',         lat: 13.76, lon: 100.50 },
  { namn: 'Phnom Penh',      tips: 'Kambodja',         lat: 11.56, lon: 104.93 },
  { namn: 'Vientiane',       tips: 'Laos',             lat: 17.98, lon: 102.63 },
  { namn: 'Manila',          tips: 'Filippinerna',     lat: 14.60, lon: 120.98 },
  { namn: 'Kuala Lumpur',    tips: 'Malaysia',         lat:  3.14, lon: 101.69 },
  { namn: 'Singapore',       tips: 'Singapore',        lat:  1.35, lon: 103.82 },
  { namn: 'Jakarta',         tips: 'Indonesien',       lat: -6.21, lon: 106.85 },
  { namn: 'Dili',            tips: 'Östtimor',         lat: -8.56, lon: 125.57 },
  { namn: 'Naypyidaw',       tips: 'Myanmar',          lat: 19.75, lon:  96.10 },
  { namn: 'Dhaka',            tips: 'Bangladesh',       lat: 23.81, lon:  90.41 },
  { namn: 'Katmandu',        tips: 'Nepal',            lat: 27.72, lon:  85.32 },
  { namn: 'Thimphu',         tips: 'Bhutan',           lat: 27.47, lon:  89.64 },
  { namn: 'New Delhi',       tips: 'Indien',           lat: 28.61, lon:  77.21 },
  { namn: 'Islamabad',       tips: 'Pakistan',         lat: 33.69, lon:  73.06 },
  { namn: 'Kabul',           tips: 'Afghanistan',      lat: 34.53, lon:  69.17 },
  { namn: 'Teheran',         tips: 'Iran',             lat: 35.69, lon:  51.39 },
  { namn: 'Bagdad',          tips: 'Irak',             lat: 33.31, lon:  44.37 },
  { namn: 'Riyadh',          tips: 'Saudiarabien',     lat: 24.71, lon:  46.68 },
  { namn: 'Abu Dhabi',       tips: 'Förenade Arabemiraten', lat: 24.45, lon: 54.65 },
  { namn: 'Muskat',          tips: 'Oman',             lat: 23.59, lon:  58.54 },
  { namn: 'Sanaa',           tips: 'Jemen',            lat: 15.37, lon:  44.19 },
  { namn: 'Amman',           tips: 'Jordanien',        lat: 31.95, lon:  35.93 },
  { namn: 'Beirut',          tips: 'Libanon',          lat: 33.89, lon:  35.50 },
  { namn: 'Damaskus',        tips: 'Syrien',           lat: 33.51, lon:  36.29 },
  { namn: 'Ankara',          tips: 'Turkiet',          lat: 39.93, lon:  32.86 },
  { namn: 'Tbilisi',         tips: 'Georgien',         lat: 41.72, lon:  44.79 },
  { namn: 'Jerevan',         tips: 'Armenien',         lat: 40.18, lon:  44.51 },
  { namn: 'Baku',            tips: 'Azerbajdzjan',     lat: 40.41, lon:  49.87 },
  { namn: 'Astana',          tips: 'Kazakstan',        lat: 51.17, lon:  71.43 },
  { namn: 'Tasjkent',        tips: 'Uzbekistan',       lat: 41.30, lon:  69.24 },
  { namn: 'Bishkek',         tips: 'Kirgizistan',      lat: 42.87, lon:  74.59 },
  { namn: 'Dusjanbe',        tips: 'Tadzjikistan',     lat: 38.56, lon:  68.77 },
  { namn: 'Ashgabat',        tips: 'Turkmenistan',     lat: 37.96, lon:  58.33 },

  // ==========================================
  // AFRIKA
  // ==========================================

  { namn: 'Kairo',           tips: 'Egypten',          lat: 30.04, lon:  31.24 },
  { namn: 'Tripoli',         tips: 'Libyen',           lat: 32.89, lon:  13.19 },
  { namn: 'Tunis',           tips: 'Tunisien',         lat: 36.81, lon:  10.18 },
  { namn: 'Alger',           tips: 'Algeriet',         lat: 36.75, lon:   3.06 },
  { namn: 'Rabat',           tips: 'Marocko',          lat: 34.02, lon:  -6.84 },
  { namn: 'Nouakchott',      tips: 'Mauretanien',      lat: 18.07, lon: -15.98 },
  { namn: 'Dakar',           tips: 'Senegal',          lat: 14.72, lon: -17.47 },
  { namn: 'Bamako',          tips: 'Mali',             lat: 12.64, lon:  -8.00 },
  { namn: 'Niamey',          tips: 'Niger',            lat: 13.51, lon:   2.13 },
  { namn: "N'Djamena",       tips: 'Tchad',            lat: 12.13, lon:  15.05 },
  { namn: 'Abuja',           tips: 'Nigeria',          lat:  9.06, lon:   7.49 },
  { namn: 'Accra',           tips: 'Ghana',            lat:  5.56, lon:  -0.20 },
  { namn: 'Yamoussoukro',    tips: 'Elfenbenskusten',  lat:  6.82, lon:  -5.28 },
  { namn: 'Ouagadougou',     tips: 'Burkina Faso',     lat: 12.37, lon:  -1.52 },
  { namn: 'Lomé',            tips: 'Togo',             lat:  6.13, lon:   1.22 },
  { namn: 'Porto-Novo',      tips: 'Benin',            lat:  6.50, lon:   2.63 },
  { namn: 'Yaoundé',         tips: 'Kamerun',          lat:  3.87, lon:  11.52 },
  { namn: 'Bangui',          tips: 'Centralafrikanska republiken', lat: 4.36, lon: 18.56 },
  { namn: 'Malabo',          tips: 'Ekvatorialguinea', lat:  3.75, lon:   8.78 },
  { namn: 'Libreville',      tips: 'Gabon',            lat:  0.39, lon:   9.45 },
  { namn: 'Brazzaville',     tips: 'Republiken Kongo', lat: -4.27, lon:  15.28 },
  { namn: 'Kinshasa',        tips: 'Kongo-Kinshasa',   lat: -4.32, lon:  15.31 },
  { namn: 'Kampala',         tips: 'Uganda',           lat:  0.35, lon:  32.58 },
  { namn: 'Nairobi',         tips: 'Kenya',            lat: -1.29, lon:  36.82 },
  { namn: 'Dodoma',          tips: 'Tanzania',         lat: -6.16, lon:  35.75 },
  { namn: 'Kigali',          tips: 'Rwanda',           lat: -1.94, lon:  30.06 },
  { namn: 'Bujumbura',       tips: 'Burundi',          lat: -3.38, lon:  29.36 },
  { namn: 'Addis Abeba',     tips: 'Etiopien',         lat:  9.03, lon:  38.74 },
  { namn: 'Asmara',          tips: 'Eritrea',          lat: 15.34, lon:  38.93 },
  { namn: 'Mogadishu',       tips: 'Somalia',          lat:  2.05, lon:  45.32 },
  { namn: 'Juba',            tips: 'Sydsudan',         lat:  4.85, lon:  31.58 },
  { namn: 'Khartoum',        tips: 'Sudan',            lat: 15.50, lon:  32.56 },
  { namn: 'Pretoria',        tips: 'Sydafrika',        lat: -25.75, lon:  28.19 },
  { namn: 'Mbabane',         tips: 'Eswatini',         lat: -26.32, lon:  31.14 },
  { namn: 'Maseru',          tips: 'Lesotho',          lat: -29.31, lon:  27.48 },
  { namn: 'Gaborone',        tips: 'Botswana',         lat: -24.65, lon:  25.91 },
  { namn: 'Windhoek',        tips: 'Namibia',          lat: -22.56, lon:  17.08 },
  { namn: 'Lusaka',          tips: 'Zambia',           lat: -15.39, lon:  28.32 },
  { namn: 'Harare',          tips: 'Zimbabwe',         lat: -17.83, lon:  31.05 },
  { namn: 'Maputo',          tips: 'Moçambique',       lat: -25.97, lon:  32.57 },
  { namn: 'Antananarivo',    tips: 'Madagaskar',       lat: -18.88, lon:  47.51 },
  { namn: 'Lilongwe',        tips: 'Malawi',           lat: -13.97, lon:  33.79 },

  // ==========================================
  // NORD- OCH CENTRALAMERIKA
  // ==========================================

  { namn: 'Ottawa',          tips: 'Kanada',           lat: 45.42, lon: -75.70 },
  { namn: 'Washington D.C.', tips: 'USA',              lat: 38.91, lon: -77.04 },
  { namn: 'Mexico City',     tips: 'Mexiko',           lat: 19.43, lon: -99.13 },
  { namn: 'Belmopan',        tips: 'Belize',           lat: 17.25, lon: -88.77 },
  { namn: 'Guatemala City',  tips: 'Guatemala',        lat: 14.63, lon: -90.51 },
  { namn: 'Tegucigalpa',     tips: 'Honduras',         lat: 14.07, lon: -87.19 },
  { namn: 'San Salvador',   tips: 'El Salvador',      lat: 13.69, lon: -89.19 },
  { namn: 'Managua',         tips: 'Nicaragua',        lat: 12.11, lon: -86.24 },
  { namn: 'San José',        tips: 'Costa Rica',       lat:  9.93, lon: -84.08 },
  { namn: 'Panama City',     tips: 'Panama',           lat:  8.98, lon: -79.52 },
  { namn: 'Havanna',         tips: 'Kuba',             lat: 23.11, lon: -82.37 },
  { namn: 'Kingston',        tips: 'Jamaica',          lat: 17.97, lon: -76.79 },
  { namn: 'Santo Domingo',   tips: 'Dominikanska republiken', lat: 18.49, lon: -69.93 },
  { namn: 'Port-au-Prince',  tips: 'Haiti',            lat: 18.54, lon: -72.34 },
  { namn: 'Nassau',          tips: 'Bahamas',          lat: 25.05, lon: -77.35 },

  // ==========================================
  // SYDAMERIKA
  // ==========================================

  { namn: 'Brasília',        tips: 'Brasilien',        lat: -15.79, lon: -47.88 },
  { namn: 'Buenos Aires',    tips: 'Argentina',        lat: -34.60, lon: -58.38 },
  { namn: 'Santiago',        tips: 'Chile',            lat: -33.45, lon: -70.67 },
  { namn: 'Lima',            tips: 'Peru',             lat: -12.05, lon: -77.04 },
  { namn: 'La Paz',          tips: 'Bolivia',          lat: -16.50, lon: -68.15 },
  { namn: 'Sucre',           tips: 'Bolivia',          lat: -19.03, lon: -65.26 },
  { namn: 'Asunción',        tips: 'Paraguay',         lat: -25.26, lon: -57.58 },
  { namn: 'Montevideo',      tips: 'Uruguay',          lat: -34.90, lon: -56.19 },
  { namn: 'Bogotá',           tips: 'Colombia',         lat:  4.71, lon: -74.07 },
  { namn: 'Caracas',         tips: 'Venezuela',        lat: 10.48, lon: -66.90 },
  { namn: 'Quito',            tips: 'Ecuador',          lat: -0.18, lon: -78.47 },
  { namn: 'Georgetown',      tips: 'Guyana',           lat:  6.80, lon: -58.16 },
  { namn: 'Paramaribo',      tips: 'Surinam',          lat:  5.85, lon: -55.17 },

  // ==========================================
  // OCEANIEN
  // ==========================================

  { namn: 'Canberra',        tips: 'Australien',       lat: -35.28, lon: 149.13 },
  { namn: 'Wellington',      tips: 'Nya Zeeland',      lat: -41.29, lon: 174.78 },
  { namn: 'Port Moresby',    tips: 'Papua Nya Guinea', lat:  -9.44, lon: 147.18 },
  { namn: 'Suva',            tips: 'Fiji',             lat: -18.14, lon: 178.44 },
  { namn: 'Honiara',         tips: 'Salomonöarna',     lat:  -9.43, lon: 159.95 },
  { namn: 'Port Vila',       tips: 'Vanuatu',          lat: -17.73, lon: 168.32 },
  { namn: 'Apia',            tips: 'Samoa',            lat: -13.83, lon: -171.77 },
  { namn: 'Nukuʻalofa',      tips: 'Tonga',            lat: -21.21, lon: -175.15 },
  { namn: 'Tarawa',          tips: 'Kiribati',         lat:   1.45, lon:  173.00 },
  { namn: 'Palikir',         tips: 'Mikronesiska federationen', lat: 6.92, lon: 158.16 }
  */

];
