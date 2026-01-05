const LANDMARKS = [
    // --- 🕉️ HINDU TEMPLES (1-10) ---
    {
        id: 1,
        name: "Sri Ranganathaswamy Temple",
        religion: "Hindu",
        shortDescription: "The world's largest functioning temple complex.",
        longDescription: "A massive Vaishnavite temple dedicated to Lord Ranganatha. It features 21 stunning Gopurams and is a masterpiece of Dravidian architecture spanning 156 acres.",
        location: "Srirangam, Trichy",
        locationLink: "https://maps.app.goo.gl/9Syrv87N7fFvG5D7A",
        imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800"
    },
    {
        id: 2,
        name: "Ucchi Pillayar Temple",
        religion: "Hindu",
        shortDescription: "7th-century Ganesha temple atop a massive rock.",
        longDescription: "Built on a 273-foot high rock, this temple is dedicated to Lord Ganesha. It offers a breathtaking panoramic view of the entire city and the Kaveri River.",
        location: "Rockfort, Trichy",
        locationLink: "https://maps.app.goo.gl/uX3LhR3xS6m3S3mX7",
        imageUrl: "https://images.unsplash.com/photo-1620310939502-3c8f8569804e?auto=format&fit=crop&w=800"
    },
    {
        id: 3,
        name: "Jambukeswarar Temple",
        religion: "Hindu",
        shortDescription: "One of the Pancha Bhoota Stalams (Water).",
        longDescription: "Dedicated to Lord Shiva, this temple represents the element of Water. A natural spring flows in the sanctum sanctorum even today.",
        location: "Thiruvanaikoil, Trichy",
        locationLink: "https://maps.app.goo.gl/K8Rj8fD6yR8k9v7v9",
        imageUrl: "https://images.unsplash.com/photo-1600100395420-a82d1aaad0b2?auto=format&fit=crop&w=800"
    },
    {
        id: 4,
        name: "Samayapuram Mariamman Temple",
        religion: "Hindu",
        shortDescription: "Powerful Shakti shrine known for healing.",
        longDescription: "One of the most visited temples in Tamil Nadu, dedicated to Goddess Mariamman. Devotees offer salt and pepper to the deity for health and recovery.",
        location: "Samayapuram, Trichy",
        locationLink: "https://maps.app.goo.gl/7R8k9v7v9K8Rj8fD6",
        imageUrl: "https://images.unsplash.com/photo-1590766948562-0f6d9c5aa189?auto=format&fit=crop&w=800"
    },
    {
        id: 5,
        name: "Vekkali Amman Temple",
        religion: "Hindu",
        shortDescription: "A temple where the deity has no roof.",
        longDescription: "The unique feature of this temple is that the sanctum has no roof, as the Goddess is said to prefer staying under the open sky to protect her devotees.",
        location: "Woraiyur, Trichy",
        locationLink: "https://maps.app.goo.gl/L9wY8m9w8m8w8m8w8",
        imageUrl: "https://plus.unsplash.com/premium_photo-1697729447814-2e91219b6710?auto=format&fit=crop&w=800"
    },
    {
        id: 6,
        name: "Vayalur Murugan Temple",
        religion: "Hindu",
        shortDescription: "A serene temple dedicated to Lord Muruga.",
        longDescription: "Surrounded by lush green fields, this 1200-year-old temple is where Saint Arunagirinathar began composing his famous 'Thiruppugazh'.",
        location: "Vayalur, Trichy",
        locationLink: "https://maps.app.goo.gl/M9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1614030424754-24d35876805d?auto=format&fit=crop&w=800"
    },
    {
        id: 7,
        name: "Brahmapureeswarar Temple",
        religion: "Hindu",
        shortDescription: "Famed for changing one's destiny.",
        longDescription: "A rare temple dedicated to Lord Shiva where Lord Brahma also has a shrine. It is believed that worshipping here can change one’s bad fate into good fortune.",
        location: "Thirupattur, Trichy",
        locationLink: "https://maps.app.goo.gl/N9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1621274116931-e1708848d70e?auto=format&fit=crop&w=800"
    },
    {
        id: 8,
        name: "Uthamar Koil",
        religion: "Hindu",
        shortDescription: "Home to the Trimurti (Brahma, Vishnu, Shiva).",
        longDescription: "One of the few temples where the Trinity—Brahma, Vishnu, and Shiva—along with their consorts are worshipped in a single complex.",
        location: "Manachanallur, Trichy",
        locationLink: "https://maps.app.goo.gl/O9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1614030424754-24d35876805d?auto=format&fit=crop&w=800"
    },
    {
        id: 9,
        name: "Thayumanavar Temple",
        religion: "Hindu",
        shortDescription: "Shiva temple halfway up the Rockfort.",
        longDescription: "Dedicated to Lord Shiva, who according to legend, appeared in the form of a mother to help a woman during labor. Famous for its rock-cut architecture.",
        location: "Rockfort, Trichy",
        locationLink: "https://maps.app.goo.gl/P9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1620310939502-3c8f8569804e?auto=format&fit=crop&w=800"
    },
    {
        id: 10,
        name: "Viralimalai Murugan Temple",
        religion: "Hindu",
        shortDescription: "Peacock sanctuary and hilltop temple.",
        longDescription: "Located on a small hill, this temple is famous for the hundreds of wild peacocks that inhabit the area and its traditional dance festivals.",
        location: "Viralimalai, Trichy",
        locationLink: "https://maps.app.goo.gl/Q9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1544833011-329437937746?auto=format&fit=crop&w=800"
    },

    // --- ⛪ CHRISTIAN CHURCHES (11-20) ---
    {
        id: 11,
        name: "Our Lady of Lourdes Church",
        religion: "Christian",
        shortDescription: "Gothic architecture replica from France.",
        longDescription: "Built in 1840, this church is an architectural marvel featuring colorful stained glass windows and a 200ft high spire near the Teppakulam.",
        location: "Main Guard Gate, Trichy",
        locationLink: "https://maps.app.goo.gl/R9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=800"
    },
    {
        id: 12,
        name: "St. Mary’s Cathedral",
        religion: "Christian",
        shortDescription: "The mother church of the Trichy Diocese.",
        longDescription: "A grand Roman Catholic cathedral built in 1841. It is famous for its intricate interior decor and its role in the city's Catholic history.",
        location: "Melapudur, Trichy",
        locationLink: "https://maps.app.goo.gl/S9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=800"
    },
    {
        id: 13,
        name: "St. John’s Church",
        religion: "Christian",
        shortDescription: "Colonial-era church built in 1812.",
        longDescription: "An Anglican church built by the British. It features louvered side windows and a peaceful graveyard that holds many stories from the British Raj.",
        location: "Cantonment, Trichy",
        locationLink: "https://maps.app.goo.gl/T9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1545638195-424264949cc2?auto=format&fit=crop&w=800"
    },
    {
        id: 14,
        name: "Holy Redeemer’s Basilica",
        religion: "Christian",
        shortDescription: "A historic minor basilica in Palakkarai.",
        longDescription: "Known for its Sagaya Matha (Our Lady of Perpetual Help) shrine, this church draws thousands of devotees during its annual feast in September.",
        location: "Palakkarai, Trichy",
        locationLink: "https://maps.app.goo.gl/U9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1554526010-092576974d6c?auto=format&fit=crop&w=800"
    },
    {
        id: 15,
        name: "St. Joseph’s College Church",
        religion: "Christian",
        shortDescription: "Beautiful Gothic church inside the campus.",
        longDescription: "Located within the historic St. Joseph's College, this church is famous for its quiet atmosphere and stunning ceiling art.",
        location: "Chathiram, Trichy",
        locationLink: "https://maps.app.goo.gl/V9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&fit=crop&w=800"
    },
    {
        id: 16,
        name: "Infant Jesus Church",
        religion: "Christian",
        shortDescription: "Modern church popular with youth.",
        longDescription: "A vibrant church located in Kattur, known for its special prayers for students and job seekers every Thursday.",
        location: "Kattur, Trichy",
        locationLink: "https://maps.app.goo.gl/W9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&w=800"
    },
    {
        id: 17,
        name: "Our Lady of Fatima Church",
        religion: "Christian",
        shortDescription: "Prominent church in Thillai Nagar.",
        longDescription: "A beautifully maintained church serving the posh residential area of Thillai Nagar, known for its active community and choir.",
        location: "Thillai Nagar, Trichy",
        locationLink: "https://maps.app.goo.gl/X9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1579208030886-b937fe0925dc?auto=format&fit=crop&w=800"
    },
    {
        id: 18,
        name: "All Saints Church",
        religion: "Christian",
        shortDescription: "A classic CSI church in Puthur.",
        longDescription: "Built with a simple yet elegant architecture, this church is one of the oldest Protestant churches in the city.",
        location: "Puthur, Trichy",
        locationLink: "https://maps.app.goo.gl/Y9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1518118014377-ce9468596660?auto=format&fit=crop&w=800"
    },
    {
        id: 19,
        name: "Malayadipatti Cave Church",
        religion: "Christian",
        shortDescription: "Unique historic church near outskirts.",
        longDescription: "Located slightly away from the city, this site is known for its historic Christian presence and integration with the local hilly landscape.",
        location: "Malayadipatti, Trichy",
        locationLink: "https://maps.app.goo.gl/Z9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1498114347521-158dad23e6f5?auto=format&fit=crop&w=800"
    },
    {
        id: 20,
        name: "CSI Christ Church",
        religion: "Christian",
        shortDescription: "Quiet historical church near the fort.",
        longDescription: "An architectural landmark that stands as a testament to the early Protestant missionary work in the Trichy region.",
        location: "Teppakulam, Trichy",
        locationLink: "https://maps.app.goo.gl/A9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1555431189-23961e938995?auto=format&fit=crop&w=800"
    },

    // --- 🕌 ISLAMIC MOSQUES & DARGAHS (21-30) ---
    {
        id: 21,
        name: "Nathar Vali Dargah",
        religion: "Islamic",
        shortDescription: "1000-year-old Sufi shrine of harmony.",
        longDescription: "The resting place of Saint Nathar Vali. This Dargah is a symbol of peace where people of all faiths congregate to seek blessings.",
        location: "Madurai Road, Trichy",
        locationLink: "https://maps.app.goo.gl/B9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eaa0ae?auto=format&fit=crop&w=800"
    },
    {
        id: 22,
        name: "Junction Jamia Masjid",
        religion: "Islamic",
        shortDescription: "The biggest mosque in the Junction area.",
        longDescription: "A prominent landmark for travelers arriving at the railway station, featuring grand minarets and a massive prayer hall.",
        location: "Railway Junction, Trichy",
        locationLink: "https://maps.app.goo.gl/C9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1596701062351-be5f8a460bb3?auto=format&fit=crop&w=800"
    },
    {
        id: 23,
        name: "Tennur Periya Pallivasal",
        religion: "Islamic",
        shortDescription: "The historic Great Mosque of Tennur.",
        longDescription: "A major religious center in Trichy, known for its community services and its large congregation during Eid festivals.",
        location: "Tennur High Road, Trichy",
        locationLink: "https://maps.app.goo.gl/D9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800"
    },
    {
        id: 24,
        name: "Begum Sahiba Masjid",
        religion: "Islamic",
        shortDescription: "Historic mosque with distinct architecture.",
        longDescription: "Located in the fort area, this mosque has deep historical roots and reflects the architectural style of the local Muslim community.",
        location: "Fort Station Road, Trichy",
        locationLink: "https://maps.app.goo.gl/E9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1551041777-ed0764a0028b?auto=format&fit=crop&w=800"
    },
    {
        id: 25,
        name: "Kaja Malai Dargah",
        religion: "Islamic",
        shortDescription: "Shrine on the historic Kaja hill.",
        longDescription: "A serene hilltop shrine dedicated to the Sufi saint. It offers a peaceful retreat and a great view of the southern part of the city.",
        location: "Kajamalai, Trichy",
        locationLink: "https://maps.app.goo.gl/F9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1592500305630-419da01a7c33?auto=format&fit=crop&w=800"
    },
    {
        id: 26,
        name: "Masjid-e-Hussaini",
        religion: "Islamic",
        shortDescription: "A well-known mosque on Darga Road.",
        longDescription: "Located near the Nathar Vali Dargah, it is a bustling center for daily prayers and religious education.",
        location: "Madurai Road, Trichy",
        locationLink: "https://maps.app.goo.gl/G9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1542358917-46383a277830?auto=format&fit=crop&w=800"
    },
    {
        id: 27,
        name: "Masjid At-Taqwa",
        religion: "Islamic",
        shortDescription: "A modern mosque in Ammayappa Nagar.",
        longDescription: "A beautifully constructed modern mosque known for its cleanliness, calm environment, and focus on spiritual learning.",
        location: "Ammayappa Nagar, Trichy",
        locationLink: "https://maps.app.goo.gl/H9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800"
    },
    {
        id: 28,
        name: "General Bazar Masjid",
        religion: "Islamic",
        shortDescription: "Mosque in the heart of the market.",
        longDescription: "Conveniently located for shoppers and traders in the Big Bazaar area, this mosque is always busy with the energy of the city.",
        location: "Big Bazaar St, Trichy",
        locationLink: "https://maps.app.goo.gl/I9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1596701062351-be5f8a460bb3?auto=format&fit=crop&w=800"
    },
    {
        id: 29,
        name: "Mohammad Pura Jumma Masjid",
        religion: "Islamic",
        shortDescription: "An important center for Friday congregational prayers.",
        longDescription: "A large mosque that serves a high population of devotees in the Mohammad Pura area, known for its traditional Friday sermons.",
        location: "East Trichy",
        locationLink: "https://maps.app.goo.gl/J9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800"
    },
    {
        id: 30,
        name: "Crawford Masjid",
        religion: "Islamic",
        shortDescription: "A key spiritual hub for the Crawford area.",
        longDescription: "A landmark mosque in the residential area of Crawford, facilitating religious gatherings and community support.",
        location: "Crawford, Trichy",
        locationLink: "https://maps.app.goo.gl/K9w8m8w8m8w8m8w8m",
        imageUrl: "https://images.unsplash.com/photo-1542358917-46383a277830?auto=format&fit=crop&w=800"
    }
];

window.LANDMARKS = LANDMARKS;