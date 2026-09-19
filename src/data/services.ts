export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  alt: string;
}

export const services: Service[] = [
  {
    id: 'botox',
    name: 'Botox & Wrinkle Treatments',
    shortName: 'Botox',
    description:
      'Smooth fine lines and soften expression wrinkles with precisely placed neurotoxin injections for a natural, refreshed look.',
    image:
      'https://images.pexels.com/photos/4586708/pexels-photo-4586708.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Practitioner administering a cosmetic injection to a client',
  },
  {
    id: 'fillers',
    name: 'Dermal Fillers',
    shortName: 'Dermal Fillers',
    description:
      'Restore volume, define contours, and smooth deep folds with hyaluronic-acid-based fillers tailored to your facial anatomy.',
    image:
      'https://images.pexels.com/photos/34775443/pexels-photo-34775443.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Professional administering a lip filler injection',
  },
  {
    id: 'laser',
    name: 'Laser Hair Removal',
    shortName: 'Laser Hair Removal',
    description:
      'Achieve lasting smoothness with advanced laser technology safe for all skin tones, guided by experienced specialists.',
    image:
      'https://images.pexels.com/photos/14438392/pexels-photo-14438392.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hand holding a laser hair removal device in a clinic',
  },
  {
    id: 'skin',
    name: 'Skin Rejuvenation',
    shortName: 'Skin Rejuvenation',
    description:
      'Renew tone, texture, and radiance with medical-grade resurfacing, microneedling, and bespoke rejuvenation protocols.',
    image:
      'https://images.pexels.com/photos/37240358/pexels-photo-37240358.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Woman receiving a calming facial mask treatment',
  },
  {
    id: 'facials',
    name: 'Medical Facials',
    shortName: 'Facial',
    description:
      'Deeply corrective yet indulgent facials combining clinical actives with a soothing, sensorial spa experience.',
    image:
      'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Beautician applying a facial mask to a relaxed client',
  },
  {
    id: 'body',
    name: 'Body Contouring',
    shortName: 'Body Contouring',
    description:
      'Sculpt and refine your silhouette with non-invasive body contouring that targets stubborn areas with no downtime.',
    image:
      'https://images.pexels.com/photos/27659253/pexels-photo-27659253.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Body contouring treatment using cavitation equipment',
  },
];

export const interestOptions = [
  'Botox',
  'Dermal Fillers',
  'Laser Hair Removal',
  'Skin Rejuvenation',
  'Facial',
  'Body Contouring',
  'Not Sure Yet',
] as const;

export const timelineOptions = ['ASAP', 'This Week', 'Next Week', 'Just Exploring'] as const;

export const contactMethodOptions = ['WhatsApp / SMS', 'Phone', 'Email'] as const;
