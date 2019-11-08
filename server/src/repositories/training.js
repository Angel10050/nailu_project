'use strict';

const { connection } = require('../libs/query');

async function getTraining ({day, mount, description, image}) {
  const training = await connection.query(
    `INSERT INTO trainings (day, mount, description, image) VALUES ('${day}', '${mount}', '${description}', '${image}')`
  );
  return training;
}

module.exports = { getTraining };
