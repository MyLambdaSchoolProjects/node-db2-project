exports.up = function(knex) {
  return knex.schema.createTable("cars", car => {
    car.increments();

    car
      .string("vin")
      .notNullable()
      .unique();

    car.string("make").notNullable();
    car.string('model').notNullable();
    car.double('mileage').notNullable();
    car.integer('year').nullable();
    car.string('transmission_type').nullable();
    car.string('title_status').nullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists();
};
