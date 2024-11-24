// Sample hostel data (this should match the data from the recommendation system)
const hostels = [
    { 
        id: 1,
        name: "Hostel A",
        type: "Boys",
        location: "Medchal",
        rating: 4,
        price: 1500,
        share: 3,
        facilities: ["Laundry", "Transport"],
        owner: "John Doe",
        contact: "9876543210",
        extraInfo: "Spacious rooms with a calm atmosphere, located near public transport."
    },
    { 
        id: 2,
        name: "Hostel B",
        type: "Girls",
        location: "Hyathnagar",
        rating: 3,
        price: 1000,
        share: 2,
        facilities: ["Geyser", "Fridge", "Open Kitchen"],
        owner: "Jane Smith",
        contact: "8765432109",
        extraInfo: "Affordable and well-maintained with a friendly environment."
    },
    { 
        id: 3,
        name: "Hostel C",
        type: "Co-living",
        location: "Gandimaisamma",
        rating: 5,
        price: 2000,
        share: 1,
        facilities: ["Laundry", "Custom Meals"],
        owner: "Mike Johnson",
        contact: "7654321098",
        extraInfo: "Premium co-living experience with modern facilities."
    },
    { 
        id: 4,
        name: "Hostel D",
        type: "Boys",
        location: "Koti",
        rating: 2,
        price: 800,
        share: 4,
        facilities: ["Fridge", "Geyser", "Transport"],
        owner: "Chris Lee",
        contact: "6543210987",
        extraInfo: "Budget-friendly hostel located near the city center."
    }
];

// Extract hostel ID from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const hostelId = urlParams.get("id");

// Find the hostel with the matching ID
const hostel = hostels.find(h => h.id === parseInt(hostelId));

// Display hostel details dynamically
const hostelDetailsDiv = document.getElementById("hostelDetails");

if (hostel) {
    hostelDetailsDiv.innerHTML = `
        <h1>${hostel.name}</h1>
        <p><strong>Type:</strong> ${hostel.type}</p>
        <p><strong>Location:</strong> ${hostel.location}</p>
        <p><strong>Rating:</strong> ${hostel.rating} stars</p>
        <p><strong>Price:</strong> ₹${hostel.price} per month</p>
        <p><strong>Sharing:</strong> ${hostel.share} people</p>
        <p><strong>Facilities:</strong> ${hostel.facilities.join(", ")}</p>
        <p><strong>Owner:</strong> ${hostel.owner}</p>
        <p><strong>Contact:</strong> ${hostel.contact}</p>
        <p><strong>About:</strong> ${hostel.extraInfo}</p>
    `;
} else {
    hostelDetailsDiv.innerHTML = `<p>Hostel not found. Please go back and try again.</p>`;
}
