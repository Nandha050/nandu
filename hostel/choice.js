async function recommendHostels() {
    // Get form values
    const hostelType = document.querySelectorAll('input[name="hostel_type"]:checked');
    const location = document.querySelector('input[name="location"]').value.toLowerCase();
    const share = document.querySelector('input[name="share"]').value;
    const facilities = document.querySelectorAll('input[name="facilities"]:checked');
    const rating = document.querySelector('input[name="rating"]').value;
    const priceMin = document.querySelector('input[name="price_min"]').value;
    const priceMax = document.querySelector('input[name="price_max"]').value;

    // Load and parse the XML file
    const response = await fetch('hostels_upadted.xml'); // Ensure the XML file is in the same directory
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, "application/xml");

    // Extract hostel data from XML
    const hostels = Array.from(xml.getElementsByTagName('hostel')).map(hostel => {
        return {
            name: hostel.getElementsByTagName('name')[0].textContent,
            location: hostel.getElementsByTagName('location')[0].textContent.toLowerCase(),
            price: parseFloat(hostel.getElementsByTagName('price')[0].textContent),
            gender: hostel.getElementsByTagName('gender')[0].textContent.toLowerCase(),
            rating: parseFloat(hostel.getElementsByTagName('rating')[0].textContent),
            facilities: hostel.getElementsByTagName('facilities')[0].textContent.split(',').map(f => f.trim()),
        };
    });

    // Filter hostels based on user choices
    const filteredHostels = hostels.filter(hostel => {
        const matchesType = Array.from(hostelType).some(type => hostel.gender === type.value.toLowerCase());
        const matchesLocation = location ? hostel.location.includes(location) : true;
        const matchesRating = rating ? hostel.rating >= parseFloat(rating) : true;
        const matchesPrice = (!priceMin || hostel.price >= parseFloat(priceMin)) && (!priceMax || hostel.price <= parseFloat(priceMax));
        const matchesFacilities = Array.from(facilities).every(facility => hostel.facilities.includes(facility.value));
        const matchesShare = share ? parseInt(share) >= 0 : true;

        return matchesType && matchesLocation && matchesRating && matchesPrice && matchesFacilities && matchesShare;
    });

    // Display filtered hostels
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (filteredHostels.length > 0) {
        filteredHostels.forEach(hostel => {
            const hostelCard = document.createElement('div');
            hostelCard.classList.add('hostel-card');
            hostelCard.innerHTML = `
                <h4>${hostel.name}</h4>
                <p>Location: ${hostel.location}</p>
                <p>Price: ₹${hostel.price}</p>
                <p>Gender: ${hostel.gender}</p>
                <p>Rating: ${hostel.rating} stars</p>
                <p>Facilities: ${hostel.facilities.join(', ')}</p>
                 <a href="hostel_details.html?id=${hostel.id}" class="button">View Details</a>
            `;
            recommendationsDiv.appendChild(hostelCard);
        });
    } else {
        recommendationsDiv.innerHTML = '<p>No hostels found based on your criteria.</p>';
    }
}
