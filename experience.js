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
    title: "Hoi An: Village Cycling, Traditional Crafts & Local Lunch",
    category: "COUNTRYSIDE",
    intro: "Cycle through Tra Nhieu Village, meet local families and craftspeople, enjoy a home-cooked lunch, and return along the Thu Bon River by boat.",
    description: "A guided ride through Hoi An’s countryside, with village crafts, a local family lunch and a river cruise back to town.",
    highlights: [],
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=395%2Cheight=400%2Cdpr=2/tour_img/53ad56a901851c09c89ce4b494337d899395432a0b3787bfc10988444d03cbf8.jpeg",
    alt: "Cyclists exploring Tra Nhieu Village",
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
    document.body.classList.add("cocktails-page", "village-page");
    const gallery = document.getElementById("cocktail-gallery");
    gallery.innerHTML = '<img src="cocktail%204.jpg" alt="Guests enjoying drinks in Hoi An" loading="lazy"><img src="cocktail%2015.jpg" alt="Bartender preparing a cocktail" loading="lazy"><img src="cocktail%208.jpg" alt="Cocktails at a Hoi An bar" loading="lazy"><img src="cocktail%2022.jpeg" alt="Cocktails served at an evening bar" loading="lazy">';
    gallery.hidden = false;
    const facts = document.getElementById("cocktail-facts");
    facts.innerHTML = '<div><span>Duration</span><strong>4 hours</strong></div><div><span>Group</span><strong>Up to 8 guests</strong></div><div><span>Guide</span><strong>English speaking</strong></div><div><span>Meeting point</span><strong>26 Phan Boi Chau</strong></div>';
    facts.hidden = false;
    document.querySelector(".detail-copy h2").textContent = "About this tour";
    document.querySelector(".booking-overline").textContent = "BOOK THIS TOUR";
    document.getElementById("booking-title").textContent = "Check availability";
    document.getElementById("booking-description").textContent = "Select your date and guests to see current times and prices.";
  }
  if (key === "tra-nhieu") {
    document.body.classList.add("cocktails-page", "village-page");
    const gallery = document.getElementById("cocktail-gallery");
    gallery.innerHTML = '<img src="https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=195%2Cheight=195%2Cdpr=2/tour_img/5efd487ccd3fdcb3b9a1ba929cf48abae40d5c3d21ec017da9076e4fab8574b1.jpeg" alt="Cycling tour in the Hoi An countryside" loading="lazy"><img src="https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=195%2Cheight=195%2Cdpr=2/tour_img/463dac488cb4d86cf529fce95cc05d4aa7d15e1a7688225b69392e01c310f9e1.jpeg" alt="Village craft experience" loading="lazy"><img src="https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=195%2Cheight=195%2Cdpr=2/tour_img/9eb48b10fb83ce90c13de5b2b98956c72648edb81a59885339f44d317249d352.jpg" alt="Local experience in Tra Nhieu" loading="lazy"><img src="https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=195%2Cheight=195%2Cdpr=2/tour_img/54a174ef701b9476b942bbc9602351306075a353d679c4ef722f6a1b96a55036.jpg" alt="Hoi An village cycling tour" loading="lazy">';
    gallery.hidden = false;
    const caption = document.getElementById("gallery-caption");
    caption.textContent = "Photos from this experience. The route and stops may vary.";
    caption.hidden = false;
    const facts = document.getElementById("cocktail-facts");
    facts.innerHTML = '<div><span>Duration</span><strong>4 hours 30 minutes</strong></div><div><span>Group</span><strong>Up to 10 guests</strong></div><div><span>Guide</span><strong>English speaking</strong></div><div><span>Pickup</span><strong>Available in Hoi An</strong></div>';
    facts.hidden = false;
    const extra = document.getElementById("cocktail-extra");
    extra.innerHTML = `
      <section class="village-section"><h3>Highlights</h3><ul class="village-highlights">
        <li>Cycle along peaceful village roads with a local guide.</li>
        <li>Meet local families and see traditional boat building, rice paper making and mat weaving.</li>
        <li>Learn about local fishing techniques and try your hand at a village craft.</li>
        <li>Enjoy a home-cooked lunch and a boat ride on the Thu Bon River.</li>
      </ul></section>
      <section class="village-section"><h3>Full description</h3>
        <p>Meet your guide and cycle out of Hoi An along quiet roads, green fields and shaded village paths. Along the way, learn about daily life in the countryside and the communities beside the river.</p>
        <p>In Tra Nhieu Village, meet families who keep traditional livelihoods alive. See wooden fishing boats and bamboo basket boats being made, discover how rice paper is produced, and try weaving a sleeping mat. Your guide will introduce the people and stories behind each craft and explain local fishing techniques.</p>
        <p>After exploring the village, sit down for a home-cooked lunch with a local family. Finish with a boat cruise of about 30 minutes along the Thu Bon River back to Hoi An.</p>
      </section>
      <section class="village-section"><h3>How the tour unfolds</h3><ol class="village-itinerary">
        <li><strong>Cycle from Hoi An</strong><p>Start with a guided ride through the countryside on quiet village roads.</p></li>
        <li><strong>Visit Tra Nhieu Village</strong><p>Meet families, discover local fishing traditions and see crafts including mat weaving and rice paper making.</p></li>
        <li><strong>Share lunch with a family</strong><p>Enjoy a home-cooked meal in the village.</p></li>
        <li><strong>Return by river</strong><p>Take a scenic boat cruise along the Thu Bon River. Stops can change with local conditions.</p></li>
      </ol></section>
      <section class="village-section"><h3>Included</h3><ul class="village-highlights"><li>English-speaking local guide and bicycle</li><li>Bottled water and lunch with a local family</li><li>Thu Bon River boat cruise</li><li>Entrance and activity fees</li></ul></section>
      <section class="village-section"><h3>Booking and cancellation</h3><p>The listing offers free cancellation up to 24 hours before the tour and a reserve now, pay later option. Check the terms for your selected date before confirming.</p></section>
      <section class="village-section"><h3>Good to know</h3><p>You need to be able to ride a bicycle. Bring comfortable shoes and clothes, a hat, sunscreen and rain gear. Pickup is available within the listed Hoi An area; confirm your address and departure time during checkout.</p></section>`;
    extra.hidden = false;
    document.querySelector(".detail-copy h2").textContent = "About this tour";
    const rating = document.createElement("a");
    rating.className = "tour-rating";
    rating.href = tour.bookingUrl;
    rating.target = "_blank";
    rating.rel = "noopener noreferrer";
    rating.textContent = "★ 5.0 · 3 reviews on GetYourGuide ↗";
    document.getElementById("tour-title").after(rating);
    document.querySelector(".booking-overline").textContent = "TRA NHIEU · HOI AN";
    document.getElementById("booking-title").textContent = "Find your place on the tour";
    document.getElementById("booking-description").textContent = "See available dates and the current price for your group.";
  }
  if (key === "calligraphy") {
    document.body.classList.add("cocktails-page", "village-page", "calligraphy-page");
    const gallery = document.getElementById("cocktail-gallery");
    gallery.innerHTML = '<img src="image(20260923-103745).png" alt="Guest practicing calligraphy with a teacher" loading="lazy"><img src="743811501_18001909043957289_4521587935079853568_n.jpg" alt="Tea being poured into cups" loading="lazy"><img src="image(20260923-103758).png" alt="Calligraphy lesson in Hoi An" loading="lazy"><img src="611383074_17978714378957289_7852468900373837753_n.jpg" alt="Guest arranging tea at a table" loading="lazy">';
    gallery.hidden = false;
  }
  if (key === "coffee" || key === "tailor") {
    document.body.classList.add("cocktails-page", "village-page");
  }
  if (key !== "tra-nhieu") {
    const details = {
      cocktails: {
        highlights: ["Discover tucked-away cocktail bars with a local guide", "Taste local food as you walk through Hoi An Old Town", "Finish the evening with a drink at a local bar"],
        description: ["Meet your guide at 26 Phan Boi Chau and set out on foot through Hoi An Old Town. Between its familiar streets are small bars, food stops and places worth slowing down for.", "The evening includes two cocktail stops, a street food stop, dessert at a café and a final local bar. Your guide will share stories along the way and bring you back to the meeting point. The venues and menu can change."],
        itinerary: [["Meet in the Old Town", "Find your guide at 26 Phan Boi Chau before setting out on foot."], ["Cocktails and local food", "Visit two cocktail spots and a street food stop with your guide."], ["Dessert and one last bar", "Pause for dessert at a café, then finish at a local bar before returning to the meeting point."]],
        included: ["English-speaking local guide", "Food and drinks served as part of the tour", "Vegetarian food and non-alcoholic alternatives available"],
        before: "For adults aged 18 and over. Extra orders, personal expenses and tips are not included. Confirm the menu, stops and departure time when booking."
      },
      coffee: {
        highlights: ["Explore quieter corners of Hoi An", "Get to know the town through its coffee culture", "Take time to taste and talk along the way"],
        description: ["Step away from Hoi An’s busiest streets and discover the cafés and everyday coffee rituals that shape local life. This is an invitation to slow down, enjoy a cup and notice the places around you.", "Specific cafés, drinks, duration and meeting details will be confirmed when this experience becomes available to book."],
        itinerary: [["Set out in Hoi An", "Begin with a local introduction to the town and its coffee culture."], ["Spend time over coffee", "Visit café spaces and enjoy a slower look at the people and places behind each cup. The exact route is confirmed before booking."]],
        included: ["Ask us for the current inclusions and drink options before reserving."],
        before: "The public booking page for this individual experience is not yet available. Contact the team for the route, duration, meeting point and price."
      },
      calligraphy: {
        highlights: ["Try your hand at calligraphy", "Spend time with a local teacher", "Enjoy tea in a relaxed setting"],
        description: ["Take a quieter pause in Hoi An and get an introduction to the care and attention behind calligraphy. Watch, try the art yourself and share tea as part of the experience.", "Session length, the exact meeting point and any materials you can take home will be confirmed before booking."],
        itinerary: [["Meet your teacher", "Begin with an introduction to calligraphy and the tools used."], ["Practice and pause for tea", "Try your hand at the art and enjoy time around the tea table. The exact order may vary."]],
        included: ["Ask us to confirm materials, tea and any take-home work before reserving."],
        before: "The public booking page for this individual experience is not yet available. Contact the team to confirm dates, duration and price."
      },
      tailor: {
        highlights: ["Meet the people behind Hoi An’s tailoring tradition", "See the care involved in a fitting", "Learn more about local craftsmanship"],
        description: ["Hoi An is known for its tailoring. This experience brings you closer to the people and craft behind a garment, from the conversation about what you want to the details that make a fitting personal.", "The visit does not currently have a separate public booking page. The specific workshop, duration and whether any garment or fitting is included must be confirmed before reserving."],
        itinerary: [["Discover the workshop", "Meet local makers and learn about their work."], ["Look closer at the craft", "Explore the fitting and making process. The exact activities depend on the confirmed visit."]],
        included: ["Ask us to confirm workshop access, materials and any garment costs before reserving."],
        before: "A made-to-measure garment is not included unless explicitly confirmed. Contact the team for dates, duration, price and meeting details."
      }
    }[key];
    const facts = document.getElementById("cocktail-facts");
    if (key !== "cocktails") {
      facts.innerHTML = '<div><span>Location</span><strong>Hoi An</strong></div><div><span>Schedule</span><strong>Confirm before booking</strong></div>';
      facts.hidden = false;
    }
    const extra = document.getElementById("cocktail-extra");
    const list = items => '<ul class="village-highlights">' + items.map(item => '<li>' + item + '</li>').join('') + '</ul>';
    extra.innerHTML = '<section class="village-section"><h3>Highlights</h3>' + list(details.highlights) + '</section>' +
      '<section class="village-section"><h3>Full description</h3>' + details.description.map(paragraph => '<p>' + paragraph + '</p>').join('') + '</section>' +
      '<section class="village-section"><h3>How the experience unfolds</h3><ol class="village-itinerary">' + details.itinerary.map(([title, copy]) => '<li><strong>' + title + '</strong><p>' + copy + '</p></li>').join('') + '</ol></section>' +
      '<section class="village-section"><h3>' + (key === "cocktails" ? "Included" : "Inclusions") + '</h3>' + list(details.included) + '</section>' +
      '<section class="village-section"><h3>Before you go</h3><p>' + details.before + '</p></section>';
    extra.hidden = false;
    document.querySelector(".detail-copy h2").textContent = "About this tour";
    document.querySelector(".booking-overline").textContent = "HOI AN · " + tour.category;
    document.getElementById("booking-title").textContent = key === "cocktails" ? "Check availability" : "Ask about this experience";
    if (key === "cocktails") document.getElementById("booking-description").textContent = "Select your date and guests to see current times and prices.";
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
