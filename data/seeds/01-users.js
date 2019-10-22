exports.seed = knex =>
  knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          firstName: 'Plant',
          lastName: 'Lover',
          username: 'ilovetrees',
          password: 'password',
          phoneNumber: '8005551212',
        },
        {
          firstName: 'Plant',
          lastName: 'Waterer',
          username: 'iloveflowers',
          password: 'password',
          phoneNumber: '8005551212',
        },
        {
          firstName: 'Plant',
          lastName: 'Controller',
          username: 'ilovevegetables',
          password: 'password',
          phoneNumber: '8005551212',
        },
      ])
    );
