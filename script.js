const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Funga menyu' : 'Fungua menyu');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Fungua menyu');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Maelezo ya idara yanayoonekana mgeni anapochagua idara husika.
// Upatikanaji wa huduma uthibitishwe moja kwa moja na kliniki.
const departments = {
  Reception: {
    title: 'Mapokezi',
    description: 'Mapokezi hupokea wagonjwa,huandikisha wagonjwa wapya hupokea malipo yote ya huduma za kiafya kwa wagonjwa wote wa cash.',
    about: 'Mtu wa mapokezi ndo anahusika na uandikishaji na kupokea wagonjwa ,hivyo unaombwa kupita mapokezi mara papo utapohudhuria kwenye kliniki. pia mapokezi ataomba taarifa zako, hvyo unaombwa kumpa ushirikiano.',
    services: ['kupokea wagonjwa,kuandikisha wagonjwa wapya,kupokea malipo yote ya huduma za kiafya'],
    image: 'images/rec.jpg',
    caption: 'Huduma za mapokezi'
  },
  laboratory: {
    title: 'Maabara',
    description: 'Maabara hufanya vipimo vya kitabibu vinavyosaidia wataalamu wa afya kutambua hali za wagonjwa na kupanga hatua zinazofaa za matibabu.',
    about: 'Daktari anaweza kuomba vipimo vya maabara wakati wa uchunguzi au ufuatiliaji wa afya. Aina za vipimo vinavyopatikana zinapaswa kuthibitishwa na kliniki.',
    services: ['Vipimo mbalimbali vya maabara kulingana na upatikanaji', 'Uchukuaji na utunzaji wa sampuli za vipimo', 'Matokeo ya vipimo kwa ajili ya kusaidia tathmini ya daktari'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85',
    caption: 'Huduma za maabara na vipimo vya afya'
  },
  pharmacy: {
    title: 'Duka la Dawa',
    description: 'Duka la dawa ni sehemu muhimu ya huduma za afya. Husaidia wagonjwa kupata dawa zilizoandikwa na wataalamu wa afya pamoja na maelekezo ya matumizi sahihi.',
    about: 'Wagonjwa wanaweza kupata maelezo kuhusu matumizi ya dawa, dozi na tahadhari zinazohusika. Upatikanaji wa dawa fulani uthibitishwe moja kwa moja na kliniki.',
    services: ['Utoaji wa dawa zilizoandikwa na daktari kulingana na upatikanaji', 'Maelekezo kuhusu matumizi sahihi ya dawa', 'Taarifa kuhusu upatikanaji wa dawa'],
    image: 'images/pharmacy.jpg?auto=format&fit=crop&w=1200&q=85',
    caption: 'Duka la dawa na huduma za dawa'
  },
  maternity: {
    title: 'Kliniki ya Mama na Mtoto',
    description: 'Kliniki ya Mama na Mtoto inalenga kusaidia afya ya wanawake, wajawazito na watoto kupitia ushauri, uchunguzi na ufuatiliaji wa afya.',
    about: 'Huduma zinazohusiana na ujauzito na afya ya mama na mtoto ni muhimu katika kutambua mapema changamoto za kiafya. Wasiliana na kliniki kuthibitisha huduma zinazotolewa na ratiba zake.',
    services: ['Taarifa kuhusu huduma za afya ya mama na mtoto', 'Ushauri na ufuatiliaji wa afya wakati wa ujauzito kulingana na upatikanaji', 'Taarifa za miadi na kliniki za ufuatiliaji'],
    image: 'images/clinic.jpg?auto=format&fit=crop&w=1200&q=85',
    caption: 'Huduma za afya ya mama na mtoto'
  },
  ultrasound: {
    title: 'Vipimo vya Ultrasound',
    description: 'Ultrasound ni kipimo kinachotumia mawimbi ya sauti kutengeneza picha za sehemu za ndani ya mwili. Picha hizo humsaidia daktari katika uchunguzi wa hali mbalimbali za kiafya.',
    about: 'Kabla ya kwenda kupima, ni vizuri kuuliza aina za vipimo vinavyotolewa, kama miadi inahitajika na kama kuna maandalizi maalumu ya kufanya.',
    services: ['Vipimo vya ultrasound kulingana na upatikanaji', 'Taarifa kuhusu miadi na maandalizi ya kipimo', 'Picha zinazosaidia uchunguzi wa kitabibu'],
    image: 'images/imaging.jpg?auto=format&fit=crop&w=1200&q=85',
    caption: 'Huduma za ultrasound na uchunguzi wa picha'
  },
  ctc: {
    title: 'CTC – Huduma za Matunzo na Tiba',
    description: 'CTC ni kifupi cha Care and Treatment Centre. Ni kituo kinachotoa huduma za matunzo, tiba, ushauri na ufuatiliaji kwa watu wanaohitaji huduma hizo, ikiwemo huduma zinazohusiana na VVU.',
    about: 'Huduma hizi zinapaswa kutolewa kwa faragha, heshima na bila ubaguzi. Kwa taarifa sahihi kuhusu huduma, miadi na utaratibu wa kliniki, wasiliana na kituo moja kwa moja.',
    services: ['Ushauri na taarifa za huduma za CTC', 'Matunzo na ufuatiliaji kulingana na utaratibu wa kituo', 'Msaada wa kupata taarifa kuhusu miadi na huduma'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    caption: 'Huduma za matunzo, tiba na ushauri'
  },
  dental: {
    title: 'Huduma za Meno',
    description: 'Huduma za meno huhusika na afya ya meno, fizi na sehemu nyingine za kinywa. Uchunguzi wa mapema husaidia kubaini matatizo na kulinda afya ya kinywa.',
    about: 'Wagonjwa wanaweza kuuliza kuhusu huduma za uchunguzi na matibabu ya meno zinazopatikana kliniki pamoja na utaratibu wa kupata miadi.',
    services: ['Uchunguzi wa afya ya meno kulingana na upatikanaji', 'Taarifa kuhusu huduma na matibabu ya meno', 'Ushauri kuhusu usafi na utunzaji wa kinywa'],
    image: 'images/dental.jpg',
    caption: 'Huduma za meno na afya ya kinywa'
  },
  specialist: {
    title: 'Huduma za Madaktari Bingwa',
    description: 'Madaktari bingwa hutoa uchunguzi na ushauri wa kina katika maeneo maalumu ya tiba pale mgonjwa anapohitaji huduma za kitaalamu zaidi.',
    about: 'Kliniki inaweza kutoa taarifa kuhusu madaktari bingwa wanaopatikana, maeneo yao ya utaalamu, siku za kliniki na utaratibu wa kupata miadi.',
    services: ['Uchunguzi na ushauri wa madaktari bingwa kulingana na ratiba', 'Taarifa kuhusu maeneo ya utaalamu', 'Mwongozo wa miadi na rufaa inapohitajika'],
    image: 'images/special.jpg?auto=format&fit=crop&w=1200&q=85',
    caption: 'Ushauri na uchunguzi wa madaktari bingwa'
  },
  ambulance: {
    title: 'Gari la Wagonjwa (Ambulance)',
    description: 'Gari la wagonjwa hutumika kusaidia usafirishaji wa wagonjwa wanaohitaji kufikishwa kwenye kituo cha afya au kuhamishiwa kwenye kituo kingine kwa sababu za kitabibu.',
    about: 'Huduma hii inalenga kusaidia wagonjwa kupata huduma za matibabu kwa wakati kuptitia usafiri wa gari la wagonjwa. Wasiliana na Nuru Polyclinic kuthibitisha kama gari linapatikana, eneo linalohudumiwa na utaratibu wa kuomba huduma. Katika dharura, tafuta msaada wa huduma rasmi za dharura mara moja.',
    services: ['Usafirishaji wa wagonjwa kwenda hospitalini', 'Uhamishaji wa wagonjwa kutoka kituo kimoja cha afya kwenda kingine ', 'Kusaidia usafiri wa wagonjwa wanaohitaji uangalizi malumu wakati wa safari,kulingana na uwezo wa gari na wahudumu '],
    image: 'images/ambulance.jpg?auto=format&fit=crop&w=1200&q=85',
    caption: 'Gari la wagonjwa na usafirishaji wa wagonjwa'
  }
};

const departmentGrid = document.getElementById('department-grid');
const departmentDetail = document.getElementById('department-detail');
const backButton = document.getElementById('back-departments');

function openDepartment(key) {
  const department = departments[key];
  if (!department) return;

  document.getElementById('detail-title').textContent = department.title;
  document.getElementById('detail-description').textContent = department.description;
  document.getElementById('detail-about').textContent = department.about;
  document.getElementById('detail-image').src = department.image;
  document.getElementById('detail-image').alt = department.caption;
  document.getElementById('detail-image-caption').textContent = department.caption;

  const serviceList = document.getElementById('detail-services');
  serviceList.replaceChildren();
  department.services.forEach((service) => {
    const item = document.createElement('li');
    item.textContent = service;
    serviceList.appendChild(item);
  });

  departmentGrid.hidden = true;
  departmentDetail.hidden = false;
  departmentDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('[data-open-department]').forEach((button) => {
  button.addEventListener('click', () => openDepartment(button.dataset.openDepartment));
});

backButton.addEventListener('click', () => {
  departmentDetail.hidden = true;
  departmentGrid.hidden = false;
  document.getElementById('departments').scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// Language switch: English <-> Kiswahili. The page starts in Kiswahili.
const languageButton = document.getElementById('language-toggle');
let currentLanguage = 'sw';

const pageTranslations = {
  en: {
    topContact: 'Contact the clinic', nav: ['Home','About Us','Departments','Services','Contact'], navCta: 'Contact Us',
    eyebrow: 'WELCOME TO NURU POLYCLINIC', heroTitle: 'Your health is<br><em>our priority.</em>',
    heroLead: 'Your health matters. Welcome to Nuru Polyclinic, serving the Mtoni Mtongani community in Temeke, Dar es Salaam.',
    heroAbout: 'Discover our clinic', heroLocation: 'Find our location', heroNote: 'We are here for your health', heroSub: 'Healthcare close to your community',
    scroll: 'SCROLL TO EXPLORE', introKicker: '01 / ABOUT NURU', introTitle: 'A place to access care.<br><em>A community that cares.</em>',
    introText: 'Nuru Polyclinic is located in Mtoni Mtongani, Temeke District, Dar es Salaam. This website introduces the community to the clinic, its departments and how to get in touch.',
    introLink: 'Contact Nuru', introSide: 'Quality healthcare begins with listening, respect and caring for every patient.',
    deptKicker: '02 / OUR DEPARTMENTS', deptTitle: 'Care at<br><em>every step.</em>', deptLead: 'Choose a department to learn more. Select a department card to view its description, image and services.',
    cards: [
      ['RECEPTION','Welcomes patients, registers them and receives payments for healthcare services.'],
      ['LABORATORY','Performs laboratory tests that support diagnosis and health monitoring.'],
      ['PHARMACY','Provides prescribed medicines and guidance on their proper use.'],
      ['MATERNITY & CHILD HEALTH','Provides information and services related to maternal, pregnancy and child health.'],
      ['ULTRASOUND','Uses sound waves to create images of structures inside the body.'],
      ['CTC','Counselling, care and follow-up services for people who need them.'],
      ['DENTAL SERVICES','Focuses on the health of teeth, gums and oral hygiene.'],
      ['SPECIALIST SERVICES','Medical consultation and examinations provided by specialist doctors.'],
      ['AMBULANCE','Supports the transportation of patients who need healthcare services.']
    ], readMore: 'Read more', back: '← Back to departments',
    detailAbout: 'About this department', detailServices: 'Services and information', detailNote: 'To confirm service availability, requirements and operating hours, please contact Nuru Polyclinic directly.',
    careKicker: '03 / SERVICES & INFORMATION', careTitle: 'The journey to better health<br>begins with a <em>conversation.</em>',
    careText: 'For accurate information about services, availability and how to visit the clinic, please contact Nuru Polyclinic.',
    contactKicker: '04 / CONTACT US', contactTitle: 'We would love<br><em>to hear from you.</em>',
    contactLead: 'For questions about the clinic, its departments or services, use the official contact details confirmed by Nuru Polyclinic.',
    location: 'OUR LOCATION', phone: 'PHONE', email: 'EMAIL', phoneHelp: 'Call using the number above', emailHelp: 'Send a message to this email address',
    mapTitle: 'Nuru Polyclinic location', mapLink: 'Open clinic location in Google Maps ↗', footerLine: 'Your health is our priority.', backTop: 'BACK TO TOP ↑', rights: 'All rights reserved.'
  },
  sw: null
};

const swahiliDepartmentCards = [
  ['MAPOKEZI','Hupokea wagonjwa, huwasajili na kupokea malipo ya huduma za afya.'],
  ['MAABARA','Hufanya vipimo vya maabara vinavyosaidia uchunguzi na ufuatiliaji wa afya.'],
  ['DUKA LA DAWA','Hutoa dawa zilizoandikwa na maelekezo ya matumizi sahihi.'],
  ['KLINIKI YA MAMA NA MTOTO','Hutoa taarifa na huduma zinazohusiana na afya ya mama, ujauzito na mtoto.'],
  ['VIPIMO VYA ULTRASOUND','Hutumia mawimbi ya sauti kupata picha za sehemu za ndani ya mwili.'],
  ['CTC','Huduma za ushauri, matunzo na ufuatiliaji kwa wanaozihitaji.'],
  ['HUDUMA ZA MENO','Huhusika na afya ya meno, fizi na usafi wa kinywa.'],
  ['HUDUMA ZA MADAKTARI BINGWA','Ushauri na uchunguzi wa kitabibu unaotolewa na madaktari bingwa.'],
  ['GARI LA WAGONJWA','Husaidia usafirishaji wa wagonjwa wanaohitaji huduma za afya.']
];

const departmentEnglish = {
  Reception:{title:'Reception',description:'The reception area welcomes patients, registers new patients and receives payments for healthcare services.',about:'Patients are asked to visit reception when arriving at the clinic. The reception staff will request the information needed for registration and guide patients through the next steps.',services:['Welcoming patients','Registering new patients','Receiving payments for healthcare services'],caption:'Reception services'},
  laboratory:{title:'Laboratory',description:'The laboratory performs medical tests that help healthcare professionals identify health conditions and plan appropriate care.',about:'A doctor may request laboratory tests during an examination or health follow-up. Please contact the clinic to confirm which tests are currently available.',services:['Laboratory tests, subject to availability','Collection and handling of test samples','Test results to support a doctor’s assessment'],caption:'Laboratory and diagnostic services'},
  pharmacy:{title:'Pharmacy',description:'The pharmacy helps patients obtain medicines prescribed by healthcare professionals and understand how to use them safely.',about:'Patients can ask for information about medicine use, dosage and relevant precautions. Please contact the clinic to confirm the availability of specific medicines.',services:['Dispensing prescribed medicines, subject to availability','Guidance on proper medicine use','Information about medicine availability'],caption:'Pharmacy services'},
  maternity:{title:'Maternal and Child Health Clinic',description:'The maternal and child health clinic supports the health of women, expectant mothers and children through information, examinations and follow-up.',about:'Maternal and child healthcare helps identify health concerns early. Contact the clinic to confirm available services and schedules.',services:['Maternal and child health information','Pregnancy health guidance and follow-up, subject to availability','Appointment and clinic schedule information'],caption:'Maternal and child health services'},
  ultrasound:{title:'Ultrasound',description:'Ultrasound uses sound waves to create images of structures inside the body. These images can assist doctors during medical examinations.',about:'Before attending, ask which scans are offered, whether an appointment is required and whether any preparation is necessary.',services:['Ultrasound scans, subject to availability','Information about appointments and preparation','Imaging to support medical assessment'],caption:'Ultrasound and diagnostic imaging'},
  ctc:{title:'CTC – Care and Treatment Centre',description:'CTC stands for Care and Treatment Centre. It provides care, treatment, counselling and follow-up for people who need these services, including services related to HIV.',about:'These services should be provided with privacy, respect and without discrimination. Contact the clinic directly for accurate information about appointments and available services.',services:['CTC counselling and information','Care and follow-up according to the centre’s procedures','Appointment and service information'],caption:'Care, treatment and counselling'},
  dental:{title:'Dental Services',description:'Dental services focus on the health of teeth, gums and other parts of the mouth. Early examinations can help identify problems and protect oral health.',about:'Patients can ask the clinic about available dental examinations and treatments and how to arrange an appointment.',services:['Dental health examinations, subject to availability','Information about dental care and treatment','Advice on oral hygiene and care'],caption:'Dental and oral healthcare'},
  specialist:{title:'Specialist Services',description:'Specialist doctors provide detailed examinations and advice in specific areas of medicine when a patient needs additional professional care.',about:'Contact the clinic for information about available specialists, their areas of expertise, clinic days and appointment arrangements.',services:['Specialist consultations, according to schedule','Information about areas of expertise','Appointment and referral guidance where required'],caption:'Specialist medical consultation'},
  ambulance:{title:'Ambulance',description:'An ambulance helps transport patients who need to reach a healthcare facility or be transferred to another facility for medical reasons.',about:'The service aims to help patients access medical care through patient transportation and transfer. Contact Nuru Polyclinic to confirm availability, service areas and how to request transport. In an emergency, seek official emergency assistance immediately.',services:['Patient transportation to health care facilities','Patient tranfer between healthcare facilities','Assistance with patient transportation requiring special attention,depending on available equipment and personnel'],caption:'Ambulance and patient transport'}
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}
function setLanguage(language) {
  currentLanguage = language;
  const en = language === 'en';
  const t = pageTranslations.en;
  document.documentElement.lang = language;
  languageButton.textContent = en ? 'Kiswahili' : 'English';
  languageButton.setAttribute('aria-label', en ? 'Badili lugha kwenda Kiswahili' : 'Switch language to English');

  setText('.topbar-inner a', en ? t.topContact + ' ↗' : 'Wasiliana na kliniki ↗');
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach((a,i)=>a.textContent=(en?t.nav:['Mwanzo','Kuhusu Sisi','Idara','Huduma','Mawasiliano'])[i]);
  setText('.nav-links .nav-cta', en ? t.navCta + ' ↗' : 'Wasiliana nasi ↗');
  setText('.eyebrow', en ? t.eyebrow : 'KARIBU NURU POLYCLINIC');
  setText('.hero-copy h1', en ? t.heroTitle : 'Afya yako ni<br><em>kipaumbele chetu.</em>');
  setText('.hero-lead', en ? t.heroLead : 'Afya yako ni muhimu. Karibu Nuru Polyclinic inayohudumia jamii ya Mtoni Mtongani, Temeke, Dar es Salaam.');
  setText('.hero-actions .btn', (en?t.heroAbout:'Ijue kliniki yetu')+' <span>→</span>');
  setText('.hero-actions .text-link', '<span class="play-icon">↗</span> '+(en?t.heroLocation:'Tuone tulipo'));
  setText('.hero-note strong', en?t.heroNote:'Tupo kwa ajili ya afya yako'); setText('.hero-note small',en?t.heroSub:'Huduma za afya karibu na jamii yako');
  setText('.hero-bottom .scroll-cue',en?t.scroll+' <i>↓</i>':'SOGEA KUCHUNGUZA <i>↓</i>');
  setText('#about .section-kicker',en?t.introKicker:'01 / KUHUSU NURU');
  setText('#about h2',en?t.introTitle:'Mahali pa kupata huduma.<br><em>Jamii yenye kujaliwa.</em>');
  setText('.intro-content p',en?t.introText:'Nuru Polyclinic ipo Mtoni Mtongani, Wilaya ya Temeke, Dar es Salaam. Tovuti hii inalenga kuijulisha jamii kuhusu kliniki, idara zake na namna ya kupata mawasiliano.');
  setText('.intro-content .under-link', (en?t.introLink:'Wasiliana na Nuru')+' <span>→</span>');
  setText('.intro-side p',en?t.introSide:'Huduma bora za afya huanza kwa kusikiliza, kuheshimu na kujali kila mgonjwa.');
  setText('#departments .section-kicker',en?t.deptKicker:'02 / IDARA ZETU');
  setText('.section-heading h2',en?t.deptTitle:'Huduma kwa<br><em>kila hatua.</em>');
  setText('.section-heading>p',en?t.deptLead:'Chagua idara unayotaka kuifahamu. Gusa kadi ya idara ili kuona maelezo, picha na huduma zake.');
  document.querySelectorAll('.department-card').forEach((card,i)=>{const data=en?t.cards[i]:swahiliDepartmentCards[i];if(!data)return;card.querySelector('h3').textContent=data[0];card.querySelector('p').textContent=data[1];card.querySelector('.department-open').innerHTML=(en?t.readMore:'Soma zaidi')+' <span>↗</span>';});
  setText('#back-departments',en?t.back:'← Rudi kwenye idara');
  setText('.department-detail-copy h3:nth-of-type(1)',en?t.detailAbout:'Kuhusu idara hii');
  setText('.department-detail-copy h3:nth-of-type(2)',en?t.detailServices:'Huduma na taarifa');
  setText('.detail-note',en?t.detailNote:'Kwa uthibitisho wa upatikanaji wa huduma, masharti na muda wa kazi, wasiliana moja kwa moja na Nuru Polyclinic.');
  setText('.department-detail-copy .btn', (en?t.navCta:'Wasiliana na kliniki')+' <span>→</span>');
  setText('.care-band .section-kicker',en?t.careKicker:'03 / HUDUMA NA TAARIFA');
  setText('.care-band h2',en?t.careTitle:'Safari ya afya njema<br>huanza kwa <em>mazungumzo.</em>');
  setText('.care-band p',en?t.careText:'Kwa taarifa sahihi kuhusu huduma, upatikanaji na utaratibu wa kutembelea kliniki, tafadhali wasiliana na Nuru Polyclinic.');
  setText('.care-band .btn', (en?t.navCta:'Wasiliana na kliniki')+' <span>→</span>');
  setText('#contact .section-kicker',en?t.contactKicker:'04 / WASILIANA NASI');
  setText('#contact h2',en?t.contactTitle:'Tungependa<br><em>kusikia kutoka kwako.</em>');
  setText('.contact-lead',en?t.contactLead:'Kwa maswali kuhusu kliniki, idara au huduma zake, tumia mawasiliano rasmi yaliyothibitishwa na Nuru Polyclinic.');
  const labels=en?[t.location,t.phone,t.email]:['MAHALI TULIPO','SIMU','BARUA PEPE'];
  document.querySelectorAll('.contact-row small').forEach((el,i)=>el.textContent=labels[i]);
  setText('.contact-row:nth-child(2) p',en?t.phoneHelp:'piga simu kupitia namba tajwa');
  setText('.contact-row:nth-child(3) p',en?t.emailHelp:'Tuma ujumbe kwenye barua pepe tajwa');
  setText('.map-placeholder strong',en?t.mapTitle:'Mahali ilipo Nuru Polyclinic');
  setText('.map-placeholder small a',en?t.mapLink:'fungua mahali ilipo kliniki kwenye ramani ya Google ↗');
  setText('.footer-top>p',en?t.footerLine:'Afya yako ni kipaumbele chetu.');
  setText('.back-top',en?t.backTop:'RUDI JUU ↑');
  const rights=document.querySelector('.footer-bottom span:first-child');
  if(rights) rights.innerHTML='© <span id="year">'+new Date().getFullYear()+'</span> Nuru Polyclinic. '+(en?t.rights:'Haki zote zimehifadhiwa.');
  const second=document.querySelector('.footer-bottom span:last-child'); if(second)second.textContent=' Mtoni Mtongani · Temeke · Dar es Salaam';
  // Update an already-open department without closing it.
  const activeKey=window.activeDepartmentKey;
  if(activeKey) openDepartment(activeKey);
}

const originalOpenDepartment = openDepartment;
openDepartment = function(key) {
  window.activeDepartmentKey = key;
  if(currentLanguage === 'sw') return originalOpenDepartment(key);
  const d=departmentEnglish[key]; if(!d)return;
  document.getElementById('detail-title').textContent=d.title;
  document.getElementById('detail-description').textContent=d.description;
  document.getElementById('detail-about').textContent=d.about;
  document.getElementById('detail-image').src=departments[key].image;
  document.getElementById('detail-image').alt=d.caption;
  document.getElementById('detail-image-caption').textContent=d.caption;
  const list=document.getElementById('detail-services');list.replaceChildren();
  d.services.forEach(service=>{const li=document.createElement('li');li.textContent=service;list.appendChild(li);});
  departmentGrid.hidden=true;departmentDetail.hidden=false;
  departmentDetail.scrollIntoView({behavior:'smooth',block:'start'});
};

languageButton.addEventListener('click',()=>setLanguage(currentLanguage==='sw'?'en':'sw'));
setLanguage('sw');
