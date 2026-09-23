const operatorUrl = "https://www.getyourguide.com/lua-travel--tours-s786138/";
const tours = {
  cocktails: {
    title: "Secret Cocktail Bars & Local Food",
    category: "FOOD & DRINK",
    intro: "Hidden bars, Hoi An flavours, and the stories between them.",
    description: "The old town changes after dark. Follow a local guide through its lanes and into places you might walk straight past, tasting cocktails and Hoi An food as you go.",
    highlights: ["A small group of no more than 8 guests", "Cocktails, local food, and dessert along the way", "Non-alcoholic drinks and vegetarian food are available"],
    image: "IMG_0253%20(3).jpg",
    alt: "Local dishes served during a Hoi An food experience",
    bookingUrl: "https://www.getyourguide.com/hoi-an-l831/hoi-an-secret-cocktail-bars-local-food-experience-t1412677/",
    direct: true
  },
  coffee: {
    title: "Hidden Gems Coffee Tour",
    category: "COFFEE & CULTURE",
    intro: "Find your way into Hoi An’s café culture, one cup and one quiet corner at a time.",
    description: "Step away from the busiest streets to discover the cafés and everyday rituals that give Hoi An its character. Take time to taste, talk, and look around.",
    highlights: ["Explore quieter corners of Hoi An", "Spend time with local coffee culture", "Enjoy an unhurried experience"],
    image: "eecf952d74f2f9aca0e3.jpg",
    alt: "Coffee drinks at a Hoi An café",
    bookingUrl: operatorUrl
  },
  "tra-nhieu": {
    title: "Tra Nhieu Village Bike Tour",
    category: "COUNTRYSIDE",
    intro: "Trade the bustle of the old town for village paths, a boat ride, and a local lunch.",
    description: "Cycle through Tra Nhieu’s countryside and enjoy a different pace of life beyond Hoi An. The experience brings together village scenery, lunch, and time on the water.",
    highlights: ["Explore village paths by bicycle", "Enjoy a local lunch", "Take a boat ride"],
    image: "IMG_0219%20(2).jpg",
    alt: "Cycling along a village path near Hoi An",
    bookingUrl: "https://www.getyourguide.com/hoi-an-l831/hoi-an-tra-nhieu-village-bike-tour-with-lunch-boat-ride-t1412703/",
    direct: true
  },
  calligraphy: {
    title: "Calligraphy & Tea",
    category: "ART & TRADITION",
    intro: "Slow down for an introduction to calligraphy and tea in Hoi An.",
    description: "Make space for a quieter cultural experience. Discover the care and attention behind calligraphy while sharing a cup of tea.",
    highlights: ["Try a traditional art", "Enjoy tea in a relaxed setting", "Take home a deeper connection to local craft"],
    image: "745342026_18001909010957289_1634909492722903595_n.jpg",
    alt: "Tea being prepared at a local table",
    bookingUrl: operatorUrl
  },
  tailor: {
    title: "Hoi An Tailor Experience",
    category: "CRAFT",
    intro: "Meet the people and craftsmanship behind one of Hoi An’s best-known traditions.",
    description: "Look more closely at the skill and process of tailoring in Hoi An. This experience is an invitation to connect with the makers behind the craft.",
    highlights: ["Discover Hoi An’s tailoring tradition", "Meet local makers", "Learn about the craft behind a fitting"],
    image: "c85557b3b66c3b32627d.jpg",
    alt: "A visitor having a garment fitted in Hoi An",
    bookingUrl: operatorUrl
  }
};
const key = new URLSearchParams(location.search).get("tour");
const tour = tours[key];
if (!tour) {
  document.getElementById("detail").innerHTML = '<div class="not-found"><h1>Experience not found</h1><p>Explore our Hoi An tours and find one that feels right for you.</p><a class="booking-button" href="index.html#tours">See all experiences ↗</a></div>';
  document.title = "Experience not found — Be Local Travel";
} else {
  if (key === "cocktails") {
    document.body.classList.add("cocktails-page");
    document.getElementById("cocktail-facts").hidden = false;
    document.getElementById("cocktail-extra").hidden = false;
    document.getElementById("cocktail-scene").hidden = false;
    document.querySelector(".detail-copy h2").innerHTML = "A night through <em>Hoi An.</em>";
    document.getElementById("booking-description").textContent = "Choose a date and the number of guests to see the live price and available start times.";
  }
  document.title = tour.title + " — Be Local Travel";
  document.querySelector('meta[name="description"]').content = tour.intro;
  document.getElementById("tour-category").textContent = "— " + tour.category + " / HOI AN";
  document.getElementById("tour-title").textContent = tour.title;
  document.getElementById("tour-intro").textContent = tour.intro;
  document.getElementById("tour-description").textContent = tour.description;
  const photo = document.getElementById("tour-photo");
  photo.src = tour.image;
  photo.alt = tour.alt;
  for (const item of tour.highlights) {
    const li = document.createElement("li");
    li.textContent = item;
    document.getElementById("tour-highlights").append(li);
  }
  const booking = document.getElementById("booking-link");
  booking.href = tour.bookingUrl;
  if (!tour.direct) {
    booking.textContent = "Browse available tours ↗";
    document.getElementById("booking-description").textContent = "This experience does not yet have its own public checkout page.";
    document.getElementById("booking-note").textContent = "The button opens our tour collection. Dates and availability for this experience are not yet shown here.";
  } else {
    document.getElementById("booking-note").textContent = "Checkout opens on GetYourGuide in a new tab.";
  }
  for (const [id, other] of Object.entries(tours)) {
    if (id === key) continue;
    const a = document.createElement("a");
    a.href = "experience.html?tour=" + encodeURIComponent(id);
    a.textContent = other.title + " ↗";
    document.getElementById("more-links").append(a);
  }
}
document.getElementById("year").textContent = new Date().getFullYear();
