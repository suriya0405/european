import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/popup.css';
import '../css/capstyle.css';
import axios from 'axios';
import logo from '../img/Royal Glo Next logo for website 512 x 512.png';

export const Popup = () => {
    const statesAndCities = {
        "Andaman and Nicobar Islands":
            ["Port Blair"],

        "Haryana":
            ["Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Sonipat", "Yamunanagar", "Panchkula", "Bhiwani", "Bahadurgarh", "Jind", "Sirsa", "Thanesar", "Kaithal", "Palwal", "Rewari", "Hansi", "Narnaul", "Fatehabad", "Gohana", "Tohana", "Narwana", "Mandi Dabwali", "Charkhi Dadri", "Shahbad", "Pehowa", "Samalkha", "Pinjore", "Ladwa", "Sohna", "Safidon", "Taraori", "Mahendragarh", "Ratia", "Rania", "Sarsod"],

        "Tamil Nadu":
            ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Ranipet", "Nagercoil", "Thanjavur", "Vellore", "Kancheepuram", "Erode", "Tiruvannamalai", "Pollachi", "Rajapalayam", "Sivakasi", "Pudukkottai", "Neyveli (TS)", "Nagapattinam", "Viluppuram", "Tiruchengode", "Vaniyambadi", "Theni Allinagaram", "Udhagamandalam", "Aruppukkottai", "Paramakudi", "Arakkonam", "Virudhachalam", "Srivilliputhur", "Tindivanam", "Virudhunagar", "Karur", "Valparai", "Sankarankovil", "Tenkasi", "Palani", "Pattukkottai", "Tirupathur", "Ramanathapuram", "Udumalaipettai", "Gobichettipalayam", "Thiruvarur", "Thiruvallur", "Panruti", "Namakkal", "Thirumangalam", "Vikramasingapuram", "Nellikuppam", "Rasipuram", "Tiruttani", "Nandivaram-Guduvancheri", "Periyakulam", "Pernampattu", "Vellakoil", "Sivaganga", "Vadalur", "Rameshwaram", "Tiruvethipuram", "Perambalur", "Usilampatti", "Vedaranyam", "Sathyamangalam", "Puliyankudi", "Nanjikottai", "Thuraiyur", "Sirkali", "Tiruchendur", "Periyasemur", "Sattur", "Vandavasi", "Tharamangalam", "Tirukkoyilur", "Oddanchatram", "Palladam", "Vadakkuvalliyur", "Tirukalukundram", "Uthamapalayam", "Surandai", "Sankari", "Shenkottai", "Vadipatti", "Sholingur", "Tirupathur", "Manachanallur", "Viswanatham", "Polur", "Panagudi", "Uthiramerur", "Thiruthuraipoondi", "Pallapatti", "Ponneri", "Lalgudi", "Natham", "Unnamalaikadai", "P.N.Patti", "Tharangambadi", "Tittakudi", "Pacode", "O' Valley", "Suriyampalayam", "Sholavandan", "Thammampatti", "Namagiripettai", "Peravurani", "Parangipettai", "Pudupattinam", "Pallikonda", "Sivagiri", "Punjaipugalur", "Padmanabhapuram", "Thirupuvanam"],

        "Madhya Pradesh":
            ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Ratlam", "Satna", "Murwara (Katni)", "Morena", "Singrauli", "Rewa", "Vidisha", "Ganjbasoda", "Shivpuri", "Mandsaur", "Neemuch", "Nagda", "Itarsi", "Sarni", "Sehore", "Mhow Cantonment", "Seoni", "Balaghat", "Ashok Nagar", "Tikamgarh", "Shahdol", "Pithampur", "Alirajpur", "Mandla", "Sheopur", "Shajapur", "Panna", "Raghogarh-Vijaypur", "Sendhwa", "Sidhi", "Pipariya", "Shujalpur", "Sironj", "Pandhurna", "Nowgong", "Mandideep", "Sihora", "Raisen", "Lahar", "Maihar", "Sanawad", "Sabalgarh", "Umaria", "Porsa", "Narsinghgarh", "Malaj Khand", "Sarangpur", "Mundi", "Nepanagar", "Pasan", "Mahidpur", "Seoni-Malwa", "Rehli", "Manawar", "Rahatgarh", "Panagar", "Wara Seoni", "Tarana", "Sausar", "Rajgarh", "Niwari", "Mauganj", "Manasa", "Nainpur", "Prithvipur", "Sohagpur", "Nowrozabad (Khodargama)", "Shamgarh", "Maharajpur", "Multai", "Pali", "Pachore", "Rau", "Mhowgaon", "Vijaypur", "Narsinghgarh"],

        "Jharkhand":
            ["Dhanbad", "Ranchi", "Jamshedpur", "Bokaro Steel City", "Deoghar", "Phusro", "Adityapur", "Hazaribag", "Giridih", "Ramgarh", "Jhumri Tilaiya", "Saunda", "Sahibganj", "Medininagar (Daltonganj)", "Chaibasa", "Chatra", "Gumia", "Dumka", "Madhupur", "Chirkunda", "Pakaur", "Simdega", "Musabani", "Mihijam", "Patratu", "Lohardaga", "Tenu dam-cum-Kathhara"],

        "Mizoram":
            ["Aizawl", "Lunglei", "Saiha"],
 
        "Nagaland":
            ["Dimapur", "Kohima", "Zunheboto", "Tuensang", "Wokha", "Mokokchung"],

        "Himachal Pradesh":
            ["Shimla", "Mandi", "Solan", "Nahan", "Sundarnagar", "Palampur", "Kullu"],

        "Tripura":
            ["Agartala", "Udaipur", "Dharmanagar", "Pratapgarh", "Kailasahar", "Belonia", "Khowai"],

        "Andhra Pradesh":
            ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Kakinada", "Tirupati", "Anantapur", "Kadapa", "Vizianagaram", "Eluru", "Ongole", "Nandyal", "Machilipatnam", "Adoni", "Tenali", "Chittoor", "Hindupur", "Proddatur", "Bhimavaram", "Madanapalle", "Guntakal", "Dharmavaram", "Gudivada", "Srikakulam", "Narasaraopet", "Rajampet", "Tadpatri", "Tadepalligudem", "Chilakaluripet", "Yemmiganur", "Kadiri", "Chirala", "Anakapalle", "Kavali", "Palacole", "Sullurpeta", "Tanuku", "Rayachoti", "Srikalahasti", "Bapatla", "Naidupet", "Nagari", "Gudur", "Vinukonda", "Narasapuram", "Nuzvid", "Markapur", "Ponnur", "Kandukur", "Bobbili", "Rayadurg", "Samalkot", "Jaggaiahpet", "Tuni", "Amalapuram", "Bheemunipatnam", "Venkatagiri", "Sattenapalle", "Pithapuram", "Palasa Kasibugga", "Parvathipuram", "Macherla", "Gooty", "Salur", "Mandapeta", "Jammalamadugu", "Peddapuram", "Punganur", "Nidadavole", "Repalle", "Ramachandrapuram", "Kovvur", "Tiruvuru", "Uravakonda", "Narsipatnam", "Yerraguntla", "Pedana", "Puttur", "Renigunta", "Rajam", "Srisailam Project (Right Flank Colony) Township"],

        "Punjab":
            ["Ludhiana", "Patiala", "Amritsar", "Jalandhar", "Bathinda", "Pathankot", "Hoshiarpur", "Batala", "Moga", "Malerkotla", "Khanna", "Mohali", "Barnala", "Firozpur", "Phagwara", "Kapurthala", "Zirakpur", "Kot Kapura", "Faridkot", "Muktsar", "Rajpura", "Sangrur", "Fazilka", "Gurdaspur", "Kharar", "Gobindgarh", "Mansa", "Malout", "Nabha", "Tarn Taran", "Jagraon", "Sunam", "Dhuri", "Firozpur Cantt.", "Sirhind Fatehgarh Sahib", "Rupnagar", "Jalandhar Cantt.", "Samana", "Nawanshahr", "Rampura Phul", "Nangal", "Nakodar", "Zira", "Patti", "Raikot", "Longowal", "Urmar Tanda", "Morinda, India", "Phillaur", "Pattran", "Qadian", "Sujanpur", "Mukerian", "Talwara"],

        "Chandigarh":
            ["Chandigarh"],

        "Rajasthan":
            ["Jaipur", "Jodhpur", "Bikaner", "Udaipur", "Ajmer", "Bhilwara", "Alwar", "Bharatpur", "Pali", "Barmer", "Sikar", "Tonk", "Sadulpur", "Sawai Madhopur", "Nagaur", "Makrana", "Sujangarh", "Sardarshahar", "Ladnu", "Ratangarh", "Nokha", "Nimbahera", "Suratgarh", "Rajsamand", "Lachhmangarh", "Rajgarh (Churu)", "Nasirabad", "Nohar", "Phalodi", "Nathdwara", "Pilani", "Merta City", "Sojat", "Neem-Ka-Thana", "Sirohi", "Pratapgarh", "Rawatbhata", "Sangaria", "Lalsot", "Pilibanga", "Pipar City", "Taranagar", "Vijainagar, Ajmer", "Sumerpur", "Sagwara", "Ramganj Mandi", "Lakheri", "Udaipurwati", "Losal", "Sri Madhopur", "Ramngarh", "Rawatsar", "Rajakhera", "Shahpura", "Shahpura", "Raisinghnagar", "Malpura", "Nadbai", "Sanchore", "Nagar", "Rajgarh (Alwar)", "Sheoganj", "Sadri", "Todaraisingh", "Todabhim", "Reengus", "Rajaldesar", "Sadulshahar", "Sambhar", "Prantij", "Mount Abu", "Mangrol", "Phulera", "Mandawa", "Pindwara", "Mandalgarh", "Takhatgarh"],

        "Assam":
            ["Guwahati", "Silchar", "Dibrugarh", "Nagaon", "Tinsukia", "Jorhat", "Bongaigaon City", "Dhubri", "Diphu", "North Lakhimpur", "Tezpur", "Karimganj", "Sibsagar", "Goalpara", "Barpeta", "Lanka", "Lumding", "Mankachar", "Nalbari", "Rangia", "Margherita", "Mangaldoi", "Silapathar", "Mariani", "Marigaon"],

        "Odisha":
            ["Bhubaneswar", "Cuttack", "Raurkela", "Brahmapur", "Sambalpur", "Puri", "Baleshwar Town", "Baripada Town", "Bhadrak", "Balangir", "Jharsuguda", "Bargarh", "Paradip", "Bhawanipatna", "Dhenkanal", "Barbil", "Kendujhar", "Sunabeda", "Rayagada", "Jatani", "Byasanagar", "Kendrapara", "Rajagangapur", "Parlakhemundi", "Talcher", "Sundargarh", "Phulabani", "Pattamundai", "Titlagarh", "Nabarangapur", "Soro", "Malkangiri", "Rairangpur", "Tarbha"],

        "Chhattisgarh":
            ["Raipur", "Bhilai Nagar", "Korba", "Bilaspur", "Durg", "Rajnandgaon", "Jagdalpur", "Raigarh", "Ambikapur", "Mahasamund", "Dhamtari", "Chirmiri", "Bhatapara", "Dalli-Rajhara", "Naila Janjgir", "Tilda Newra", "Mungeli", "Manendragarh", "Sakti"],

        "Jammu and Kashmir":
            ["Srinagar", "Jammu", "Baramula", "Anantnag", "Sopore", "KathUrban Agglomeration", "Rajauri", "Punch", "Udhampur"],

        "Karnataka":
            ["Bengaluru", "Hubli-Dharwad", "Belagavi", "Mangaluru", "Davanagere", "Ballari", "Mysore", "Tumkur", "Shivamogga", "Raayachuru", "Robertson Pet", "Kolar", "Mandya", "Udupi", "Chikkamagaluru", "Karwar", "Ranebennuru", "Ranibennur", "Ramanagaram", "Gokak", "Yadgir", "Rabkavi Banhatti", "Shahabad", "Sirsi", "Sindhnur", "Tiptur", "Arsikere", "Nanjangud", "Sagara", "Sira", "Puttur", "Athni", "Mulbagal", "Surapura", "Siruguppa", "Mudhol", "Sidlaghatta", "Shahpur", "Saundatti-Yellamma", "Wadi", "Manvi", "Nelamangala", "Lakshmeshwar", "Ramdurg", "Nargund", "Tarikere", "Malavalli", "Savanur", "Lingsugur", "Vijayapura", "Sankeshwara", "Madikeri", "Talikota", "Sedam", "Shikaripur", "Mahalingapura", "Mudalagi", "Muddebihal", "Pavagada", "Malur", "Sindhagi", "Sanduru", "Afzalpur", "Maddur", "Madhugiri", "Tekkalakote", "Terdal", "Mudabidri", "Magadi", "Navalgund", "Shiggaon", "Shrirangapattana", "Sindagi", "Sakaleshapura", "Srinivaspur", "Ron", "Mundargi", "Sadalagi", "Piriyapatna", "Adyar"],

        "Manipur":
            ["Imphal", "Thoubal", "Lilong", "Mayang Imphal"],

        "Kerala":
            ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Palakkad", "Alappuzha", "Malappuram", "Ponnani", "Vatakara", "Kanhangad", "Taliparamba", "Koyilandy", "Neyyattinkara", "Kayamkulam", "Nedumangad", "Kannur", "Tirur", "Kottayam", "Kasaragod", "Kunnamkulam", "Ottappalam", "Thiruvalla", "Thodupuzha", "Chalakudy", "Changanassery", "Punalur", "Nilambur", "Cherthala", "Perinthalmanna", "Mattannur", "Shoranur", "Varkala", "Paravoor", "Pathanamthitta", "Peringathur", "Attingal", "Kodungallur", "Pappinisseri", "Chittur-Thathamangalam", "Muvattupuzha", "Adoor", "Mavelikkara", "Mavoor", "Perumbavoor", "Vaikom", "Palai", "Panniyannur", "Guruvayoor", "Puthuppally", "Panamattom"],

        "Delhi":
            ["Delhi", "New Delhi"],

        "Dadra and Nagar Haveli":
            ["Silvassa"],

        "Puducherry":
            ["Pondicherry", "Karaikal", "Yanam", "Mahe"],

        "Uttarakhand":
            ["Dehradun", "Hardwar", "Haldwani-cum-Kathgodam", "Srinagar", "Kashipur", "Roorkee", "Rudrapur", "Rishikesh", "Ramnagar", "Pithoragarh", "Manglaur", "Nainital", "Mussoorie", "Tehri", "Pauri", "Nagla", "Sitarganj", "Bageshwar"],

        "Uttar Pradesh":
            ["Lucknow", "Kanpur", "Firozabad", "Agra", "Meerut", "Varanasi", "Allahabad", "Amroha", "Moradabad", "Aligarh", "Saharanpur", "Noida", "Loni", "Jhansi", "Shahjahanpur", "Rampur", "Modinagar", "Hapur", "Etawah", "Sambhal", "Orai", "Bahraich", "Unnao", "Rae Bareli", "Lakhimpur", "Sitapur", "Lalitpur", "Pilibhit", "Chandausi", "Hardoi ", "Azamgarh", "Khair", "Sultanpur", "Tanda", "Nagina", "Shamli", "Najibabad", "Shikohabad", "Sikandrabad", "Shahabad, Hardoi", "Pilkhuwa", "Renukoot", "Vrindavan", "Ujhani", "Laharpur", "Tilhar", "Sahaswan", "Rath", "Sherkot", "Kalpi", "Tundla", "Sandila", "Nanpara", "Sardhana", "Nehtaur", "Seohara", "Padrauna", "Mathura", "Thakurdwara", "Nawabganj", "Siana", "Noorpur", "Sikandra Rao", "Puranpur", "Rudauli", "Thana Bhawan", "Palia Kalan", "Zaidpur", "Nautanwa", "Zamania", "Shikarpur, Bulandshahr", "Naugawan Sadat", "Fatehpur Sikri", "Shahabad, Rampur", "Robertsganj", "Utraula", "Sadabad", "Rasra", "Lar", "Lal Gopalganj Nindaura", "Sirsaganj", "Pihani", "Shamsabad, Agra", "Rudrapur", "Soron", "SUrban Agglomerationr", "Samdhan", "Sahjanwa", "Rampur Maniharan", "Sumerpur", "Shahganj", "Tulsipur", "Tirwaganj", "PurqUrban Agglomerationzi", "Shamsabad, Farrukhabad", "Warhapur", "Powayan", "Sandi", "Achhnera", "Naraura", "Nakur", "Sahaspur", "Safipur", "Reoti", "Sikanderpur", "Saidpur", "Sirsi", "Purwa", "Parasi", "Lalganj", "Phulpur", "Shishgarh", "Sahawar", "Samthar", "Pukhrayan", "Obra", "Niwai", "Mirzapur"],

        "Bihar":
            ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Arrah", "Begusarai", "Chhapra", "Katihar", "Munger", "Purnia", "Saharsa", "Sasaram", "Hajipur", "Dehri-on-Sone", "Bettiah", "Motihari", "Bagaha", "Siwan", "Kishanganj", "Jamalpur", "Buxar", "Jehanabad", "Aurangabad", "Lakhisarai", "Nawada", "Jamui", "Sitamarhi", "Araria", "Gopalganj", "Madhubani", "Masaurhi", "Samastipur", "Mokameh", "Supaul", "Dumraon", "Arwal", "Forbesganj", "BhabUrban Agglomeration", "Narkatiaganj", "Naugachhia", "Madhepura", "Sheikhpura", "Sultanganj", "Raxaul Bazar", "Ramnagar", "Mahnar Bazar", "Warisaliganj", "Revelganj", "Rajgir", "Sonepur", "Sherghati", "Sugauli", "Makhdumpur", "Maner", "Rosera", "Nokha", "Piro", "Rafiganj", "Marhaura", "Mirganj", "Lalganj", "Murliganj", "Motipur", "Manihari", "Sheohar", "Maharajganj", "Silao", "Barh", "Asarganj"],

        "Gujarat":
            ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Nadiad", "Porbandar", "Anand", "Morvi", "Mahesana", "Bharuch", "Vapi", "Navsari", "Veraval", "Bhuj", "Godhra", "Palanpur", "Valsad", "Patan", "Deesa", "Amreli", "Anjar", "Dhoraji", "Khambhat", "Mahuva", "Keshod", "Wadhwan", "Ankleshwar", "Savarkundla", "Kadi", "Visnagar", "Upleta", "Una", "Sidhpur", "Unjha", "Mangrol", "Viramgam", "Modasa", "Palitana", "Petlad", "Kapadvanj", "Sihor", "Wankaner", "Limbdi", "Mandvi", "Thangadh", "Vyara", "Padra", "Lunawada", "Rajpipla", "Vapi", "Umreth", "Sanand", "Rajula", "Radhanpur", "Mahemdabad", "Ranavav", "Tharad", "Mansa", "Umbergaon", "Talaja", "Vadnagar", "Manavadar", "Salaya", "Vijapur", "Pardi", "Rapar", "Songadh", "Lathi", "Adalaj", "Chhapra", "Gandhinagar"],

        "Telangana":
            ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Mancherial", "Adilabad", "Suryapet", "Jagtial", "Miryalaguda", "Nirmal", "Kamareddy", "Kothagudem", "Bodhan", "Palwancha", "Mandamarri", "Koratla", "Sircilla", "Tandur", "Siddipet", "Wanaparthy", "Kagaznagar", "Gadwal", "Sangareddy", "Bellampalle", "Bhongir", "Vikarabad", "Jangaon", "Bhadrachalam", "Bhainsa", "Farooqnagar", "Medak", "Narayanpet", "Sadasivpet", "Yellandu", "Manuguru", "Kyathampalle", "Nagarkurnool"],

        "Meghalaya":
            ["Shillong", "Tura", "Nongstoin"],

        "Himachal Praddesh":
            ["Manali"],

        "Arunachal Pradesh":
            ["Naharlagun", "Pasighat"],

        "Maharashtra":
            ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Kalyan-Dombivali", "Vasai-Virar", "Solapur", "Mira-Bhayandar", "Bhiwandi", "Amravati", "Nanded-Waghala", "Sangli", "Malegaon", "Akola", "Latur", "Dhule", "Ahmednagar", "Ichalkaranji", "Parbhani", "Panvel", "Yavatmal", "Achalpur", "Osmanabad", "Nandurbar", "Satara", "Wardha", "Udgir", "Aurangabad", "Amalner", "Akot", "Pandharpur", "Shrirampur", "Parli", "Washim", "Ambejogai", "Manmad", "Ratnagiri", "Uran Islampur", "Pusad", "Sangamner", "Shirpur-Warwade", "Malkapur", "Wani", "Lonavla", "Talegaon Dabhade", "Anjangaon", "Umred", "Palghar", "Shegaon", "Ozar", "Phaltan", "Yevla", "Shahade", "Vita", "Umarkhed", "Warora", "Pachora", "Tumsar", "Manjlegaon", "Sillod", "Arvi", "Nandura", "Vaijapur", "Wadgaon Road", "Sailu", "Murtijapur", "Tasgaon", "Mehkar", "Yawal", "Pulgaon", "Nilanga", "Wai", "Umarga", "Paithan", "Rahuri", "Nawapur", "Tuljapur", "Morshi", "Purna", "Satana", "Pathri", "Sinnar", "Uchgaon", "Uran", "Pen", "Karjat", "Manwath", "Partur", "Sangole", "Mangrulpir", "Risod", "Shirur", "Savner", "Sasvad", "Pandharkaoda", "Talode", "Shrigonda", "Shirdi", "Raver", "Mukhed", "Rajura", "Vadgaon Kasba", "Tirora", "Mahad", "Lonar", "Sawantwadi", "Pathardi", "Pauni", "Ramtek", "Mul", "Soyagaon", "Mangalvedhe", "Narkhed", "Shendurjana", "Patur", "Mhaswad", "Loha", "Nandgaon", "Warud"],

        "Goa":
            ["Marmagao", "Panaji", "Margao", "Mapusa"],

        "West Bengal":
            ["Kolkata", "Siliguri", "Asansol", "Raghunathganj", "Kharagpur", "Naihati", "English Bazar", "Baharampur", "Hugli-Chinsurah", "Raiganj", "Jalpaiguri", "Santipur", "Balurghat", "Medinipur", "Habra", "Ranaghat", "Bankura", "Nabadwip", "Darjiling", "Purulia", "Arambagh", "Tamluk", "AlipurdUrban Agglomerationr", "Suri", "Jhargram", "Gangarampur", "Rampurhat", "Kalimpong", "Sainthia", "Taki", "Murshidabad", "Memari", "Paschim Punropara", "Tarakeswar", "Sonamukhi", "PandUrban Agglomeration", "Mainaguri", "Malda", "Panchla", "Raghunathpur", "Mathabhanga", "Monoharpur", "Srirampore", "Adra"]
    }

    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [neet, setNeet] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const canvasRef = useRef(null);
    const [isChecked, setIsChecked] = useState(true);
    const [selectedState, setSelectedState] = useState(""); // State for selected state
    const [cities, setCities] = useState([]); // State for city list
    const [mobileError, setMobileError] = useState('');
    const [neetError, setNeetError] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                initializeCaptcha(ctx);
            }
        }
    }, [show]);

    const handleClose = () => setShow(false);

    const sendEmail = async () => {
        try {
            await axios.post('http://localhost:5000/send-email', { name, mobile, neet, message });
            setStatus('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Error sending email');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (neet.length !== 3) {
            setNeetError('Neet mark must be 3 digits');
            return;
        }

        if (mobile.length !== 10) {
            setMobileError('Mobile number must be 10 digits');
            return; // Stop form submission
        }

        if (userInput !== captchaText) {
            alert('Incorrect captcha. Please try again.');
            const ctx = canvasRef.current.getContext('2d');
            initializeCaptcha(ctx);
            return;
        }
        sendEmail();
        handleClose();
    };

    const generateRandomChar = (min, max) =>
        String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));

    const generateCaptchaText = () => {
        let captcha = '';
        for (let i = 0; i < 3; i++) {
            captcha += generateRandomChar(65, 90);
            captcha += generateRandomChar(97, 122);
            captcha += generateRandomChar(48, 57);
        }
        return captcha.split('').sort(() => Math.random() - 0.5).join('');
    };

    const drawCaptchaOnCanvas = (ctx, captcha) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)'];
        const letterSpace = 150 / captcha.length;
        for (let i = 0; i < captcha.length; i++) {
            const xInitialSpace = 25;
            ctx.font = '20px Roboto Mono';
            ctx.fillStyle = textColors[Math.floor(Math.random() * 2)];
            ctx.fillText(captcha[i], xInitialSpace + i * letterSpace, Math.floor(Math.random() * 16 + 25), 100);
        }
    };

    const initializeCaptcha = (ctx) => {
        setUserInput('');
        const newCaptcha = generateCaptchaText();
        setCaptchaText(newCaptcha);
        drawCaptchaOnCanvas(ctx, newCaptcha);
    };

    const handleUserInputChange = (e) => {
        setUserInput(e.target.value);
        setIsVerified(e.target.value === captchaText);
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setCities(statesAndCities[state] || []); // Set cities based on selected state
    };

    return (
        <div>
            <Modal className='popup' show={show} onHide={handleClose} centered>
                <Modal.Header className='header' closeButton>
                    <img src={logo} alt="Logo" />
                    <p className='para'>Register For Free Counseling</p>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Let Our Expert Counsellor's help you and answer your questions. We provide Honest Advice, Guaranteed Admission, and No Donation.
                        <a href='/' className='phone-link'><i className="fa fa-phone"></i>&nbsp;+91 9962705000</a>
                    </p>
                    <Form className='form-container-popup' onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter Name '
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formNeet">
                            <Form.Control
                                type="number"
                                name="neet"
                                value={neet}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                                    if (newValue.length <= 3) { // Allow only up to three digits
                                        setNeet(newValue);
                                    }
                                    // setNeetError(''); // Clear any previous error
                                }}
                                placeholder='NEET Score'
                                required
                                style={{ width: '100%' }}
                                maxLength={3} // Limit to 3 digits
                            />
                        </Form.Group>
                        <Form.Group controlId="formMobile">
                            <div style={{ display: 'flex' }}>
                                <Form.Control as="select" style={{ width: '15%' }}>
                                    <option>+91</option>
                                </Form.Control>
                                <Form.Control
                                    type="text"
                                    name="mobile"
                                    value={mobile}
                                    onChange={(e) => {
                                        setMobile(e.target.value);
                                        setMobileError(''); // Clear error when user starts typing
                                    }}
                                    placeholder="Enter Mobile Number"
                                    required
                                    style={{ width: '90%' }}
                                    maxLength={10}
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                    }}
                                />
                            </div>
                            {mobileError && <p style={{ color: 'red' }}>{mobileError}</p>}
                        </Form.Group>

                        <Form.Group controlId="formStateCity" style={{ display: 'flex', gap: '10px' }}>
                            <Form.Control
                                as="select"
                                style={{ width: '50%' }}
                                value={selectedState}
                                onChange={handleStateChange}
                            >
                                <option value="" disabled>Select State</option>
                                {Object.keys(statesAndCities).map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </Form.Control>
                            <Form.Control
                                as="select"
                                style={{ width: '50%' }}
                                disabled={!selectedState}
                                defaultValue=""
                            >
                                <option value="" disabled>Select City</option>
                                {cities.map((city) => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <div className="captcha-container">
                            <canvas ref={canvasRef} width="200" height="45"></canvas>
                            <button type="button" className='capcha-btn' onClick={() => initializeCaptcha(canvasRef.current.getContext('2d'))}>
                                Reload Captcha
                            </button>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="Enter the Captcha"
                            value={userInput}
                            onChange={handleUserInputChange}
                        />
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                label={
                                    <span className='checkbox-label'>
                                        Do you want us to send you Brochure’s, Fees Structure’s, YouTube - Video Links & Complete Information on your WhatsApp
                                        <br /><br /><strong>Note: We do not share your contact details; we respect your privacy.</strong>
                                    </span>
                                }
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-3">
                            Send
                        </Button>
                        <p>{status}</p>

                        {/* Rest of the form */}
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};
