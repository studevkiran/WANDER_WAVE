import images from './images';

export const trips = [
    {
        id: "dubai",
        title: "DUBAI",
        subtitle: "GROUP TRIP 4N5D",
        status: "completed",
        image: images.destinations.dubai,
        details: [
            { label: "ARRIVAL/DEPARTURE", value: "DUBAI / DUBAI" },
            { label: "DURATION", value: "4N5D" },
            { label: "TRIP TYPE", value: "GROUP" },
            { label: "TRANSPORTATION", value: "INCLUDED" },
            { label: "ACCOMMODATION", value: "3 STAR HOTELS" },
            { label: "MEALS", value: "BREAKFAST" },
            { label: "PLACES COVERED", value: "DUBAI - ABU DHABI" },
        ],
        itineraryOverview: [
            { day: "DAY 1", desc: "Arrival in Dubai – Marina Cruise Dinner" },
            { day: "DAY 2", desc: "Dubai City Tour + Burj Khalifa (124th/125th Floor)" },
            { day: "DAY 3", desc: "Desert Safari with BBQ Dinner – Royal Vision Camp" },
            { day: "DAY 4", desc: "Abu Dhabi City Tour – BAPS Temple – Grand Mosque – Ferrari World Photo Stop" },
            { day: "DAY 5", desc: "Departure" },
        ],
        dayWise: [
            {
                day: 1,
                title: "Arrival in Dubai – Marina Cruise",
                details: [
                    "Arrive at Dubai International Airport, meet our representative, and enjoy a comfortable private transfer to your hotel.",
                    "Check in, relax, and settle into your room.",
                    "Evening Experience: Head out for a luxury Marina Dhow Cruise.",
                    "Enjoy an International Buffet Dinner with veg & non-veg options.",
                    "Live entertainment, stunning night views of Dubai Marina, and a peaceful cruise experience."
                ]
            },
            {
                day: 2,
                title: "Dubai City Tour + Burj Khalifa",
                subtitle: "(124th/125th Floor)",
                details: [
                    "After breakfast, start your Dubai City Tour covering iconic attractions:",
                    "Jumeirah Beach & Jumeirah Mosque",
                    "Burj Al Arab (Photo stop) & Palm Jumeirah",
                    "Atlantis The Palm & Sheikh Zayed Road",
                    "Dubai Frame (Drive past)",
                    "Later, visit the world-famous Burj Khalifa – 124th & 125th Floors (Non-Prime Hours).",
                    "Skip the long queues with pre-booked tickets.",
                    "Enjoy 360° views of Dubai’s skyline from the observation deck.",
                    "Return to the hotel to relax."
                ]
            },
            {
                day: 3,
                title: "Desert Safari with BBQ Dinner",
                subtitle: "Royal Vision Camp",
                details: [
                    "Morning free for leisure or shopping.",
                    "Afternoon: Pick up for Desert Safari in 4x4 Land Cruisers.",
                    "Dune Bashing, Camel Riding, and Sunset Photography.",
                    "Traditional BBQ Dinner with Belly Dance and Tanoura Show.",
                    "Overnight stay at the hotel."
                ]
            },
            {
                day: 4,
                title: "Abu Dhabi City Tour",
                subtitle: "BAPS Temple - Grand Mosque",
                details: [
                    "Full day tour to Abu Dhabi, the capital of UAE.",
                    "Visit the magnificent Sheikh Zayed Grand Mosque.",
                    "Stop at the BAPS Hindu Mandir.",
                    "Photo stop at Ferrari World and Yas Island.",
                    "Return to Dubai for overnight stay."
                ]
            },
            {
                day: 5,
                title: "Departure",
                details: [
                    "Enjoy a final hearty breakfast at the hotel.",
                    "Check out and transfer to Dubai International Airport.",
                    "Bid farewell to the City of Gold with amazing memories."
                ]
            }
        ]
    },
    {
        id: "thailand",
        title: "THAILAND",
        subtitle: "GROUP TRIP 4N5D",
        status: "completed",
        image: images.destinations.thailand,
        details: [
            { label: "ARRIVAL/DEPARTURE", value: "BANGKOK / BANGKOK" },
            { label: "DURATION", value: "4N5D" },
            { label: "TRIP TYPE", value: "GROUP" },
            { label: "TRANSPORTATION", value: "INCLUDED" },
            { label: "ACCOMMODATION", value: "3 STAR HOTELS" },
            { label: "MEALS", value: "BREAKFAST" },
            { label: "PLACES COVERED", value: "BANGKOK, PATTAYA" },
        ],
        itineraryOverview: [
            { day: "DAY 1", desc: "Arrival in Bangkok -> Transfer to Pattaya, Pattaya City tour" },
            { day: "DAY 2", desc: "Coral Island with Lunch" },
            { day: "DAY 3", desc: "Bangkok City Tour with Gems gallery and temple" },
            { day: "DAY 4", desc: "Mall and Shopping in Bangkok" },
            { day: "DAY 5", desc: "Departure" },
        ],
        dayWise: [
            {
                day: 1,
                title: "Arrival in Bangkok -> Transfer to Pattaya + Pattaya City Tour",
                details: [
                    "Arrive in Bangkok and meet our representative at the airport.",
                    "Begin your journey with a smooth transfer to Pattaya—settle in, check into your hotel, and freshen up.",
                    "Head out for a relaxed Pattaya City Tour (Tiger park, Floating market and Sunset point), covering local attractions and scenic viewpoints.",
                    "Spend your evening strolling around Pattaya Beach or exploring the nearby markets for food, souvenirs, and nightlife.",
                    "A calm and easy first day to settle into the tropical vibe."
                ]
            },
            {
                day: 2,
                title: "Coral Island with Lunch",
                details: [
                    "Enjoy breakfast at the hotel before heading to the pier.",
                    "Take a speedboat to the beautiful Koh Larn Island, known for turquoise water and white-sand beaches.",
                    "Spend your time swimming, relaxing, trying water activities, or capturing aesthetic island photos.",
                    "Explore hidden viewpoints and lesser-known corners of the island.",
                    "Return to Pattaya by evening and enjoy free time at leisure."
                ]
            },
            {
                day: 3,
                title: "Bangkok City Tour with Gems Gallery and Temple",
                details: [
                    "After breakfast, check out and transfer back to Bangkok.",
                    "Visit the famous Gems Gallery.",
                    "Explore the rich culture of Bangkok with a City Temple Tour.",
                    "Check into your Bangkok hotel and relax."
                ]
            },
            {
                day: 4,
                title: "Mall and Shopping in Bangkok",
                details: [
                    "Enjoy breakfast at the hotel.",
                    "Full day free for shopping at Bangkok's famous malls (MBK, Central World, Platinum Fashion Mall).",
                    "Explore local street food and vibrant city life.",
                    "Return to hotel for overnight stay."
                ]
            },
            {
                day: 5,
                title: "Departure",
                details: [
                    "After breakfast, check out from the hotel.",
                    "Transfer to the airport for your flight back home with amazing memories.",
                ]
            }
        ]
    },
    {
        id: "vietnam",
        title: "VIETNAM",
        subtitle: "GROUP TRIP 7N8D",
        status: "completed",
        image: images.destinations.vietnam,
        details: [
            { label: "ARRIVAL/DEPARTURE", value: "HANOI / HO CHI MINH" },
            { label: "DURATION", value: "7N8D" },
            { label: "TRIP TYPE", value: "GROUP" },
            { label: "TRANSPORTATION", value: "FLIGHTS + PRIVATE" },
            { label: "ACCOMMODATION", value: "4 STAR HOTELS" },
            { label: "MEALS", value: "BREAKFAST + SOME MEALS" },
            { label: "PLACES COVERED", value: "HANOI, DA NANG, HOI AN, HCM CITY" },
        ],
        itineraryOverview: [
            { day: "DAY 1", desc: "Arrival in Hanoi - City Tour" },
            { day: "DAY 2", desc: "Halong Bay Cruise Tour" },
            { day: "DAY 3", desc: "Train Street & Flight to Da Nang" },
            { day: "DAY 4", desc: "Da Nang - Marble Mountain & Hoi An Lanterns" },
            { day: "DAY 5", desc: "Bana Hills - Golden Bridge - Fantasy Park" },
            { day: "DAY 6", desc: "Da Nang to Ho Chi Minh City" },
            { day: "DAY 7", desc: "Cu Chi Tunnels & Mekong Delta" },
            { day: "DAY 8", desc: "Departure from HCM City" },
        ],
        dayWise: [
            {
                day: 1,
                title: "Arrival in Hanoi & City Intro",
                details: [
                    "Arrive at Noi Bai International Airport (Hanoi).",
                    "Transfer to your hotel and check-in.",
                    "Evening: Walking tour of the Old Quarter and Hoan Kiem Lake.",
                    "Welcome dinner with authentic Vietnamese Pho.",
                    "Overnight stay in Hanoi."
                ]
            },
            {
                day: 2,
                title: "Halong Bay Day Tour",
                subtitle: "UNESCO World Heritage Site",
                details: [
                    "Morning drive to Halong Bay (approx 2.5 hours).",
                    "Board a traditional junk boat for a cruise through the emerald waters.",
                    "Visit limestone caves (Sung Sot Cave) and enjoy kayaking.",
                    "Seafood lunch served on board.",
                    "Return to Hanoi in the evening."
                ]
            },
            {
                day: 3,
                title: "Hanoi Highlights & Flight to Da Nang",
                details: [
                    "Visit the famous Train Street for coffee and photos.",
                    "Check out from Hanoi hotel and transfer to airport.",
                    "Flight to Da Nang.",
                    "Arrival in Da Nang, transfer to hotel.",
                    "Evening free to explore Dragon Bridge and Love Lock Bridge."
                ]
            },
            {
                day: 4,
                title: "Marble Mountain & Hoi An Ancient Town",
                details: [
                    "Visit Marble Mountains - a cluster of five marble and limestone hills.",
                    "Proceed to Hoi An Ancient Town (UNESCO Site).",
                    "Explore the Japanese Covered Bridge and colorful lantern streets.",
                    "Experience a basket boat ride in the Coconut Forest.",
                    "Return to Da Nang for overnight stay."
                ]
            },
            {
                day: 5,
                title: "Bana Hills & Golden Bridge",
                details: [
                    "Full day trip to Sun World Ba Na Hills.",
                    "Ride one of the world's longest cable cars.",
                    "Walk on the iconic Golden Bridge (Hands of God).",
                    "Explore the French Village and Fantasy Park.",
                    "Buffet lunch included.",
                    "Return to Da Nang."
                ]
            },
            {
                day: 6,
                title: "Fly to Ho Chi Minh City",
                details: [
                    "Breakfast and check-out.",
                    "Transfer to airport for flight to Ho Chi Minh City (Saigon).",
                    "Check-in to hotel on arrival.",
                    "Visit the War Remnants Museum and Independence Palace.",
                    "Evening stroll at Nguyen Hue Walking Street."
                ]
            },
            {
                day: 7,
                title: "Cu Chi Tunnels & City Vibes",
                details: [
                    "Morning tour to the historic Cu Chi Tunnels.",
                    "Learn about the underground network used during the war.",
                    "Try your hand at the shooting range (optional).",
                    "Return to the city for free time shopping at Ben Thanh Market.",
                    "Farewell dinner."
                ]
            },
            {
                day: 8,
                title: "Departure",
                details: [
                    "Breakfast at hotel.",
                    "Free time until transfer to Tan Son Nhat International Airport.",
                    "Fly back home with beautiful memories of Vietnam."
                ]
            }
        ]
    },
    // Upcoming Trips
    {
        id: "hongkong",
        title: "HONG KONG",
        subtitle: "Skyline Magic, Culture Blend",
        status: "upcoming",
        image: images.destinations.hongkong,
        tagline: "Skyline Magic, Culture Blend",
        description: "Experience the perfect fusion of East meets West in this vibrant metropolis.",
        highlights: [
            "Victoria Peak panoramic views",
            "Traditional dim sum experience",
            "Symphony of Lights show",
            "Temple Street Night Market"
        ]
    },
    {
        id: "srilanka",
        title: "SRI LANKA",
        subtitle: "Pearl of the Indian Ocean",
        status: "upcoming",
        image: images.destinations.srilanka,
        tagline: "Pearl of the Indian Ocean",
        description: "Discover ancient temples, lush tea plantations, and pristine beaches.",
        highlights: [
            "Sigiriya Rock Fortress",
            "Tea plantation tours in Nuwara Eliya",
            "Wildlife safari in Yala",
            "Beautiful beaches of Mirissa"
        ]
    },
    {
        id: "kazakhstan",
        title: "KAZAKHSTAN",
        subtitle: "Steppes, Cities, Untamed Beauty",
        status: "upcoming",
        image: images.destinations.kazakhstan,
        tagline: "Steppes, Cities, Untamed Beauty",
        description: "Explore the vast steppes and modern cities of Central Asia's largest nation.",
        highlights: [
            "Futuristic Nur-Sultan architecture",
            "Charyn Canyon natural wonders",
            "Traditional nomadic culture",
            "Big Almaty Lake scenic beauty"
        ]
    },
    {
        id: "dubai-upcoming",
        title: "DUBAI",
        subtitle: "Luxury, Innovation, Desert Charm",
        status: "upcoming",
        image: images.destinations.dubai,
        tagline: "Luxury, Innovation, Desert Charm",
        description: "Return to the city of gold with new exclusive experiences and adventures.",
        highlights: [
            "Exclusive desert experiences",
            "Luxury yacht cruises",
            "World-class shopping",
            "Michelin-star dining"
        ]
    }
];
