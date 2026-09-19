export interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  quote: string;
  image: string;
  alt: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Isabella R.',
    location: 'New York, NY',
    treatment: 'Dermal Fillers',
    quote:
      'I have never felt more listened to in a consultation. The results were subtle exactly where I wanted — friends keep saying I look rested, not done.',
    image:
      'https://images.pexels.com/photos/33170458/pexels-photo-33170458.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Portrait of a woman with glowing skin',
  },
  {
    name: 'Marcus T.',
    location: 'Greenwich, CT',
    treatment: 'Botox & Skin Rejuvenation',
    quote:
      'The environment is genuinely calming — no clinical sterility. My provider mapped every injection on a mirror first. I left feeling confident, not nervous.',
    image:
      'https://images.pexels.com/photos/24503934/pexels-photo-24503934.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Portrait of a person with a serene expression',
  },
  {
    name: 'Priya S.',
    location: 'Hoboken, NJ',
    treatment: 'Laser Hair Removal',
    quote:
      'Six sessions in and I barely think about shaving anymore. The team adjusted settings for my skin tone every visit — I always felt safe and cared for.',
    image:
      'https://images.pexels.com/photos/10176348/pexels-photo-10176348.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Portrait of an elegant woman with flawless makeup',
  },
];
