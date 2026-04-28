const indiaData = [
    {
        state: "Uttar Pradesh",
        places: [
            { name: "Agra (Taj Mahal)", cost: 6000, image: "https://source.unsplash.com/400x300/?tajmahal", bestTime: "Oct-Mar" },
            { name: "Varanasi", cost: 5000, image: "https://source.unsplash.com/400x300/?varanasi", bestTime: "Nov-Feb" },
            { name: "Lucknow", cost: 4000, image: "https://source.unsplash.com/400x300/?lucknow", bestTime: "Oct-Mar" },
            { name: "Ayodhya", cost: 4500, image: "https://source.unsplash.com/400x300/?ayodhya", bestTime: "Nov-Mar" },
            { name: "Prayagraj", cost: 5000, image: "https://source.unsplash.com/400x300/?prayagraj", bestTime: "Jan-Feb" },
            { name: "Mathura", cost: 4000, image: "https://source.unsplash.com/400x300/?mathura", bestTime: "Oct-Mar" },
            { name: "Vrindavan", cost: 4000, image: "https://source.unsplash.com/400x300/?vrindavan", bestTime: "Oct-Mar" },
            { name: "Jhansi", cost: 4500, image: "https://source.unsplash.com/400x300/?jhansi", bestTime: "Oct-Mar" }
        ]
    },

    {
        state: "Rajasthan",
        places: [
            { name: "Jaipur", cost: 8000, image: "https://source.unsplash.com/400x300/?jaipur", bestTime: "Oct-Mar" },
            { name: "Udaipur", cost: 9000, image: "https://source.unsplash.com/400x300/?udaipur", bestTime: "Sep-Mar" },
            { name: "Jaisalmer", cost: 10000, image: "https://source.unsplash.com/400x300/?jaisalmer", bestTime: "Oct-Mar" },
            { name: "Pushkar", cost: 7000, image: "https://source.unsplash.com/400x300/?pushkar", bestTime: "Nov" },
            { name: "Mount Abu", cost: 8500, image: "https://source.unsplash.com/400x300/?mountabu", bestTime: "Oct-Mar" },
            { name: "Bikaner", cost: 7500, image: "https://source.unsplash.com/400x300/?bikaner", bestTime: "Oct-Mar" },
            { name: "Ajmer", cost: 7000, image: "https://source.unsplash.com/400x300/?ajmer", bestTime: "Oct-Mar" },
            { name: "Chittorgarh", cost: 8000, image: "https://source.unsplash.com/400x300/?chittorgarh", bestTime: "Oct-Mar" }
        ]
    },

    {
        state: "Himachal Pradesh",
        places: [
            { name: "Manali", cost: 12000, image: "https://source.unsplash.com/400x300/?manali", bestTime: "Dec-Feb" },
            { name: "Shimla", cost: 9000, image: "https://source.unsplash.com/400x300/?shimla", bestTime: "Oct-Feb" },
            { name: "Kasol", cost: 10000, image: "https://source.unsplash.com/400x300/?kasol", bestTime: "Mar-Jun" },
            { name: "Dharamshala", cost: 8500, image: "https://source.unsplash.com/400x300/?dharamshala", bestTime: "Mar-Jun" },
            { name: "Spiti Valley", cost: 15000, image: "https://source.unsplash.com/400x300/?spiti", bestTime: "Jun-Sep" }
        ]
    },

    {
        state: "Goa",
        places: [
            { name: "Baga Beach", cost: 15000, image: "https://source.unsplash.com/400x300/?goa,beach", bestTime: "Nov-Feb" },
            { name: "Calangute", cost: 14000, image: "https://source.unsplash.com/400x300/?calangute", bestTime: "Nov-Feb" },
            { name: "Anjuna", cost: 13000, image: "https://source.unsplash.com/400x300/?anjuna", bestTime: "Nov-Feb" },
            { name: "Vagator", cost: 12000, image: "https://source.unsplash.com/400x300/?vagator", bestTime: "Nov-Feb" }
        ]
    },

    {
        state: "Maharashtra",
        places: [
            { name: "Mumbai", cost: 10000, image: "https://source.unsplash.com/400x300/?mumbai", bestTime: "Nov-Feb" },
            { name: "Lonavala", cost: 7000, image: "https://source.unsplash.com/400x300/?lonavala", bestTime: "Jun-Sep" },
            { name: "Mahabaleshwar", cost: 8000, image: "https://source.unsplash.com/400x300/?mahabaleshwar", bestTime: "Oct-Jun" },
            { name: "Ajanta Caves", cost: 7500, image: "https://source.unsplash.com/400x300/?ajanta", bestTime: "Oct-Mar" },
            { name: "Ellora Caves", cost: 7500, image: "https://source.unsplash.com/400x300/?ellora", bestTime: "Oct-Mar" }
        ]
    },

    {
        state: "Kerala",
        places: [
            { name: "Munnar", cost: 11000, image: "https://source.unsplash.com/400x300/?munnar", bestTime: "Sep-Mar" },
            { name: "Alleppey", cost: 12000, image: "https://source.unsplash.com/400x300/?alleppey", bestTime: "Nov-Feb" },
            { name: "Kochi", cost: 9000, image: "https://source.unsplash.com/400x300/?kochi", bestTime: "Oct-Mar" },
            { name: "Wayanad", cost: 10000, image: "https://source.unsplash.com/400x300/?wayanad", bestTime: "Oct-May" }
        ]
    },

    {
        state: "Tamil Nadu",
        places: [
            { name: "Ooty", cost: 9000, image: "https://source.unsplash.com/400x300/?ooty", bestTime: "Oct-Jun" },
            { name: "Kanyakumari", cost: 8000, image: "https://source.unsplash.com/400x300/?kanyakumari", bestTime: "Oct-Mar" },
            { name: "Chennai", cost: 7000, image: "https://source.unsplash.com/400x300/?chennai", bestTime: "Nov-Feb" },
            { name: "Madurai", cost: 6000, image: "https://source.unsplash.com/400x300/?madurai", bestTime: "Oct-Mar" }
        ]
    },

    {
        state: "Karnataka",
        places: [
            { name: "Bangalore", cost: 8000, image: "https://source.unsplash.com/400x300/?bangalore", bestTime: "Oct-Feb" },
            { name: "Coorg", cost: 10000, image: "https://source.unsplash.com/400x300/?coorg", bestTime: "Oct-Mar" },
            { name: "Mysore", cost: 7000, image: "https://source.unsplash.com/400x300/?mysore", bestTime: "Oct-Mar" },
            { name: "Hampi", cost: 9000, image: "https://source.unsplash.com/400x300/?hampi", bestTime: "Oct-Feb" }
        ]
    },

    {
        state: "Uttarakhand",
        places: [
            { name: "Rishikesh", cost: 7000, image: "https://source.unsplash.com/400x300/?rishikesh", bestTime: "Oct-Apr" },
            { name: "Nainital", cost: 8000, image: "https://source.unsplash.com/400x300/?nainital", bestTime: "Mar-Jun" },
            { name: "Mussoorie", cost: 8500, image: "https://source.unsplash.com/400x300/?mussoorie", bestTime: "Mar-Jun" }
        ]
    }
];

export default indiaData;