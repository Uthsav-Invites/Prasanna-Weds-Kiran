import { WeddingEvent } from './types';

export const COLORS = {
  primary: '#800000', // Deep Maroon
  secondary: '#FFD700', // Gold
  accent: '#FF8C00', // Dark Orange/Saffron
  background: '#FDF5E6', // Old Lace
  text: '#4A0E0E', // Darker Maroon for text
};

export const WEDDING_DATE = new Date('2026-11-19T04:00:00+05:30');

export const WEDDING_EVENTS: WeddingEvent[] = [
  {
    id: 'reception',
    name: 'Reception & Dinner',
    date: 'Wednesday, November 18, 2026',
    time: '07:30 PM onwards',
    venue: 'Sri Lakshmi Narasimha Swamy Kalyanamandapam - 2, Gudurupalli Village, Punganur Mdl, Annamayya Dt.',
    description: 'We cordially invite you to celebrate this joyous evening with dinner and bestow your heartfelt blessings upon the couple.',
    icon: '🥂',
    color: '#FFD700'
  },
  {
    id: 'muhurtham',
    name: 'Subha Muhurtham',
    date: 'Thursday, November 19, 2026',
    time: 'Early Morning bet. 4:00 AM & 5:00 AM (Kanya Lagnam)',
    venue: 'Sri Lakshmi Narasimha Swamy Kalyanamandapam - 2, Gudurupalli Village, Punganur Mdl, Annamayya Dt.',
    description: 'The sacred moment of union where Prasanna Priya & Kiran tie the knot in Kanya Lagnam in the divine presence of family and elders.',
    icon: '🔥',
    color: '#800000'
  }
];


export const SLOKAS = [
  "శ్రీరస్తు శుభమస్తు కళ్యాణమస్తు ॥ శ్రీ పార్వతీ పరమేశ్వర స్వామి ప్రసన్నమ్ ॥",
  "వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభ । నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ॥",
  "ఓం సహ నావవతు । సహ నౌ భునక్తు । సహ వీర్యం కరవావహై । తేజస్వి నావధీతమస్తు మా విద్విషావహై ॥",
  "యదేతద్ధృదయం తవ తదస్తు హృదయం మమ । యదిదం హృదయం మమ తదస్తు హృదయం తవ ॥"
];

export const HORIZONTAL_IMAGES = [
  { url: '/1.jpeg' },
  { url: '/22.jpeg' },
  { url: '/33.jpeg' },
  { url: '/44.jpeg' },
  { url: '/5.jpeg' },
];
