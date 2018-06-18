exports.seed = function(knex, Promise) {
  return knex('topic').del()
  .then(function () {
    return knex('topic').insert([{ 
      id: 1, 
      title: "Tupac Shakur"
    },{
      id: 2,
      title: "Kendrick Lamar"
    },{
      id: 3,
      title: "Andre 3000"
    },{
      id: 4,
      title: "Nasir Jones"
    },{
      id: 5,
      title: "Biggie Smalls"
    }]).then(() => {
      knex.raw('ALTER SEQUENCE topic_seq_id RESTART WITH 6');
    });
  });
};
