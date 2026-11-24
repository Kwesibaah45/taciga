/* The Apostolic Church International, Georgia District: site script */
/* =====================================================================
   EDIT HERE — all church details live in this block.
   Replace null with real text. Anything left null shows "to be added".
   ===================================================================== */
const ASSEMBLIES = {
  austell: {
    name: "Austell Assembly",
    city: "Austell, Georgia",
    photo: "assets/images/austell-church.jpg",
    tagline: "A family of faith in the west metro.",
    intro: "Worship, the Word and fellowship in the heart of Austell.",
    address: "4798 Austell Road, Austell, GA 30106",
    pastor: "Pastor Gabriel Frimpong",
    phone: "571-409-8322",
    email: "apostolicatlantabranch@gmail.com",
    services: [
      { day: "Sunday",    name: "Sunday Worship",       time: "9:00 – 11:00 AM",     mode: "In person", where: "At the church" },
      { day: "Wednesday", name: "Bible Study",          time: "7:00 – 9:00 PM",      mode: "Online",    where: "On Zoom, together with Gwinnett International", zoom: true },
      { day: "Friday",    name: "Friday Night Prayers", time: "10:00 PM – 12:00 AM", mode: "In person", where: "In the church auditorium" }
    ]
  },
  gwinnett: {
    name: "Gwinnett International Assembly",
    city: "Peachtree Corners, Georgia",
    photo: "assets/images/gwinnett-church.jpg",
    tagline: "Many nations. One Spirit.",
    intro: "An international congregation worshipping together in Gwinnett.",
    address: "4001 Wetherburn Way NW, Suite B, Peachtree Corners, GA 30092",
    pastor: "Pastor Gabriel Frimpong",
    phone: "571-409-8322",
    email: "apostolicatlantabranch@gmail.com",
    services: [
      { day: "Sunday",    name: "Sunday Worship",       time: "8:30 – 10:40 AM",     mode: "In person",  where: "At the church" },
      { day: "Wednesday", name: "Bible Study",          time: "7:00 – 9:00 PM",      mode: "Online",     where: "On Zoom, together with Austell Assembly", zoom: true },
      { day: "Friday",    name: "Friday Night Prayers", time: "10:00 PM – 12:00 AM", mode: "At Austell", where: "In person at Austell Assembly only", at: "4798 Austell Road, Austell, GA 30106" }
    ]
  }
};

const TZ = "EST"; // every time on the site is Eastern Time
const CASHAPP_TAG = "$atlap2020"; // e.g. "$ApostolicAtlanta" — set this and the Cash App card fills in
const ZOOM = { url: "https://zoom.us/j/293417878", passcode: "4798" };

/* Gallery: add photo files next to index.html and list them here.
   album must match one of ALBUMS. Albums with no photos show a "coming soon" tile. */
const ALBUMS = ["Our Church", "Worship", "Events", "Leadership"];
const PHOTOS = [
  { type: "video", src: "assets/videos/worship-a.mp4", poster: "assets/images/worship-a-poster.jpg", album: "Worship", caption: "Worship moment" },
  { type: "video", src: "assets/videos/worship-b.mp4", poster: "assets/images/worship-b-poster.jpg", album: "Worship", caption: "Worship moment" },
  { src: "assets/images/paint-20.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-01.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-09.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { type: "video", src: "assets/videos/lovefest-2024.mp4", poster: "assets/images/lovefest-2024-poster.jpg", album: "Events", folder: "LoveFest", caption: "TAC Lovefest 2024" },
  { src: "assets/images/lovefest-01.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-02.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-03.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-04.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-05.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-06.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-07.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-08.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-09.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-10.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-11.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-12.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-13.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-14.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-15.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-16.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-17.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-18.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-19.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-20.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-21.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-22.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-23.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-24.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-25.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-26.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-27.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-28.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-29.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-30.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-31.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-32.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-33.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-34.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-35.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/lovefest-36.jpg", album: "Events", folder: "LoveFest", caption: "LoveFest" },
  { src: "assets/images/paint-02.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-03.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-04.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-05.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-06.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-07.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-08.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-10.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-11.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-12.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-13.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-14.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-15.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-16.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-17.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-18.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-19.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-21.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-22.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-23.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/paint-24.jpg", album: "Events", folder: "Paint In the Park", caption: "Paint In the Park" },
  { src: "assets/images/austell-church.jpg", album: "Our Church", caption: "Austell Assembly, 4798 Austell Road, Austell, GA 30106" },
  { src: "assets/images/gwinnett-church.jpg", album: "Our Church", caption: "Gwinnett International Assembly, 4001 Wetherburn Way NW, Peachtree Corners" },
  { src: "assets/images/district-pastor.jpg", album: "Leadership", caption: "Pastor Gabriel Frimpong, District Pastor" },
  { src: "assets/images/elder-adarkwa.jpg", album: "Leadership", caption: "Elder Samuel Adarkwa, District Presiding Elder" },
  { src: "assets/images/elder-obo.jpg", album: "Leadership", caption: "Elder William Obo" }
];

const TENETS = [
  { t: "The Unity of the Godhead and the Trinity of the persons therein.",
    r: "Numbers 6:22-27; Isaiah 6:3; Matthew 3:16-17; 28:19; John 15:26; 1 John 5:7" },
  { t: "The utter depravity of human nature, the necessity for Repentance and Regeneration, and the Eternal Doom of the finally Impenitent.",
    r: "Psalm 51:5; Matthew 25:41, 46; 2:13; John 3:3; Acts 2:38; 17:30; Romans 3:10-18; Ephesians 2:13; 1 John 5:19; Revelation 20:12-15; 21:8" },
  { t: "The Virgin Birth, Sinless Life, Atoning Death, Triumphant Resurrection, Ascension and Abiding Intercession of our Lord Jesus Christ; His Second Coming and Millennial Reign upon Earth.",
    r: "Zechariah 14:4; Matthew 1:23; 24:30; 28:5-6; Luke 1:35; John 14:30; 20:3-18; Acts 1:9-11; Romans 1:4; 5:11; 2 Corinthians 5:19, 21; Philippians 2:6-11; 1 John 2:1-2; Revelation 1:7; 20:1-5" },
  { t: "Justification and Sanctification of the Believer through the finished work of Christ.",
    r: "Romans 3:24; 5:1-9; 6:6, 11-14; 8:33; 10:4; 1 Corinthians 6:11; 2 Corinthians 7:1; Hebrews 10:10" },
  { t: "The Baptism of the Holy Ghost for Believers with signs following.",
    r: "Luke 3:16; 11:9-13; 24:49; John 7:37-39; Acts 1:4-5; 2:1-4, 38-39; 10:46; 19:6; Ephesians 5:18" },
  { t: "The Nine Gifts of the Holy Ghost for the edification, exhortation and comfort of the Church, which is the Body of Christ.",
    r: "1 Corinthians 12:4-11; 14:3; 12:26; Ephesians 1:23; 4:12" },
  { t: "The Sacraments of Baptism by Immersion and the Lord’s Supper.",
    r: "Matthew 28:19; Mark 16:16; Luke 22:19-20; Acts 2:38; 8:12, 36-28; 19:5; Romans 6:3-7; 1 Corinthians 10:15-21; 11:23-32" },
  { t: "The Divine Inspiration and Authority of the Holy Scriptures.",
    r: "2 Timothy 3:16; 2 Peter 1:21" },
  { t: "Church Government by Apostles, Prophets, Evangelists, Pastors, Teachers, Elders, and Deacons.",
    r: "Acts 6:2-3, 6; 13:1-3; 20:28; 2 Corinthians 11:28; Ephesians 4:8-16; 1 Timothy 3:1-3; Titus 1:5-9; Hebrews 13:17; 1 Peter 5:1-4" },
  { t: "The possibility of falling from Grace.",
    r: "Romans 11:20-22; Colossians 1:21-23; Hebrews 6:4-6; 10:26-29, 38-39; 2 Peter 2:20-22; Revelation 22:19" },
  { t: "The Obligatory nature of Tithes and Offerings.",
    r: "Genesis 14:20; 28:22; Proverbs 3:9-10; Malachi 3:10; 1 Corinthians 16:2; 2 Corinthians 9:6-7; Hebrews 7:1-10" }
];

const LEADERS = [
  { level: 3, name: "Pastor Gabriel Frimpong",    role: "District Pastor", photo: "assets/images/district-pastor.jpg" },
  { level: 4, name: "Elder Samuel Adarkwa",       role: "District Presiding Elder", photo: "assets/images/elder-adarkwa.jpg" },
  { level: 5, name: "Elder William Obo",          role: "Elder", photo: "assets/images/elder-obo.jpg" },
  { level: 5, name: "Elder Stephen Tetteh",       role: "Elder" },
  { level: 5, name: "Elder George Adarkwa", role: "Elder (Retired)" },
  { level: 5, name: "Elder Kwabena Nimako", role: "Elder (Retired)" }
];

const CORE_VALUES = [
  "Holding the Word of God in high esteem",
  "Centrality of the Holy Spirit in all affairs",
  "Abhorring immorality",
  "Love for prayer",
  "Accountable stewardship",
  "Commitment to the welfare of members",
  "Honoring each other and valuing individual gifting",
  "Recognizing the significance of Women’s Ministry",
  "Respect and value for children as an integral and essential part of the Church",
  "Maintaining our unique Apostolic identity",
  "Sacrificial giving"
];

const BELIEFS = [
  { k: "The Saviour", t: "Jesus Christ", p: "Salvation by grace through faith in the death and resurrection of Jesus Christ.", v: "“I am the way, the truth, and the life.”", r: "JOHN 14:6" },
  { k: "The Spirit",  t: "The Holy Ghost", p: "The baptism of the Holy Spirit and the gifts He gives for the building up of the church.", v: "“Ye shall receive power, after that the Holy Ghost is come upon you.”", r: "ACTS 1:8" },
  { k: "The Word",    t: "The Scriptures", p: "The Bible as the inspired Word of God, our rule of faith and life.", v: "“All scripture is given by inspiration of God.”", r: "2 TIMOTHY 3:16" },
  { k: "The Church",  t: "Fellowship", p: "One body gathered in love, carrying one another’s burdens.", v: "“Not forsaking the assembling of ourselves together.”", r: "HEBREWS 10:25" },
  { k: "The Table",   t: "Breaking of Bread", p: "Remembering the Lord’s death in Holy Communion until He comes.", v: "“This do in remembrance of me.”", r: "LUKE 22:19" },
  { k: "The Altar",   t: "Prayer", p: "A praying church, seeking God together in faith and fasting.", v: "“Pray without ceasing.”", r: "1 THESSALONIANS 5:17" }
];

const MINISTRIES = [
  { t: "Men’s Movement",           p: "Building godly men, husbands and fathers through fellowship, prayer and the Word.", i: "men" },
  { t: "Women’s Movement",         p: "Women growing together in prayer, service and encouragement.", i: "women" },
  { t: "Youth and Young Adult",    p: "A place for young people to grow in faith, find purpose and lead.", i: "youth" },
  { t: "Sister’s Network",         p: "Sisters connecting, supporting and building one another up in Christ.", i: "sisters" },
  { t: "Children’s Ministry",      p: "Teaching children to know and love Jesus from an early age.", i: "kids" }
];

const EVENTS = [
  { mon: "TBA", day: "—", t: "District Convention",        p: "Both assemblies gather for worship and the Word.", where: "Location to be added" },
  { mon: "TBA", day: "—", t: "Joint Prayer & Fasting",     p: "A season of prayer for the district.",             where: "Both assemblies" },
  { mon: "TBA", day: "—", t: "Youth Fellowship Night",     p: "Worship, games and fellowship for young people.",   where: "Location to be added" }
];

/* ===================================================================== */

const tbd = (v, label = "To be added") => v ? esc(v) : `<span class="tbd">${label}</span>`;
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

/* --- Arch window artwork (Austell = single flame glass, Gwinnett = many-colored glass) --- */
function archArt(kind, uid){
  const arch = "M20 250 V105 A80 80 0 0 1 180 105 V250 Z";
  if (kind === "austell"){
    return `<svg viewBox="0 0 200 250" role="img" aria-label="Arched window glowing with warm light">
      <defs>
        <linearGradient id="ga${uid}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#FFECCB"/><stop offset=".35" stop-color="#FFA97B"/><stop offset=".65" stop-color="#EB895B"/><stop offset="1" stop-color="#E00000"/>
        </linearGradient>
        <radialGradient id="gr${uid}" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="#FFECCB" stop-opacity=".85"/><stop offset="1" stop-color="#FFECCB" stop-opacity="0"/></radialGradient>
      </defs>
      <path d="${arch}" fill="url(#ga${uid})"/>
      <path class="arch-glow" d="${arch}" fill="url(#gr${uid})"/>
      <path d="M100 25 V250 M20 135 H180" stroke="#0e0c0b" stroke-width="7"/>
      <path d="${arch}" fill="none" stroke="#0e0c0b" stroke-width="8"/>
    </svg>`;
  }
  const colors = ["#E00000","#FFA97B","#FFECCB","#EB895B","#b80000","#FFA97B","#EB895B","#FFECCB"];
  let panes = "", n = 0;
  for (let r = 0; r < 6; r++) for (let c = 0; c < 4; c++) {
    panes += `<rect class="pane" style="animation-delay:${((r*7 + c*3) % 11) * .45}s" x="${20 + c*40}" y="${25 + r*38}" width="40" height="38" fill="${colors[(r*3 + c*5 + n++) % colors.length]}"/>`;
  }
  return `<svg viewBox="0 0 200 250" role="img" aria-label="Arched stained-glass window in many colors">
    <defs><clipPath id="cp${uid}"><path d="${arch}"/></clipPath>
      <linearGradient id="sh${uid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient></defs>
    <g clip-path="url(#cp${uid})">${panes}
      <path d="M60 0 V250 M100 0 V250 M140 0 V250 M0 63 H200 M0 101 H200 M0 139 H200 M0 177 H200 M0 215 H200" stroke="#1d1d1f" stroke-width="3.5"/>
      <rect width="200" height="250" fill="url(#sh${uid})"/></g>
    <path d="${arch}" fill="none" stroke="#1d1d1f" stroke-width="7"/>
  </svg>`;
}

const ICONS = {
  men:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="20" cy="13" r="6"/><path d="M8 34c1.5-7 6.5-10 12-10s10.5 3 12 10"/></svg>',
  women:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="14" cy="14" r="5"/><circle cx="27" cy="14" r="5"/><path d="M4 34c1-6 5-9 10-9s9 3 10 9M18 34c1-6 4.5-9 9-9s8 3 9 9"/></svg>',
  youth:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 5l4.3 8.7 9.7 1.4-7 6.8 1.7 9.6L20 27l-8.7 4.5 1.7-9.6-7-6.8 9.7-1.4z"/></svg>',
  kids:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M20 34s-13-7.5-13-17a7 7 0 0 1 13-3.6A7 7 0 0 1 33 17c0 9.5-13 17-13 17z"/></svg>',
  music:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 29V9l17-4v20"/><circle cx="11" cy="29" r="4"/><circle cx="28" cy="25" r="4"/></svg>',
  sisters:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="20" r="8"/><circle cx="27" cy="20" r="8"/></svg>',
  evangel:'<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="20" cy="20" r="14"/><path d="M6 20h28M20 6c4 4 6 9 6 14s-2 10-6 14c-4-4-6-9-6-14s2-10 6-14z"/></svg>'
};
const PIN = '<svg class="pin" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>';

/* --- Render home bits --- */
document.querySelectorAll("[data-bind]").forEach(el => {
  const [a, f] = el.dataset.bind.split(".");
  el.textContent = ASSEMBLIES[a][f];
});
let uid = 0;
document.querySelectorAll("[data-art]").forEach(el => el.innerHTML = archArt(el.dataset.art, uid++));

document.getElementById("valuesList").innerHTML = CORE_VALUES.map((v, i) => `<li class="rv" style="--d:${(i % 3) * .09}s">${esc(v)}</li>`).join("");

if (document.getElementById("beliefGallery")) document.getElementById("beliefGallery").innerHTML = BELIEFS.map((b, i) => `
  <article class="card rv" style="--d:${Math.min(i, 3) * .1}s">
    <span class="kicker">${b.k}</span>
    <h3>${b.t}</h3>
    <p>${b.p}</p>
    <p class="ref">${b.v}<small>${b.r} · KJV</small></p>
  </article>`).join("");

if (document.getElementById("compare")) document.getElementById("compare").innerHTML = ["austell","gwinnett"].map(id => {
  const a = ASSEMBLIES[id];
  return `<div class="col rv ${id === "austell" ? "from-left" : "from-right"}">
    <div class="art">${archArt(id, uid++)}</div>
    <h3>${esc(a.name)}</h3>
    <p class="city">${esc(a.city)}</p>
    <div class="actions"><a class="pill sm" href="#${id}">Learn more</a></div>
    <dl>
      ${a.services.map(s => `<dt>${esc(s.name)}</dt><dd><span class="cmp-day">${esc(s.day)}s · ${TZ}</span> ${tbd(s.time, "Time to be added")}<span class="where">${esc(s.where)}</span></dd>`).join("")}
      <dt>Pastor</dt><dd>${tbd(a.pastor, "Name to be added")}</dd>
      <dt>Address</dt><dd>${tbd(a.address, "Address to be added")}</dd>
    </dl>
  </div>`;
}).join("");

function initialsOf(name){
  const core = name.replace(/\(.*?\)/g, "").replace(/\b(Apostle|Pastor|Elder|Dr\.?|Rev\.?)\s+/g, "").trim().split(/\s+/);
  return (core[0][0] + (core.length > 1 ? core[core.length - 1][0] : "")).toUpperCase();
}

document.getElementById("ministriesGrid").innerHTML = MINISTRIES.map(m => `
  <article class="mcard">${ICONS[m.i]}<h3>${m.t}</h3><p>${m.p}</p></article>`).join("");

document.getElementById("eventsList").innerHTML = EVENTS.map(e => `
  <article class="event">
    <div class="date">${esc(e.mon)}<b>${esc(e.day)}</b></div>
    <div><h3>${esc(e.t)} <span class="chip">Sample</span></h3><p>${esc(e.p)} · ${esc(e.where)}</p></div>
    <a class="pill sm ghost" href="#visit">Details</a>
  </article>`).join("");

/* --- Zoom join block (Bible Study) --- */
function zoomBlock(){
  return `<a class="pill sm" href="${ZOOM.url}" target="_blank" rel="noopener">Join on Zoom</a>
    <span class="svc-addr">Meeting ID 293 417 878 · Passcode ${esc(ZOOM.passcode)}</span>`;
}

/* --- Service time card --- */
function serviceCard(s, a){
  const addr = s.at || a.address;
  const foot = s.zoom
    ? zoomBlock()
    : `<a class="pill sm ghost" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}" target="_blank" rel="noopener">Get directions</a>
       <span class="svc-addr">${esc(addr)}</span>`;
  return `<article class="svc">
    <div class="svc-top"><span class="svc-day">${esc(s.day.slice(0,3).toUpperCase())}</span><span class="svc-mode${s.zoom ? " online" : ""}">${esc(s.mode)}</span></div>
    <h3 class="svc-name">${esc(s.name)}</h3>
    <p class="svc-when"><span>Every ${esc(s.day)} · ${TZ}</span><b>${s.time ? esc(s.time) : '<span class="tbd">Time to be added</span>'}</b></p>
    <p class="svc-where">${esc(s.where)}</p>
    <div class="svc-foot">${foot}</div>
  </article>`;
}

/* --- Assembly pages --- */
function assemblyPage(id){
  const a = ASSEMBLIES[id];
  const other = id === "austell" ? "gwinnett" : "austell";
  return `
  <div class="lnav"><div class="wrap"><strong>${esc(a.name.replace(" Assembly",""))}</strong><a class="pill sm" href="#visit">Plan a visit</a></div></div>
  <header class="ahero">
    <div class="wrap">
      <p class="eyebrow">${esc(a.city)}</p>
      <h1>${esc(a.name)}</h1>
      <p class="sub">${esc(a.intro)}</p>
      <div class="actions"><a class="pill" href="#visit">Plan a visit</a><a class="more" href="#give">Give</a></div>
      ${a.photo
        ? `<figure class="building"><div class="bimg"><img src="${esc(a.photo)}" alt="${esc(a.name)} church building" width="1536" height="1024"></div><figcaption>${esc(a.address || a.city)}</figcaption></figure>`
        : `<div class="art">${archArt(id, uid++)}</div>`}
    </div>
  </header>
  <section class="section mist">
    <div class="wrap">
      <h2 class="headline">Service times.</h2>
      <p class="lede">Join us for worship, the Word and prayer. All times are Eastern Time (EST).</p>
      <div class="svc-grid">${a.services.map(s => serviceCard(s, a)).join("")}</div>
      <div class="mapbox">
        <div>${PIN}<strong>${tbd(a.address, "Address to be added")}</strong><span>${esc(a.city)}</span></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <h2 class="headline">Meet your pastor.</h2>
      <div class="pastor-card">
        <img class="pastor-photo" src="assets/images/district-pastor.jpg" alt="Portrait of ${esc(a.pastor)}" width="160" height="160">
        <h3>${tbd(a.pastor, "Name to be added")}</h3>
        <span class="pastor-rule" aria-hidden="true"></span>
        <p>District Pastor</p>
      </div>
    </div>
  </section>
  <section class="section night on-night">
    <div class="wrap">
      <h2 class="headline">Get in touch.</h2>
      <div class="facts">
        <div class="fact" style="background:var(--night-2);color:#f5f5f7"><span class="k" style="color:#a8a29e">Phone</span><span class="v">${tbd(a.phone)}</span></div>
        <div class="fact" style="background:var(--night-2);color:#f5f5f7"><span class="k" style="color:#a8a29e">Email</span><span class="v" style="font-size:18px;overflow-wrap:anywhere">${a.email ? `<a href="mailto:${esc(a.email)}" style="color:var(--glow)">${esc(a.email)}</a>` : tbd(a.email)}</span></div>
        <div class="fact" style="background:var(--night-2);color:#f5f5f7"><span class="k" style="color:#a8a29e">Our sister assembly</span><span class="v"><a href="#${other}" style="color:var(--glow)">${esc(ASSEMBLIES[other].name)} ›</a></span></div>
      </div>
    </div>
  </section>`;
}
document.getElementById("view-austell").innerHTML = assemblyPage("austell");
document.getElementById("view-gwinnett").innerHTML = assemblyPage("gwinnett");

/* --- Gallery arrows --- */


/* --- Mobile menu --- */
const gnav = document.getElementById("gnav"), menuBtn = document.getElementById("menuBtn");
menuBtn.onclick = () => {
  const open = gnav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};

/* --- Hash router --- */
const VIEWS = ["home","about","austell","gwinnett","ministries","events","media","give","visit"];
function route(){
  let v = location.hash.slice(1);
  if (!VIEWS.includes(v)) v = "home";
  document.querySelectorAll("[data-view]").forEach(s => s.hidden = s.dataset.view !== v);
  document.querySelectorAll("#navlist a").forEach(a => { if (a.getAttribute("href") === "#" + v) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  gnav.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false");
  if (window.__closeViewer) window.__closeViewer();
  window.scrollTo(0,0);
  if (v !== "home" && window.__pauseHomeVideo) window.__pauseHomeVideo();
  const viewEl = document.querySelector(`[data-view="${v}"]`);
  autoTag(viewEl);
  armReveal(viewEl);
  if (v === "about") armOrg();
  if (v === "media" && window.__pendingGal && window.__galleryGo){ const [al, fo] = window.__pendingGal.split("|"); window.__galleryGo(al, fo || null); }
  window.__pendingGal = null;
  if (window.__pendingScroll){ const t = document.getElementById(window.__pendingScroll); window.__pendingScroll = null;
    if (t) setTimeout(() => t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 60); }
  requestAnimationFrame(() => window.__motionTick && window.__motionTick());
  emberActive = v === "home";
  if (emberActive) startEmber();
}
window.addEventListener("hashchange", route);

/* --- Visit form (not connected to email yet) --- */
document.getElementById("visitForm").addEventListener("submit", e => {
  e.preventDefault();
  const note = document.getElementById("formNote");
  const name = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  note.hidden = false;
  if (!name || !email) { note.textContent = "Please add your name and email so we can reach you."; return; }
  note.textContent = `Thanks, ${name}. This form is a preview and isn’t connected to an inbox yet, so your message was not sent. Once the site goes live it will reach the assembly you chose.`;
});

/* --- Ember canvas (hero) --- */
const cv = document.getElementById("ember"), ctx = cv.getContext("2d");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
let W = 0, H = 0, sparks = [], emberActive = true, running = false;
function size(){
  const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
  W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d,0,0,d,0,0);
}
function spawn(init){
  return { x: Math.random()*W, y: init ? Math.random()*H : H + 10, r: .6 + Math.random()*2.2,
           vy: .25 + Math.random()*.7, vx: (Math.random()-.5)*.25, a: .25 + Math.random()*.6,
           c: ["224,0,0","255,169,123","255,236,203","235,137,91"][Math.floor(Math.random()*4)], w: Math.random()*6.28 };
}
function frame(){
  ctx.clearRect(0,0,W,H);
  const g = ctx.createRadialGradient(W/2, H*1.05, 0, W/2, H*1.05, Math.max(W*.6, 420));
  g.addColorStop(0,"rgba(224,0,0,.32)"); g.addColorStop(.35,"rgba(235,137,91,.12)"); g.addColorStop(1,"rgba(14,12,11,0)");
  ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
  ctx.globalCompositeOperation = "lighter";
  for (const s of sparks){
    s.w += .02; s.y -= s.vy; s.x += s.vx + Math.sin(s.w)*.25;
    const fade = Math.min(1, s.y / (H*.6));
    ctx.beginPath(); ctx.fillStyle = `rgba(${s.c},${s.a*fade})`;
    ctx.arc(s.x, s.y, s.r, 0, 6.28); ctx.fill();
    if (s.y < -10) Object.assign(s, spawn(false));
  }
  ctx.globalCompositeOperation = "source-over";
}
function loop(){ if (!emberActive){ running = false; return; } frame(); requestAnimationFrame(loop); }
function startEmber(){
  size();
  if (!sparks.length) sparks = Array.from({length: Math.round(Math.min(90, W/12))}, () => spawn(true));
  if (reduce){ frame(); return; }
  if (!running){ running = true; requestAnimationFrame(loop); }
}
addEventListener("resize", () => { size(); if (reduce) frame(); });


/* --- Leadership organizational chart --- */
function orgCard(l, small){
  const av = l.photo
    ? `<img class="av" src="${esc(l.photo)}" alt="Portrait of ${esc(l.name)}" width="88" height="88">`
    : `<span class="av" aria-hidden="true">${esc(initialsOf(l.name))}</span>`;
  return `<div class="org-card${small ? " small" : ""}${l.level === 3 ? " lead" : ""}">${av}
    <div class="txt"><span class="rank">${esc(l.role)}</span><h3>${esc(l.name)}</h3></div></div>`;
}
(function renderOrg(){
  let step = 0, html = "";
  const chain = LEADERS.filter(l => l.level < 5).sort((a, b) => a.level - b.level);
  const leaves = LEADERS.filter(l => l.level === 5);
  chain.forEach((l, i) => {
    html += `<div class="org-node" role="listitem" style="--s:${step++}">${orgCard(l)}</div>`;
    if (i < chain.length - 1 || leaves.length) html += `<span class="org-line" aria-hidden="true" style="--s:${step++}"></span>`;
  });
  if (leaves.length){
    const barStep = step++;
    html += `<div class="org-branch" style="--n:${leaves.length}"><span class="org-bar" aria-hidden="true" style="--s:${barStep}"></span>`;
    const leafStep = step++;
    leaves.forEach((l, i) => {
      html += `<div class="org-leaf"><span class="org-stub" aria-hidden="true" style="--s:${leafStep}"></span>
        <div class="org-node" role="listitem" style="--s:${leafStep + 1 + i * .5}">${orgCard(l, true)}</div></div>`;
    });
    html += `</div>`;
  }
  document.getElementById("org").innerHTML = html;
})();
const org = document.getElementById("org");
const orgIO = ("IntersectionObserver" in window && !reduce)
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting){ org.classList.remove("armed"); org.classList.add("play"); orgIO.unobserve(org); }
    }), { threshold: .12 })
  : null;
function onReveal(el){
  el.classList.add("in");
  el.addEventListener("animationend", function fin(ev){ if (ev.target === el){ el.classList.add("done"); el.removeEventListener("animationend", fin); } });
  el.querySelectorAll("[data-count]").forEach(countUp);
}
function countUp(b){
  const end = +b.dataset.count, t0 = performance.now(), dur = 1400 + end * 40;
  (function tick(t){
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    b.textContent = Math.round(end * e);
    if (k < 1) requestAnimationFrame(tick);
  })(t0);
}
const RV_IO = ("IntersectionObserver" in window && !reduce)
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting){ onReveal(e.target); RV_IO.unobserve(e.target); }
    }), { threshold: .12, rootMargin: "0px 0px -5% 0px" })
  : null;
const AUTO_RV = [
  [".ahero .eyebrow", ""], [".ahero .sub", "", .25], [".ahero .actions", "", .35],
  [".phead p", "", .3],
  [".headline", ""], [".lede", "", .1],
  [".svc", "", "s"], [".fact", "", "s"], [".mcard", "", "s"], [".event", "from-left", "s"],
  [".ph", "", "s"], [".step", "", "s"], [".leader", "zoom"], [".pastor-card", "zoom"], [".mapbox", "zoom"], [".notice", ""],
  [".verse .eyebrow", ""], [".verse blockquote:not(.lit-words)", "zoom"], [".verse cite", "", .3],
  [".seg-wrap", ""], [".tenets-eyebrow", ""], [".form > *", "", "s"], [".give-grid", ""]
];
function autoTag(view){
  if (!view || view.dataset.tagged) return;
  view.dataset.tagged = "1";
  AUTO_RV.forEach(([sel, variant, d]) => {
    view.querySelectorAll(sel).forEach(el => {
      if (el.classList.contains("rv") || el.closest(".lnav")) return;
      el.classList.add("rv"); if (variant) el.classList.add(variant);
      if (d === "s"){
        const sibs = [...el.parentElement.children].filter(c => c.matches(sel));
        el.style.setProperty("--d", (sibs.indexOf(el) % 4) * .09 + "s");
      } else if (d) el.style.setProperty("--d", d + "s");
    });
  });
}
function splitWords(h){
  if (h.dataset.split) return;
  h.dataset.split = "1"; h.classList.remove("rv");
  h.innerHTML = h.textContent.trim().split(/\s+/).map((w, i) => `<span class="hw" style="--i:${i}">${esc(w)}</span>`).join(" ");
}
document.querySelectorAll(".phead h1, .ahero h1").forEach(splitWords);
document.querySelectorAll(".mcard svg :is(path,circle,rect)").forEach(el => el.setAttribute("pathLength", "1"));

function armReveal(view){
  if (!RV_IO) return;
  view.classList.add("rv-on");
  view.querySelectorAll(".rv").forEach(el => { el.classList.remove("in", "done"); RV_IO.observe(el); });
}
function armOrg(){
  if (!orgIO) return;
  org.classList.remove("play"); void org.offsetWidth;
  org.classList.add("armed"); orgIO.observe(org);
}


/* --- Tenets --- */
document.getElementById("tenetsList").innerHTML = TENETS.map((x, i) => `
  <li class="tenet rv" style="--d:${(i % 2) * .08}s">
    <span class="tn" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
    <div><p class="tt">${esc(x.t)}</p><p class="tr">${esc(x.r)}</p></div>
  </li>`).join("");

/* --- Gallery page: albums + iMessage-style viewer --- */
(function gallery(){
  const $ = id => document.getElementById(id);
  const grid = $("photoGrid"), seg = $("galFilters");
  const TABS = ["All", ...ALBUMS];
  const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>';
  seg.innerHTML = `<span class="seg-ind" aria-hidden="true"></span>` + TABS.map(a =>
    `<button type="button" role="tab" class="seg-btn" aria-selected="${a === "All"}" data-a="${esc(a)}">${esc(a)}</button>`).join("");
  const ind = seg.querySelector(".seg-ind");
  let filter = "All", folder = null, shown = [];

  function moveInd(){
    const b = seg.querySelector('[aria-selected="true"]');
    if (!b || !b.offsetWidth) return;
    ind.style.width = b.offsetWidth + "px";
    ind.style.transform = `translateX(${b.offsetLeft - 5}px)`;
  }
  if ("ResizeObserver" in window) new ResizeObserver(moveInd).observe(seg);

  const thumb = p => esc(p.poster || p.src);
  function count(list){
    const v = list.filter(p => p.type === "video").length, ph = list.length - v;
    return [ph ? `${ph} photo${ph > 1 ? "s" : ""}` : "", v ? `${v} video${v > 1 ? "s" : ""}` : ""].filter(Boolean).join(" · ") || "Coming soon";
  }
  function drawAll(){
    grid.className = "albums";
    shown = [];
    grid.innerHTML = ALBUMS.map(a => {
      const items = PHOTOS.filter(p => p.album === a), covers = items.slice(0, 3);
      return `<button type="button" class="album${items.length ? "" : " empty"}" data-album="${esc(a)}"${items.length ? "" : " disabled"} aria-label="Open album ${esc(a)}, ${count(items)}">
        <span class="stack">${covers.length ? covers.map((p, i) => `<img src="${thumb(p)}" alt="" style="--k:${i}" loading="lazy">`).reverse().join("") : '<span class="stack-empty">Coming soon</span>'}
          ${items.some(p => p.type === "video") ? `<span class="vbadge">${PLAY}Video</span>` : ""}</span>
        <span class="album-meta"><b>${esc(a)}</b><span>${count(items)}</span></span></button>`;
    }).join("");
  }
  function tileHTML(p, i){
    return `<button type="button" class="ph${p.type === "video" ? " vid" : ""}" data-i="${i}" aria-label="${p.type === "video" ? "Play video: " : "Open photo: "}${esc(p.caption)}">
        <img src="${thumb(p)}" alt="" loading="lazy">
        ${p.type === "video" ? `<span class="play" aria-hidden="true">${PLAY}</span>` : ""}
        <span class="ph-cap"><b>${esc(p.folder || p.album)}${p.type === "video" ? " · Video" : ""}</b>${esc(p.caption)}</span></button>`;
  }
  function folderCard(name, items){
    return `<button type="button" class="album folder" data-folder="${esc(name)}" aria-label="Open folder ${esc(name)}, ${count(items)}">
        <span class="stack">${items.slice(0, 3).map((p, i) => `<img src="${thumb(p)}" alt="" style="--k:${i}" loading="lazy">`).reverse().join("")}
          <span class="vbadge fbadge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6l2 2h8.4A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" fill="currentColor"/></svg>Folder</span></span>
        <span class="album-meta"><b>${esc(name)}</b><span>${count(items)}</span></span></button>`;
  }
  function drawAlbum(a){
    grid.className = "pgrid";
    const all = PHOTOS.filter(p => p.album === a);
    if (folder){
      shown = all.filter(p => p.folder === folder);
      grid.innerHTML = `<div class="album-head"><button type="button" class="back-btn" data-back-album>‹ ${esc(a)}</button><span>${esc(folder)} · ${count(shown)}</span></div>` +
        shown.map(tileHTML).join("");
      return;
    }
    const folders = [...new Set(all.filter(p => p.folder).map(p => p.folder))];
    shown = all.filter(p => !p.folder);
    grid.innerHTML = `<div class="album-head"><button type="button" class="back-btn" data-back>‹ All albums</button><span>${esc(a)} · ${count(all)}</span></div>` +
      folders.map(f => folderCard(f, all.filter(p => p.folder === f))).join("") +
      shown.map(tileHTML).join("") +
      (all.length ? "" : `<div class="ph empty"><span class="ph-cap"><b>${esc(a)}</b>Photos coming soon</span></div>`);
  }
  function draw(){
    filter === "All" ? drawAll() : drawAlbum(filter);
    if (typeof RV_IO !== "undefined" && RV_IO && grid.closest(".rv-on")){
      grid.querySelectorAll(".ph,.album,.album-head").forEach((el, i) => { el.classList.add("rv"); el.style.setProperty("--d", (i % 4) * .07 + "s"); RV_IO.observe(el); });
    }
  }
  function select(a){
    filter = a; folder = null;
    seg.querySelectorAll(".seg-btn").forEach(x => x.setAttribute("aria-selected", x.dataset.a === a));
    moveInd(); draw();
  }
  seg.addEventListener("click", e => { const b = e.target.closest(".seg-btn"); if (b) select(b.dataset.a); });
  grid.addEventListener("click", e => {
    const al = e.target.closest("[data-album]"); if (al && !al.disabled) return select(al.dataset.album);
    if (e.target.closest("[data-back]")) return select("All");
    const fo = e.target.closest("[data-folder]"); if (fo){ folder = fo.dataset.folder; draw(); grid.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); return; }
    if (e.target.closest("[data-back-album]")){ folder = null; draw(); return; }
    const t = e.target.closest(".ph[data-i]"); if (t) open(+t.dataset.i, t);
  });

  /* ---------- viewer ---------- */
  const V = $("viewer"), stage = $("vStage"), bg = V.querySelector(".v-bg");
  let cur = 0, box = null, openEl = null, busy = false;
  const cache = new Map();
  function aspect(p){
    const k = p.poster || p.src;
    if (cache.has(k)) return Promise.resolve(cache.get(k));
    return new Promise(res => { const im = new Image(); im.onload = () => { const r = im.naturalWidth / im.naturalHeight; cache.set(k, r); res(r); }; im.onerror = () => res(1); im.src = k; });
  }
  function fit(r){
    const vw = innerWidth, vh = innerHeight, top = 78, bottom = 96, side = vw < 600 ? 8 : 48;
    const mw = vw - side * 2, mh = vh - top - bottom;
    let w = mw, h = w / r; if (h > mh){ h = mh; w = h * r; }
    return { left: (vw - w) / 2, top: top + (mh - h) / 2, width: w, height: h };
  }
  const rectOf = el => { const b = el.getBoundingClientRect(); return { left: b.left, top: b.top, width: b.width, height: b.height }; };
  const px = r => ({ left: r.left + "px", top: r.top + "px", width: r.width + "px", height: r.height + "px" });
  const tile = i => grid.querySelector(`.ph[data-i="${i}"]`);
  function makeBox(p){
    const d = document.createElement("div");
    d.className = "v-media";
    d.innerHTML = `<img src="${thumb(p)}" alt="${esc(p.caption)}">`;
    stage.appendChild(d); return d;
  }
  function attachVideo(p, d){
    if (p.type !== "video") return;
    const v = document.createElement("video");
    Object.assign(v, { src: p.src, poster: p.poster || "", controls: true, playsInline: true });
    d.appendChild(v); v.play().catch(() => {});
  }
  function meta(){
    const p = shown[cur];
    $("vTitle").textContent = p.album;
    $("vSub").textContent = `${cur + 1} of ${shown.length}`;
    $("vCap").textContent = p.caption;
    const one = shown.length < 2; $("vPrev").disabled = one; $("vNext").disabled = one;
  }
  function settle(){ bg.getAnimations().forEach(a => a.cancel()); V.querySelectorAll(".glass").forEach(g => g.getAnimations().forEach(a => a.cancel())); bg.style.opacity = "1"; }
  const EASE = "cubic-bezier(.2,.9,.22,1)";

  async function open(i, el){
    if (busy) return; busy = true;
    cur = i; openEl = el;
    const p = shown[i], r = await aspect(p), to = fit(r), from = rectOf(el.querySelector("img") || el);
    V.hidden = false; V.classList.remove("chrome-off"); document.body.style.overflow = "hidden";
    box = makeBox(p); Object.assign(box.style, px(to)); meta();
    el.style.visibility = "hidden";
    if (!reduce){
      bg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 420, fill: "both" });
      V.querySelectorAll(".glass").forEach((g, k) => g.animate([{ opacity: 0, transform: `translateY(${k ? 16 : -16}px) scale(.96)` }, { opacity: 1, transform: "none" }], { duration: 480, delay: 160, easing: EASE, fill: "both" }));
      await box.animate([{ ...px(from), borderRadius: "20px" }, { ...px(to), borderRadius: "16px" }], { duration: 560, easing: EASE }).finished;
    }
    settle(); attachVideo(p, box); busy = false; $("vClose").focus();
  }

  async function close(instant){
    if (V.hidden || (busy && !instant)) return; busy = true;
    const v = box && box.querySelector("video"); if (v){ v.pause(); v.remove(); }
    const el = tile(cur);
    const seen = el && !instant && (() => { const b = el.getBoundingClientRect(); return b.bottom > 0 && b.top < innerHeight; })();
    if (box && !reduce && !instant){
      const fromR = rectOf(box); box.style.transform = ""; Object.assign(box.style, px(fromR));
      const anims = [bg.animate([{ opacity: getComputedStyle(bg).opacity }, { opacity: 0 }], { duration: 380, fill: "both" })];
      V.querySelectorAll(".glass").forEach(g => anims.push(g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: "both" })));
      if (seen){
        grid.querySelectorAll(".ph").forEach(t => t.style.visibility = ""); el.style.visibility = "hidden";
        anims.push(box.animate([{ ...px(fromR), borderRadius: "16px" }, { ...px(rectOf(el.querySelector("img"))), borderRadius: "20px" }], { duration: 460, easing: EASE, fill: "both" }));
      } else anims.push(box.animate([{ opacity: 1, transform: "scale(1)" }, { opacity: 0, transform: "scale(.88)" }], { duration: 320, fill: "both" }));
      await Promise.all(anims.map(a => a.finished));
    }
    stage.innerHTML = ""; box = null; V.hidden = true; document.body.style.overflow = "";
    grid.querySelectorAll(".ph").forEach(t => t.style.visibility = "");
    settle(); V.querySelectorAll(".glass").forEach(g => g.style.opacity = "");
    busy = false;
    if (!instant) (el || openEl)?.focus();
  }
  window.__closeViewer = () => close(true);
  window.__galleryGo = (al, fo) => { select(al); if (fo){ folder = fo; draw(); } };

  async function go(dir){
    if (busy || shown.length < 2 || !box) return; busy = true;
    const old = box, ov = old.querySelector("video"); if (ov) ov.pause();
    cur = (cur + dir + shown.length) % shown.length;
    const p = shown[cur], to = fit(await aspect(p));
    box = makeBox(p); Object.assign(box.style, px(to)); meta();
    grid.querySelectorAll(".ph").forEach(t => t.style.visibility = ""); const t = tile(cur); if (t) t.style.visibility = "hidden";
    if (!reduce){
      const w = innerWidth * .55, start = old.style.transform || "none";
      await Promise.all([
        old.animate([{ transform: start, opacity: 1 }, { transform: `translateX(${-dir * w}px) scale(.9)`, opacity: 0 }], { duration: 380, easing: "cubic-bezier(.3,.8,.3,1)", fill: "both" }).finished,
        box.animate([{ transform: `translateX(${dir * w}px) scale(.9)`, opacity: 0 }, { transform: "none", opacity: 1 }], { duration: 460, easing: EASE }).finished
      ]);
    }
    old.remove(); attachVideo(p, box); busy = false;
  }

  /* swipe: down to dismiss, sideways to browse, tap to hide the glass bars */
  let drag = null;
  stage.addEventListener("pointerdown", e => {
    if (!box || busy || !box.contains(e.target)) return;
    if (e.target.tagName === "VIDEO" && e.offsetY > e.target.clientHeight - 64) return; // leave video controls alone
    drag = { x: e.clientX, y: e.clientY, dx: 0, dy: 0, axis: null, id: e.pointerId };
  });
  addEventListener("pointermove", e => {
    if (!drag || e.pointerId !== drag.id) return;
    drag.dx = e.clientX - drag.x; drag.dy = e.clientY - drag.y;
    if (!drag.axis && Math.hypot(drag.dx, drag.dy) > 8) drag.axis = Math.abs(drag.dy) > Math.abs(drag.dx) ? "y" : "x";
    if (drag.axis === "y"){
      const d = Math.max(0, drag.dy), s = 1 - Math.min(d, 500) / 1400;
      box.style.transform = `translate(${drag.dx * .6}px,${d}px) scale(${s})`;
      bg.style.opacity = String(1 - Math.min(d / 420, .85));
    } else if (drag.axis === "x"){
      box.style.transform = `translateX(${drag.dx}px)`;
    }
  });
  addEventListener("pointerup", e => {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag; drag = null;
    if (!d.axis){
      if (e.target.tagName !== "VIDEO") V.classList.toggle("chrome-off");
      return;
    }
    if (d.axis === "y" && d.dy > 110) return close();
    if (d.axis === "x" && Math.abs(d.dx) > 80 && shown.length > 1) return go(d.dx < 0 ? 1 : -1);
    box.animate([{ transform: box.style.transform }, { transform: "none" }], { duration: 360, easing: EASE });
    bg.animate([{ opacity: bg.style.opacity }, { opacity: 1 }], { duration: 300 });
    box.style.transform = ""; bg.style.opacity = "1";
  });
  bg.addEventListener("click", () => close());
  $("vClose").onclick = () => close();
  $("vPrev").onclick = () => go(-1);
  $("vNext").onclick = () => go(1);
  addEventListener("keydown", e => {
    if (V.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });
  addEventListener("resize", () => { if (box && !busy){ const p = shown[cur]; aspect(p).then(r => box && Object.assign(box.style, px(fit(r)))); } });
  draw();
})();

/* --- Copy Zelle email --- */
document.getElementById("copyZelle").addEventListener("click", async () => {
  const note = document.getElementById("copyNote"), text = document.getElementById("zelleId").textContent;
  try { await navigator.clipboard.writeText(text); note.textContent = "Copied"; }
  catch { 
    const r = document.createRange(); r.selectNodeContents(document.getElementById("zelleId"));
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r);
    note.textContent = "Selected. Press Ctrl+C or ⌘C to copy.";
  }
  setTimeout(() => note.textContent = "", 4000);
});


/* --- Home page motion: marquee, word-lit verse, hero parallax, tilt --- */
(function homeMotion(){
  const items = CORE_VALUES.map(v => `<span class="mq-item">${esc(v)}</span><span class="mq-dot" aria-hidden="true"></span>`).join("");
  document.getElementById("mqTrack").innerHTML = `<div class="mq-run">${items}</div><div class="mq-run" aria-hidden="true">${items}</div>`;
  if (reduce) return;

  const lits = [...document.querySelectorAll(".lit-words")].map(q => {
    q.innerHTML = q.textContent.split(/\s+/).map(w => `<span class="w">${esc(w)}</span>`).join(" ");
    return { q, words: [...q.querySelectorAll(".w")] };
  });
  const inner = document.querySelector(".hero .inner"), hero = document.querySelector(".hero");
  let ticking = false;
  function onScroll(){
    ticking = false;
    const vh = innerHeight, y = scrollY;
    if (!document.querySelector('[data-view="home"]').hidden){
      const hh = hero.offsetHeight;
      if (y < hh){
        inner.style.transform = `translateY(${y * .32}px)`;
        inner.style.opacity = Math.max(0, 1 - y / (hh * .75));
      }
    }
    lits.forEach(({ q, words }) => {
      if (!q.offsetParent) return;
      const r = q.getBoundingClientRect();
      const prog = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .3)));
      const n = Math.round(prog * words.length);
      words.forEach((w, i) => w.classList.toggle("lit", i < n));
    });
  }
  window.__motionTick = onScroll;
  addEventListener("scroll", () => { if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("pointermove", e => {
      if (!el.classList.contains("done") || e.pointerType !== "mouse") return;
      const b = el.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
      el.style.transform = `perspective(1100px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
      el.style.setProperty("--mx", `${(x + .5) * 100}%`); el.style.setProperty("--my", `${(y + .5) * 100}%`);
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });
})();


/* --- Cash App card --- */
(function cashApp(){
  if (!CASHAPP_TAG) return;
  const tag = CASHAPP_TAG.startsWith("$") ? CASHAPP_TAG : "$" + CASHAPP_TAG;
  document.getElementById("cashTag").textContent = tag;
  document.getElementById("cashActions").innerHTML =
    `<a class="pill sm" href="https://cash.app/${encodeURIComponent(tag)}" target="_blank" rel="noopener">Open Cash App</a>`;
})();

/* --- Home: this-week tiles, featured video, gallery deep links --- */
(function homeBlocks(){
  const A = ASSEMBLIES.austell, G = ASSEMBLIES.gwinnett;
  const svc = (a, n) => a.services.find(s => s.name === n) || {};
  const bible = svc(A, "Bible Study"), fri = svc(A, "Friday Night Prayers");
  const maps = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  document.getElementById("weekTiles").innerHTML = `
    <article class="wt wt-1 rv"><h3>Sunday Worship</h3>
      <p class="wt-time">${esc(svc(A, "Sunday Worship").time || "")}<small>Austell Assembly · ${TZ}</small></p>
      <p class="wt-time">${esc(svc(G, "Sunday Worship").time || "")}<small>Gwinnett International · ${TZ}</small></p>
      <div class="wt-act"><a class="pill sm" href="#visit">Plan a visit</a></div></article>
    <article class="wt wt-2 rv" style="--d:.1s"><h3>Bible Study</h3>
      <p class="wt-time">${esc(bible.time || "")}<small>Wednesdays · ${TZ}</small></p>
      <p>Both assemblies together on Zoom. Passcode ${esc(ZOOM.passcode)}.</p>
      <div class="wt-act"><a class="pill sm" href="${ZOOM.url}" target="_blank" rel="noopener">Join on Zoom</a></div></article>
    <article class="wt wt-3 rv" style="--d:.2s"><h3>Friday Night Prayers</h3>
      <p class="wt-time">${esc(fri.time || "")}<small>Fridays · ${TZ}</small></p>
      <p>In person at Austell Assembly, ${esc(A.address)}.</p>
      <div class="wt-act"><a class="pill sm ghost" href="${maps(A.address)}" target="_blank" rel="noopener">Get directions</a></div></article>
    <article class="wt wt-4 rv" style="--d:.3s"><h3>Prayer Request</h3>
      <p class="wt-time">We would love to pray with you.</p>
      <p>Share what is on your heart and someone from the assembly will reach out.</p>
      <div class="wt-act"><a class="pill sm" href="#visit">Send a request</a></div></article>`;

  const frame = document.getElementById("fvFrame"), vid = document.getElementById("fvVideo");
  document.getElementById("fvPlay").addEventListener("click", () => {
    frame.classList.add("playing"); vid.controls = true; vid.play().catch(() => {});
  });
  window.__pauseHomeVideo = () => { if (!vid.paused) vid.pause(); };

  document.addEventListener("click", e => {
    const sc = e.target.closest("[data-scroll]"); if (sc) window.__pendingScroll = sc.dataset.scroll;
    const l = e.target.closest("[data-gal]"); if (!l) return;
    window.__pendingGal = l.dataset.gal;
  });
})();

route();
