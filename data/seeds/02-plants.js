exports.seed = knex =>
  knex('plants')
    .del()
    .then(() =>
      knex('plants').insert([
        {
          name: 'Tree',
          type: 'Huggable',
          location: 'Front Yard',
          userId: 1,
          waterSchedule: 'When ever it rains',
        },
        {
          name: 'Orchid',
          type: 'Flower',
          location: 'Roof',
          userId: 2,
          waterSchedule: 'I will figure it out after I buy my 10th plant',
        },
        {
          name: 'Fern',
          type: 'Annoying',
          location: 'Living Room',
          userId: 3,
          waterSchedule: 'Once Weekly',
        },
        {
          name: 'Cactus',
          type: 'Huggable',
          location: 'Back Yard',
          userId: 1,
          waterSchedule: 'Never',
        },
        {
          name: 'Rose',
          type: 'Oh Crap I Messed Up',
          location: 'Sending to better half',
          userId: 2,
          waterSchedule: 'If you want to stay happy, daily',
        },
        {
          name: 'Onion',
          type: 'Crier',
          location: 'Kitchen',
          userId: 1,
          waterSchedule: 'Every time you cut it',
        },
      ])
    );
