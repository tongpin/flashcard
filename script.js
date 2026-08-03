// ==========================================
// 1. Data Array សំណួរ-ចម្លើយទាំង ៦៤
// ==========================================
const biologyQuestions = [
  { id: 1, question: "តើ DNA ជាអ្វី?", answer: "DNA ជាអាស៊ីតដេអុកស៊ីរីបូនុយក្លេអ៊ិច ដែលជាទម្រង់ព័ត៌មានសេនេទិចរបស់សរីរាង្គរស់។" },
  { id: 2, question: "តើ DNA មានទម្រង់ដូចម្តេច?", answer: "DNA មានទម្រង់ជាស្រកៀលឌុប (Double Helix) ដែលកើតចេញពីខ្សែច្រវាក់នុយក្លេអូទីតពីរស្រប និងច្រាសទិសគ្នា។" },
  { id: 3, question: "តើនុយក្លេអូទីតរបស់ DNA មានសមាសធាតុអ្វីខ្លះ?", answer: "មាន ៣ គឺ៖ ស្ករដេអុកស៊ីរីបូស, ក្រុមផូស្វាត, និងបាសអាសូត (A, T, C, G)។" },
  { id: 4, question: "តើបាសអាសូតផ្គុំគ្នាតាមគោលការណ៍អ្វី?", answer: "ផ្គុំគ្នាតាមគោលការណ៍បំពេញបាស៖ A ភ្ជាប់ជាមួយ T ដោយសម្ព័ន្ធអ៊ីដ្រូសែន ២ និង C ភ្ជាប់ជាមួយ G ដោយសម្ព័ន្ធអ៊ីដ្រូសែន ៣។" },
  { id: 5, question: "តើការស្វ័យតម្លើងតម្រៀប (Replication) របស់ DNA ប្រព្រឹត្តទៅនៅឯណា?", answer: "ប្រព្រឹត្តទៅនៅក្នុងណូលេអូ ក្នុងវគ្គ S នៃចន្លោះវគ្គ (Interphase)។" },
  { id: 6, question: "តើអង់ស៊ីមអ្វីដែលជួយពន្លាតខ្សែ DNA ពេលស្វ័យតម្លើងតម្រៀប?", answer: "គឺអង់ស៊ីម ដេអិនអេ អេលីកាស (DNA Helicase)។" },
  { id: 7, question: "តើអង់ស៊ីមអ្វីដែលភ្ជាប់នុយក្លេអូទីតថ្មីទៅនឹងខ្សែចាស់?", answer: "គឺអង់ស៊ីម ដេអិនអេ ប៉ូលីមេរ៉ាស (DNA Polymerase)។" },
  { id: 8, question: "តើ ARN ជាអ្វី?", answer: "ARN ជាអាស៊ីតរីបូនុយក្លេអ៊ិច ដែលមានខ្សែច្រវាក់ទោល និងមានតួនាទីក្នុងការសំយោគប្រូតេអ៊ីន។" },
  { id: 9, question: "តើនុយក្លេអូទីតរបស់ ARN ខុសពី DNA ត្រង់ណា?", answer: "ARN មានស្កររីបូស និងបាសអ៊ុយរ៉ាស៊ីល (U) ជំនួសឱ្យបាសទីមីន (T)។" },
  { id: 10, question: "តើ ARN មានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?", answer: "មាន ៣ ប្រភេទគឺ៖ mRNA (ARN មេស្សាស៊ែ), tRNA (ARN ដឹកជញ្ជូន), និង rRNA (ARN រីបូសូម)។" },
  { id: 11, question: "តើការចម្លងក្រម (Transcription) ជាអ្វី?", answer: "ជាដំណើរការសំយោគ mRNA ចេញពីខ្សែពុម្ពរបស់ DNA នៅក្នុងណូលេអូ។" },
  { id: 12, question: "តើអង់ស៊ីមអ្វីដែលដើរតួនាទីក្នុងការចម្លងក្រម?", answer: "គឺអង់ស៊ីម អារអិនអេ ប៉ូលីមេរ៉ាស (RNA Polymerase)។" },
  { id: 13, question: "តើការបកប្រែក្រម (Translation) ប្រព្រឹត្តទៅនៅឯណា?", answer: "ប្រព្រឹត្តទៅនៅក្នុងស៊ីតូប្លាស ត្រង់រីបូសូម។" },
  { id: 14, question: "តើកូដុង (Codon) ជាអ្វី?", answer: "ជាបន្សំនៃ ៣ នុយក្លេអូទីតនៅលើ mRNA ដែលកំណត់អាស៊ីតអាមីនមួយ។" },
  { id: 15, question: "តើកូដុងចាប់ផ្តើមសំយោគប្រូតេអ៊ីនមានឈ្មោះអ្វី?", answer: "គឺកូដុង AUG (កំណត់អាស៊ីតអាមីន មេតយូនីន)។" },
  { id: 16, question: "តើកូដុងឈប់ (Stop Codon) មានអ្វីខ្លះ?", answer: "មាន ៣ គឺ៖ UAA, UAG, និង UGA។" },
  { id: 17, question: "តើអង់ទីកូដុង (Anticodon) ស្ថិតនៅលើអ្វី?", answer: "ស្ថិតនៅលើ tRNA ដែលមានតួនាទីទៅផ្គុំបំពេញជាមួយកូដុងលើ mRNA។" },
  { id: 18, question: "តើប្រូតេអ៊ីនផ្គុំឡើងពីអ្វី?", answer: "ផ្គុំឡើងពីអាស៊ីតអាមីនជាច្រើនភ្ជាប់គ្នាតាមសម្ព័ន្ធប៉ិបទីត។" },
  { id: 19, question: "តើអង់ស៊ីមជាអ្វី?", answer: "ជាប្រូតេអ៊ីនពិសេសដែលដើរតួនាទីជាកាតាលីករជីវៈ ជួយពន្លឿនល្បឿនប្រតិកម្មជីវគីមី។" },
  { id: 20, question: "តែកាតាលីករជីវៈមានលក្ខណៈពិសេសអ្វី?", answer: "វាមានលក្ខណៈប្រាក់ស្យុង (ចាក់លាក់) ចំពោះស៊ុបស្ត្រាត និងមិនផ្លាស់ប្តូរទម្រង់ក្រោយប្រតិកម្មឡើយ។" },
  { id: 21, question: "តើកត្តាអ្វីខ្លះដែលជះឥទ្ធិពលលើសកម្មភាពអង់ស៊ីម?", answer: "មាន៖ សីតុណ្ហភាព, pH, និងកំហាប់ស៊ុបស្ត្រាត/អង់ស៊ីម។" },
  { id: 22, question: "តើការបែងចែកកោសិកាមីតូស (Mitosis) បង្កើតបានកោសិកាប៉ុន្មាន?", answer: "បង្កើតបានកោសិកាកូន ២ ដែលមានចំនួនក្រូម៉ូសូម 2n ដូចកោសិកាមេបេះបិទ។" },
  { id: 23, question: "តើមីតូសមានប៉ុន្មានវគ្គ? អ្វីខ្លះ?", answer: "មាន ៤ វគ្គគឺ៖ ប្រូហ្វាស, មេតាហ្វាស, អាណាហ្វាស, និងតេឡូហ្វាស។" },
  { id: 24, question: "តើក្រូម៉ូសូមតម្រៀបគ្នានៅប្លង់អេក្វាទ័រក្នុងវគ្គណា?", answer: "ក្នុងវគ្គមេតាហ្វាស (Metaphase)។" },
  { id: 25, question: "តើការបែងចែកកោសិកាម៉េយ៉ូស (Meiosis) កើតឡើងលើកោសិកាអ្វី?", answer: "កើតឡើងលើកោសិកាបន្តពូជ (កោសិកាស៊ីមេទិច) ដើម្បីបង្កើតជាកាម៉ែត។" },
  { id: 26, question: "តើម៉េយ៉ូសបង្កើតបានកោសិកាកូនប៉ុន្មាន?", answer: "បង្កើតបានកោសិកាកូន ៤ ដែលមានចំនួនក្រូម៉ូសូម n (Haploid)។" },
  { id: 27, question: "តើបាតុភូតពលាស់ប្តូរស្មើសាច់ (Crossing Over) កើតឡើងក្នុងវគ្គណា?", answer: "កើតឡើងក្នុងវគ្គប្រូហ្វាស I នៃម៉េយ៉ូស I។" },
  { id: 28, question: "តើបាតុភូត Crossing Over មានសារៈសំខាន់អ្វី?", answer: "វាធ្វើឱ្យមានការផ្លាស់ប្តូរសេនេទិច រវាងក្រូម៉ូសូមដូចគ្នា បង្កើតបានជាលក្ខណៈចម្រុះ។" },
  { id: 29, question: "តើអាឡែល (Allele) ជាអ្វី?", answer: "ជាទម្រង់ផ្សេងៗគ្នានៃសែនតែមួយ ដែលកំណត់លក្ខណៈដូចគ្នា។" },
  { id: 30, question: "តើហ្សេណូទីប (Genotype) ជាអ្វី?", answer: "ជាសរុបសែនទាំងអស់ដែលកំណត់លក្ខណៈរបស់សរីរាង្គ។" },
  { id: 31, question: "តើហ្វេណូទីប (Phenotype) ជាអ្វី?", answer: "ជាលក្ខណៈក្រៅដែលស្តែងចេញឱ្យឃើញ ដែលជាលទ្ធផលរវាងហ្សេណូទីប និងបរិស្ថាន។" },
  { id: 32, question: "តើសែនលុប (Dominant Gene) ជាអ្វី?", answer: "ជាសែនដែលស្តែងលក្ខណៈចេញមកក្រៅ ទោះបីជាមានវត្តមានអាឡែលស្រុតក៏ដោយ។" },
  { id: 33, question: "តើសែនស្រុត (Recessive Gene) ជាអ្វី?", answer: "ជាសែនដែលស្តែងលក្ខណៈចេញមកបាន លុះត្រាតែវាជាទម្រង់អូម៉ូស៊ីហ្កុតស្រុត។" },
  { id: 34, question: "តើច្បាប់ទី១ របស់ម៉ង់ដែននិយាយអំពីអ្វី?", answer: "ច្បាប់ឯកសណ្ឋានភាពនៃកូនកាត់ជំនាន់ទី១ (F1)។" },
  { id: 35, question: "តើច្បាប់ទី២ របស់ម៉ង់ដែននិយាយអំពីអ្វី?", answer: "ច្បាប់ការបំបែកធាតុ ឬច្បាប់ភាពបរិសុទ្ធនៃកាម៉ែត។" },
  { id: 36, question: "តើច្បាប់ទី៣ របស់ម៉ង់ដែននិយាយអំពីអ្វី?", answer: "ច្បាប់ការបំបែកធាតុដោយឯករាជ្យនៃគូសែនខុសៗគ្នា។" },
  { id: 37, question: "តើក្រូម៉ូសូមភេទរបស់មនុស្សប្រុសគឺអ្វី?", answer: "គឺ XY។" },
  { id: 38, question: "តើក្រូម៉ូសូមភេទរបស់មនុស្សស្រីគឺអ្វី?", answer: "គឺ XX។" },
  { id: 39, question: "តើមនុស្សមានក្រូម៉ូសូមសរុបប៉ុន្មាន?", answer: "មាន ៤៦ ក្រូម៉ូសូម (ឬ ២៣ គូ)។" },
  { id: 40, question: "តើជំងឺហេម៉ូហ្វីលី (Hemophilia) បណ្តាលមកពីអ្វី?", answer: "បណ្តាលមកពីសែនស្រុតនៅលើក្រូម៉ូសូមភេទ X ដែលធ្វើឱ្យឈាមកកយឺត។" },
  { id: 41, question: "តើមុយតាស៊ីយ៉ុង (Mutation) ជាអ្វី?", answer: "ជាការផ្លាស់ប្តូរភ្លាមៗ និងជាអចិន្ត្រៃយ៍នៃសម្ភារសេនេទិច (DNA)។" },
  { id: 42, question: "តើមុយតាស៊ីយ៉ុងមានប៉ុន្មានប្រភេទចម្បង?", answer: "មាន ២ ប្រភេទគឺ៖ មុយតាស៊ីយ៉ុងសែន (Gene mutation) និងមុយតាស៊ីយ៉ុងក្រូម៉ូសូម (Chromosomal mutation)។" },
  { id: 43, question: "តើទ្រីស៊ូមី ២១ (Trisomy 21) បណ្តាលឱ្យកើតជំងឺអ្វី?", answer: "បណ្តាលឱ្យកើតរោគសញ្ញាដោន (Down Syndrome) ដោយសារលើសក្រូម៉ូសូមទី ២១ មួយ។" },
  { id: 44, question: "តើប្រព័ន្ធប្រសាទមនុស្សចែកចេញជាប៉ុន្មានផ្នែក?", answer: "ចែកជា ២ គឺ៖ ប្រព័ន្ធប្រសាទកណ្តាល (ខួរក្បាល និងខួរឆ្អឹងខ្នង) និងប្រព័ន្ធប្រសាទបរិមណ្ឌល។" },
  { id: 45, question: "តើកោសិកាប្រសាទមានឈ្មោះអ្វី?", answer: "មានឈ្មោះថា ណឺរ៉ូន (Neuron)។" },
  { id: 46, question: "តើណឺរ៉ូនមានសមាសធាតុសំខាន់ៗអ្វីខ្លះ?", answer: "មាន៖ តួណឺរ៉ូន, ដង់ឌ្រីត, និងអាក់សូន។" },
  { id: 47, question: "តើស៊ីណាប់ (Synapse) ជាអ្វី?", answer: "ជាចន្លោះលំហរវាងណឺរ៉ូនពីរ ឬរវាងណឺរ៉ូន និងកោសិកាគោលដៅ សម្រាប់បញ្ជូនព័ត៌មាន។" },
  { id: 48, question: "តើសារធាតុគីមីបញ្ជូនប្រសាទ (Neurotransmitter) ណាខ្លះដែលល្បី?", answer: "មានដូចជា៖ អាសេទីលកូលីន, ដូប៉ាមីន, និងសេរ៉ូថូនីន។" },
  { id: 49, question: "តើអ័រម៉ូន (Hormone) ជាអ្វី?", answer: "ជាសារធាតុគីមីផលិតដោយក្រពេញអង់ដូគ្រីន និងបញ្ជូនតាមចរន្តឈាមទៅកាន់សរីរាង្គគោលដៅ។" },
  { id: 50, question: "តើក្រពេញមេ (Master Gland) ក្នុងរាងកាយជាក្រពេញអ្វី?", answer: "គឺក្រពេញអ៊ីប៉ូភីស (Pituitary Gland)។" },
  { id: 51, question: "តើអ័រម៉ូនអាំងស៊ុយលីន (Insulin) ផលិតចេញពីណា?", answer: "ផលិតចេញពីកោសិកាបេតា (Beta) នៃកោះឡង់សេរ៉ង់ក្នុងលំពែង។" },
  { id: 52, question: "តើអាំងស៊ុយលីនមានតួនាទីអ្វី?", answer: "ជួយបន្ថយកម្រិតស្ករគ្លុយកូសក្នុងឈាម។" },
  { id: 53, question: "តើអ័រម៉ូនគ្លុយកាកុង (Glucagon) មានតួនាទីអ្វី?", answer: "ជួយដំឡើងកម្រិតស្ករគ្លុយកូសក្នុងឈាម។" },
  { id: 54, question: "តើអ៊ុយមីនីតេ (Immunity) ជាអ្វី?", answer: "ជាសមត្ថភាពរបស់រាងកាយក្នុងការការពារ និងប្រឆាំងនឹងភ្នាក់ងារបង្ករោគផ្សេងៗ។" },
  { id: 55, question: "តើអង់ទីហ្សែន (Antigen) ជាអ្វី?", answer: "ជាសារធាតុចម្លែក (ដូចជា វីរុស, បាក់តេរី) ដែលចូលក្នុងរាងកាយ ហើយញ៉ាំងឱ្យមានឆ្លើយតបស៊ាំ។" },
  { id: 56, question: "តើអង់ទីគ័រ (Antibody) ជាអ្វី?", answer: "ជាប្រូតេអ៊ីនផលិតដោយលឹមហ្វូស៊ីត B ដើម្បីកម្ទេច ឬបន្សាបអង់ទីហ្សែនជាក់លាក់។" },
  { id: 57, question: "តើកោសិកាលឹមហ្វូស៊ីត T និង B បង្កើតនៅឯណា?", answer: "បង្កើតនៅក្នុងខួរឆ្អឹង (Bone Marrow)។" },
  { id: 58, question: "តើវ៉ាក់សាំង (Vaccine) ធ្វើការយ៉ាងដូចម្តេច?", answer: "វាបញ្ជូនមេរោគខ្សោយ ឬងាប់ចូលរាងកាយ ដើម្បីភ្ញោចឱ្យរាងកាយបង្កើតអង់ទីគ័រ និងកោសិកាចងចាំ។" },
  { id: 59, question: "តើវីរុស HIV វាយប្រហារលើកោសិកាអ្វី?", answer: "វាយប្រហារលើកោសិកាលឹមហ្វូស៊ីត T4 (ឬ CD4) នៃប្រព័ន្ធភាពស៊ាំ។" },
  { id: 60, question: "តើប្រព័ន្ធអេកូឡូស៊ី (Ecosystem) ជាអ្វី?", answer: "ជាប្រព័ន្ធនៃទំនាក់ទំនងរវាងសហគមន៍ជីវៈ (Biocenosis) និងបរិស្ថានគ្មានជីវិត (Biotope)។" },
  { id: 61, question: "តើអ្នកផលិត (Producers) ក្នុងខ្សែច្រវាក់អាហារជាអ្វី?", answer: "ជារុក្ខជាតិបៃតង ដែលអាចធ្វើរស្មីសំយោគបង្កើតអាហារដោយខ្លួនឯងបាន (Autotrophs)។" },
  { id: 62, question: "តើអ្នកប្រើប្រាស់ (Consumers) ចែកជាអ្វីខ្លះ?", answer: "ចែកជា៖ អ្នកប្រើប្រាស់ថ្នាក់ទី១ (ស៊ីរុក្ខជាតិ), ថ្នាក់ទី២ (ស៊ីសាច់), និងថ្នាក់ទី៣។" },
  { id: 63, question: "តើអ្នកបំបែក (Decomposers) មានតួនាទីអ្វី?", answer: "បំបែកសាកសពសរីរាង្គឱ្យទៅជាសារធាតុអសរីរាង្គ ត្រឡប់ទៅក្នុងដីវិញ (ដូចជា បាក់តេរី, ផ្សិត)។" },
  { id: 64, question: "តើបំរែបំរួលអាកាសធាតុបណ្តាលមកពីបាតុភូតអ្វីខ្លះ?", answer: "បណ្តាលមកពីកើនឡើងនៃឧស្ម័នផ្ទះកញ្ចក់ (CO2, CH4) ដែលធ្វើឱ្យកម្ដៅភពផែនដីកើនឡើង។" }
];

// ==========================================
// 2. Web Audio API (Sound Effects)
// ==========================================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  if (type === 'spin') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.08);
  } else if (type === 'flip') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  }
}

// ==========================================
// 3. Dark / Light Theme Switching
// ==========================================
const themeBtn = document.getElementById('theme-toggle-btn');
const savedTheme = localStorage.getItem('theme') || 'dark';

document.body.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeBtn.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
  themeBtn.innerText = theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// ==========================================
// 4. Progress Tracking System
// ==========================================
const TOTAL_QUESTIONS = biologyQuestions.length;
let completedQuestions = JSON.parse(localStorage.getItem('completed_questions')) || [];

function updateProgressUI() {
  const percent = Math.round((completedQuestions.length / TOTAL_QUESTIONS) * 100);
  document.getElementById('progress-fill').style.width = `${percent}%`;
  document.getElementById('progress-percent').innerText = `${percent}%`;
}

function markQuestionAsDone(questionId) {
  if (!completedQuestions.includes(questionId)) {
    completedQuestions.push(questionId);
    localStorage.setItem('completed_questions', JSON.stringify(completedQuestions));
    updateProgressUI();
  }
}

// ==========================================
// 5. Spin Wheel Section Logic
// ==========================================
const spinBtn = document.getElementById('spin-btn');
const flipBtn = document.getElementById('flip-btn');
const cardText = document.getElementById('card-text');

let currentQuestion = null;
let isFlipped = false;

spinBtn.addEventListener('click', () => {
  playSound('spin');
  const randomIndex = Math.floor(Math.random() * biologyQuestions.length);
  currentQuestion = biologyQuestions[randomIndex];
  isFlipped = false;
  
  cardText.innerText = `សំណួរទី ${currentQuestion.id}: ${currentQuestion.question}`;
  markQuestionAsDone(currentQuestion.id);
});

flipBtn.addEventListener('click', () => {
  if (!currentQuestion) {
    cardText.innerText = "សូមចុច Spin Wheel ជាមុនសិន!";
    return;
  }
  
  playSound('flip');
  isFlipped = !isFlipped;
  
  if (isFlipped) {
    cardText.innerText = `ចម្លើយ: ${currentQuestion.answer}`;
  } else {
    cardText.innerText = `សំណួរទី ${currentQuestion.id}: ${currentQuestion.question}`;
  }
});

// ==========================================
// 6. Render Flashcards Grid (៦៤ សំណួរ)
// ==========================================
const flashcardsContainer = document.getElementById('flashcards-container');

function renderFlashcards() {
  if (!flashcardsContainer) return;
  flashcardsContainer.innerHTML = '';

  biologyQuestions.forEach((q) => {
    const card = document.createElement('div');
    card.classList.add('flashcard-item');

    card.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <strong>សំណួរទី ${q.id}</strong>
          <p>${q.question}</p>
        </div>
        <div class="flashcard-back">
          <strong>ចម្លើយ</strong>
          <p>${q.answer}</p>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      playSound('flip');
      card.classList.toggle('flipped');
      markQuestionAsDone(q.id);
    });

    flashcardsContainer.appendChild(card);
  });
}

// ដំណើការ Render Flashcards និង Progress ពេល Load
renderFlashcards();
updateProgressUI();
