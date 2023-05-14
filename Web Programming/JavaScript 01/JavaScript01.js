console.log('----------------------------------------------------------')
console.log("------------------[Day 1 exercises]-----------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')

console.log("Welcome to 30DaysOfJavaScript")
let muellime = 'Muellime'
let deyisen_2 = 'Lab bali yazinda :)'
let deyisen_3 = 'Yazi'
let deyisen_4 = 'Burda sizin reklam ola biler'
console.log(muellime,deyisen_2,deyisen_3,deyisen_4)
let ad ='Hecaga'
let soyad = 'Aghayev'
let age = 'demirem'
let country = 'AZERBAIJAN'
console.log(ad)
console.log(soyad)
console.log(age)
console.log(country)
//tek sirada cap
console.log(ad,soyad,age,country)

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 2 exercises level 1]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')

let deyer =  '30 Days Of JavaScript';
console.log(deyer)
let uz= deyer.length
console.log(uz)
//toUpperCase
console.log(deyer.toUpperCase())
//toLowercase
console.log(deyer.toLowerCase())
console.log(deyer.substring(0,3))
console.log(deyer.includes('Script'))
console.log(deyer.split())
console.log(deyer.replace('JavaScript','Pythons'))
console.log(deyer.charAt(15))
console.log(deyer.charCodeAt('J'))
console.log(deyer.indexOf('a'))

let cumle = 'You cannot end a sentence with because because because is a conjunction'
console.log(cumle.indexOf('because'))
console.log(deyer.lastIndexOf('because'))
console.log(deyer.trim())
console.log(cumle.startsWith('You'))
console.log(cumle.endsWith('conjunction'))
console.log(deyer.match('a'))
console.log(deyer.repeat(2))

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 2 exercises level 2]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')


console.log('10' == 10)
let reqem = parseFloat('9.8')
console.log(reqem == 10)
let cumle2 ='I hope this course is not full of jargon'
console.log(cumle2.includes('jargon'))
console.log(Math.random()*10)
console.log((Math.random()*100)+50)
console.log(Math.random()*255)

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 3 exercises level 1]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')

let ad03= "Demirem"
let yas03 = -21
console.log(typeof(ad03))
console.log(typeof(yas03))
console.log(typeof("10")==10)
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('Tapsiriq 6')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('Dataya aid misallar')
const tarix=new Date()
console.log(tarix.getFullYear())
console.log(tarix.getMonth())
console.log(tarix.getDate())
console.log(tarix.getHours())
console.log(tarix.getMinutes())
console.log(tarix.getSeconds())

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 3 exercises level 2]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')
//ucbucaq
console.log('sahe')
console.log(20*10*0.5)
console.log('perimetr')
console.log(5+4+3)

//Tenlik
console.log('y-in qiymeti, x=10')
console.log(2*10-2)
console.log('x-in qiymeti, y=18')
console.log((18+2)/2)

 //Tenlik 2 
 console.log('dustur:m = (y2-y1)/(x2-x1)')
 console.log('(2;2),(6;10) noqtesinde')
 console.log((10-2)/(6-2))

 //Maas meselesi
 console.log('maas:')
 console.log(40*28)

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 4 exercises level 1]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')

//Mesele 1
const yas04 = 24
if(yas04>18){
    console.log('Avtomobil idare ede bilersiniz')
}
else{
    console.log('18 yasin olanda gel')
}

//Yas muqayisesi
const yas042 = 45
const yas043 = 70
if(yas042>yas043){
    console.log('1-ci sexs qojadir')
}
else if(yas042 == yas043){
    console.log('Eyni yasdasiz')
}
else{
    console.log('2-ci sexs qojadir')
}

//2 ededin muqayisesi
let a4=4
let b4=32
if (a4>b4){
    console.log('a boyukdur')
}
else if (a4 == b4){
    console.log('a ededi b-ye beraberdir')
}
else{
    console.log('b boyukdur')
}

//cut ededin tapilmasi 1ci hal
let a42=68
if(a42%2==0){
    console.log('a ededi cutdur')
}
else{
    console.log('a ededi tekdir')
}

//cut ededin tapilmsi 2ci hal

let a43 =79
if (a43%2==0){
    console.log('a ededi tekdir')
}
else{console.log('a ededi tekdri')}

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 4 exercises level 2]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')

//Qiymete aid mesele

 let qiymet4=90
 
 if (qiymet4<100 && qiymet4>=90){
    console.log('Qiymetiniz A-dir')
 }
 else if(qiymet4<=89 && qiymet4>=70){
    console.log('Qiymetiniz B-dir')
 }
 else if(qiymet4<=69 && qiymet4>=60){
    console.log('Qiymetiniz C-dir')
 }
 else if(qiymet4<=59 && qiymet4>=50){
    console.log('Qiymetiniz D-dir')
 }
 else if(qiymet4<=49 && qiymet4>=0){
    console.log('Qiymetiniz F-dir')
 }
 else {
    console.log('0-100 bal arasinda qiymet daxil edin')
 }

//ardi var yazarsan

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 4 exercises level 1]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')

//Bos massiv
let bal=[];
let basqaBal=[4,233,2,23,44]
console.log(basqaBal.length)

//1ci element 
console.log(basqaBal[0])

//orta element
console.log(basqaBal[2])

//Son element
console.log(basqaBal[4])

//Qarisiq ve uzunluq
let qarisiq=['bu string', 'olsun','bir',7,78,45,93]
console.log(qarisiq.length)
let itCompanies=['Amazon','Microsoft','IBM']
console.log(itCompanies)
console.log(qarisiq[0])
console.log(qarisiq[3])
console.log(qarisiq[6])

//Forla cap
console.log('Forla cap')
for(let i=0;i<qarisiq.length;i++){
    console.log(qarisiq[i])
}

//Forla uppetCase
for(let h=0;h<itCompanies.length;h++){
    console.log(itCompanies[h].toUpperCase())
}

//includes Sirket adi tapilmasi
console.log(itCompanies.includes('Apple'))

//sort texnikasi
let massiv=[3,23,4,1,42,4]
console.log(massiv.sort())

//Revers elemek

console.log(itCompanies.reverse())
//Kesmek
let magaza=['Apple','Meta','Akif dayinin marketi','Mehle market','Araz market']
console.log(magaza.slice(2,5))
console.log(magaza.shift())
console.log(magaza.pop(3))

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 4 exercises level 2]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')

//Siyahi elave etmek
let market=['sut','Coffee','Cay','Bal']
market.unshift("Et");
console.log(market.un)

//olkenin tapilmasi
let olkeler4=['Azerbaycan','Turkiye','Israel']
if(olkeler4.includes('Ethiopia')){
    console.log('Bu olke siyahida var')
}
else{
    console.log('ETHIOPIA')
}

//Sass axtarmaq
let ad04=['Sass','Console','Input','Let']
if(ad04.includes('Sass')){
    console.log('Sass is a CSS preprocessor')
}
else{
    console.log('Bu soz yoxudr')
}

//2 massivin birlesmesi
let birinci=['salam','necesen','neynirsen']
let ikinci =[12,3,21,43,2]
let qarisiq04 = birinci + "and" + ikinci
console.log(qarisiq04)

console.log('                                                          ')
console.log('----------------------------------------------------------')
console.log("--------------[Day 4 exercises level 3]-------------------")
console.log('----------------------------------------------------------')
console.log('                                                          ')
//Orta olkeni tapmaq
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
  console.log(countries[(countries.length)/2])

  //Hisseye ayirmaq
let olkeler_siyahi = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile', 'Peru'];
let hisse = Math.ceil(olkeler_siyahi.length / 2);
let birinci_hisse = olkeler_siyahi.slice(0, hisse); 
let ikinci_hisse = olkeler_siyahi.slice(hisse); 