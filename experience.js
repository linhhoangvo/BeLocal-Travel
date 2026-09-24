const operatorUrl = "https://www.getyourguide.com/lua-travel--tours-s786138/";
const tours = {
  cocktails: {
    title: "Secret Cocktail Bars & Local Food",
    category: "FOOD & DRINK",
    intro: "An evening walk through Hoi An Old Town with cocktails, local food and a guide.",
    description: "Meet your local guide in the Old Town and walk between hidden bars and food stops. Along the way, hear about Hoi An's streets and the people behind its food and drinks.",
    highlights: [],
    image: "cocktail.jpg",
    alt: "Cocktails served in Hoi An",
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
    title: "Tra Nhieu Village Bike Tour with Lunch & Boat Ride",
    category: "COUNTRYSIDE",
    intro: "Cycle beyond Hoi An, share a local lunch, and return to the river for a boat ride.",
    description: "Follow quieter village paths around Tra Nhieu by bicycle. There is time to take in the countryside, sit down for lunch, and see the area from the water.",
    highlights: ["Cycle the quieter village paths", "Pause for a local lunch", "Enjoy a boat ride on the water"],
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
    image: "image(20260923-103723).png",
    alt: "Guests showing their calligraphy work with a local teacher",
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
    const gallery = document.getElementById("cocktail-gallery");
    gallery.innerHTML = '<img src="cocktail%204.jpg" alt="Guests enjoying drinks in Hoi An" loading="lazy"><img src="cocktail%2015.jpg" alt="Bartender preparing a cocktail" loading="lazy"><img src="cocktail%208.jpg" alt="Cocktails at a Hoi An bar" loading="lazy"><img src="cocktail%2022.jpeg" alt="Cocktails served at an evening bar" loading="lazy">';
    gallery.hidden = false;
    document.getElementById("gallery-caption").hidden = true;
    document.querySelector(".detail-copy h2").textContent = "About this tour";
    document.querySelector(".booking-overline").textContent = "BOOK THIS TOUR";
    document.getElementById("booking-title").textContent = "Check availability";
    document.getElementById("booking-description").textContent = "Select your date and guests to see current times and prices.";
  }
  if (key === "tra-nhieu") {
    document.body.classList.add("cocktails-page", "village-page");
    const gallery = document.getElementById("cocktail-gallery");
    gallery.innerHTML = '<img src="IMG_0251%20(2).jpg" alt="Village path near Hoi An" loading="lazy"><img src="IMG_0253%20(3).jpg" alt="Local food served in Hoi An" loading="lazy"><img src="IMG_0244%20(2).jpg" alt="Boat on a Hoi An river" loading="lazy"><img src="IMG_0260%20(4).jpg" alt="Guests gathered at a countryside table" loading="lazy">';
    gallery.hidden = false;
    const caption = document.getElementById("gallery-caption");
    caption.textContent = "Scenes from our Hoi An countryside collection. The exact route and stops may vary.";
    caption.hidden = false;
    const facts = document.getElementById("cocktail-facts");
    facts.innerHTML = '<div><span>Explore</span><strong>By bicycle</strong></div><div><span>Enjoy</span><strong>Local lunch</strong></div><div><span>Finish</span><strong>Boat ride</strong></div>';
    facts.hidden = false;
    const extra = document.getElementById("cocktail-extra");
    extra.innerHTML = `
      <section class="village-section"><h3>Highlights</h3><ul class="village-highlights">
        <li>Cycle along quieter village paths beyond Hoi An’s busy streets.</li>
        <li>Take in the countryside and everyday life around Tra Nhieu.</li>
        <li>Pause for a local lunch and see the area from the water on a boat ride.</li>
      </ul></section>
      <section class="village-section"><h3>Full description</h3>
        <p>Leave the Old Town behind and explore the countryside around Tra Nhieu by bicycle. The village paths give you time to slow down and notice the landscape and daily life along the way.</p>
        <p>During the experience, sit down for a local lunch. A boat ride offers another view of the area before the tour ends. The route and stops can change, so check the details for your chosen date when booking.</p>
      </section>
      <section class="village-section"><h3>How the tour unfolds</h3><ol class="village-itinerary">
        <li><strong>Ride into the countryside</strong><p>Explore the quieter paths around Tra Nhieu by bicycle.</p></li>
        <li><strong>Enjoy lunch</strong><p>Take a break and share a local meal.</p></li>
        <li><strong>See the river by boat</strong><p>Continue the experience on the water. Confirm the latest route and end point with the booking provider.</p></li>
      </ol></section>
      <section class="village-section"><h3>Included</h3><p>Bicycle tour, lunch, and boat ride. Check the booking listing for the full inclusions and meeting instructions.</p></section>
      <section class="village-section"><h3>Booking and cancellation</h3><p>Choose a date on GetYourGuide to see current departure times, prices, and cancellation terms before paying.</p></section>
      <section class="village-section"><h3>Good to know</h3><p>Wear comfortable clothes for cycling and bring sun protection. Check your meeting point and any additional requirements in your booking confirmation.</p></section>`;
    extra.hidden = false;
    document.querySelector(".detail-copy h2").textContent = "About this tour";
    document.querySelector(".booking-overline").textContent = "TRA NHIEU · HOI AN";
    document.getElementById("booking-title").textContent = "Find your place on the tour";
    document.getElementById("booking-description").textContent = "See available dates and the current price for your group.";
  }
  if (key === "calligraphy") {
    document.body.classList.add("calligraphy-page");
    const gallery = document.getElementById("cocktail-gallery");
    gallery.innerHTML = '<img src="image(20260923-103745).png" alt="Guest practicing calligraphy with a teacher" loading="lazy"><img src="743811501_18001909043957289_4521587935079853568_n.jpg" alt="Tea being poured into cups" loading="lazy"><img src="image(20260923-103758).png" alt="Calligraphy lesson in Hoi An" loading="lazy"><img src="611383074_17978714378957289_7852468900373837753_n.jpg" alt="Guest arranging tea at a table" loading="lazy">';
    gallery.hidden = false;
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
  if (key === "tra-nhieu") booking.firstChild.textContent = "See dates & prices ";
  if (!tour.direct) {
    booking.textContent = "Browse available tours ↗";
    document.getElementById("booking-description").textContent = "This experience does not yet have its own public checkout page.";
    document.getElementById("booking-note").textContent = "The button opens our tour collection. Dates and availability for this experience are not yet shown here.";
  } else {
    document.getElementById("booking-note").textContent = key === "cocktails" ? "Booking and payment are handled by GetYourGuide." : key === "tra-nhieu" ? "Booking opens on GetYourGuide." : "Checkout opens on GetYourGuide in a new tab.";
  }
  for (const [id, other] of Object.entries(tours)) {
    if (id === key) continue;
    const a = document.createElement("a");
    a.href = "experience.html?tour=" + encodeURIComponent(id);
    a.className = "more-tour-card";
    const img = document.createElement("img");
    img.src = other.image;
    img.alt = other.alt;
    img.loading = "lazy";
    const label = document.createElement("span");
    label.textContent = other.category;
    const title = document.createElement("strong");
    title.textContent = other.title;
    const summary = document.createElement("p");
    summary.textContent = other.intro;
    const arrow = document.createElement("b");
    arrow.textContent = "↗";
    const copy = document.createElement("span");
    copy.className = "more-tour-copy";
    copy.append(title, summary, label);
    a.append(img, copy, arrow);
    document.getElementById("more-links").append(a);
  }
}
document.getElementById("year").textContent = new Date().getFullYear();
