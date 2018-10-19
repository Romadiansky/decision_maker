exports.seed = function(knex, Promise) {
  return knex('votes').del()
    .then(function () {
      return Promise.all([
        knex('votes').insert({vote_id: 1, voter_name: 'NAME1', choice_id: 1, poll_id: 1, vote_weight: 5}),
        knex('votes').insert({vote_id: 2, voter_name: 'NAME1', choice_id: 2, poll_id: 1, vote_weight: 4}),
        knex('votes').insert({vote_id: 3, voter_name: 'NAME1', choice_id: 3, poll_id: 1, vote_weight: 3}),
        knex('votes').insert({vote_id: 4, voter_name: 'NAME1', choice_id: 4, poll_id: 1, vote_weight: 2}),
        knex('votes').insert({vote_id: 5, voter_name: 'NAME1', choice_id: 5, poll_id: 1, vote_weight: 1}),
        knex('votes').insert({vote_id: 7, voter_name: 'NAME2', choice_id: 1, poll_id: 1, vote_weight: 5}),
        knex('votes').insert({vote_id: 8, voter_name: 'NAME2', choice_id: 2, poll_id: 1, vote_weight: 4}),
        knex('votes').insert({vote_id: 9, voter_name: 'NAME2', choice_id: 3, poll_id: 1, vote_weight: 3}),
        knex('votes').insert({vote_id: 10, voter_name: 'NAME2', choice_id: 4, poll_id: 1, vote_weight: 2}),
        knex('votes').insert({vote_id: 11, voter_name: 'NAME2', choice_id: 5, poll_id: 1, vote_weight: 1}),
        knex('votes').insert({vote_id: 13, voter_name: 'NAME3', choice_id: 1, poll_id: 1, vote_weight: 5}),
        knex('votes').insert({vote_id: 14, voter_name: 'NAME3', choice_id: 2, poll_id: 1, vote_weight: 4}),
        knex('votes').insert({vote_id: 15, voter_name: 'NAME3', choice_id: 3, poll_id: 1, vote_weight: 3}),
        knex('votes').insert({vote_id: 16, voter_name: 'NAME3', choice_id: 4, poll_id: 1, vote_weight: 2}),
        knex('votes').insert({vote_id: 17, voter_name: 'NAME3', choice_id: 5, poll_id: 1, vote_weight: 1}),
        knex('votes').insert({vote_id: 19, voter_name: 'NAME4', choice_id: 1, poll_id: 1, vote_weight: 5}),
        knex('votes').insert({vote_id: 20, voter_name: 'NAME4', choice_id: 2, poll_id: 1, vote_weight: 4}),
        knex('votes').insert({vote_id: 21, voter_name: 'NAME4', choice_id: 3, poll_id: 1, vote_weight: 3}),
        knex('votes').insert({vote_id: 22, voter_name: 'NAME4', choice_id: 4, poll_id: 1, vote_weight: 2}),
        knex('votes').insert({vote_id: 23, voter_name: 'NAME4', choice_id: 5, poll_id: 1, vote_weight: 1}),
        knex('votes').insert({vote_id: 24, voter_name: 'NAME5', choice_id: 6, poll_id: 2, vote_weight: 8}),
        knex('votes').insert({vote_id: 25, voter_name: 'NAME5', choice_id: 7, poll_id: 2, vote_weight: 7}),
        knex('votes').insert({vote_id: 26, voter_name: 'NAME5', choice_id: 8, poll_id: 2, vote_weight: 6}),
        knex('votes').insert({vote_id: 27, voter_name: 'NAME5', choice_id: 9, poll_id: 2, vote_weight: 5}),
        knex('votes').insert({vote_id: 28, voter_name: 'NAME5', choice_id: 10, poll_id: 2, vote_weight: 4}),
        knex('votes').insert({vote_id: 29, voter_name: 'NAME5', choice_id: 11, poll_id: 2, vote_weight: 3}),
        knex('votes').insert({vote_id: 30, voter_name: 'NAME5', choice_id: 12, poll_id: 2, vote_weight: 2}),
        knex('votes').insert({vote_id: 31, voter_name: 'NAME5', choice_id: 13, poll_id: 2, vote_weight: 1}),
        knex('votes').insert({vote_id: 33, voter_name: 'NAME6', choice_id: 6, poll_id: 2, vote_weight: 8}),
        knex('votes').insert({vote_id: 34, voter_name: 'NAME6', choice_id: 7, poll_id: 2, vote_weight: 7}),
        knex('votes').insert({vote_id: 35, voter_name: 'NAME6', choice_id: 8, poll_id: 2, vote_weight: 6}),
        knex('votes').insert({vote_id: 36, voter_name: 'NAME6', choice_id: 9, poll_id: 2, vote_weight: 5}),
        knex('votes').insert({vote_id: 37, voter_name: 'NAME6', choice_id: 10, poll_id: 2, vote_weight: 4}),
        knex('votes').insert({vote_id: 38, voter_name: 'NAME6', choice_id: 11, poll_id: 2, vote_weight: 3}),
        knex('votes').insert({vote_id: 39, voter_name: 'NAME6', choice_id: 12, poll_id: 2, vote_weight: 2}),
        knex('votes').insert({vote_id: 40, voter_name: 'NAME6', choice_id: 13, poll_id: 2, vote_weight: 1}),
        knex('votes').insert({vote_id: 42, voter_name: 'NAME7', choice_id: 6, poll_id: 2, vote_weight: 8}),
        knex('votes').insert({vote_id: 43, voter_name: 'NAME7', choice_id: 7, poll_id: 2, vote_weight: 7}),
        knex('votes').insert({vote_id: 44, voter_name: 'NAME7', choice_id: 8, poll_id: 2, vote_weight: 6}),
        knex('votes').insert({vote_id: 45, voter_name: 'NAME7', choice_id: 9, poll_id: 2, vote_weight: 5}),
        knex('votes').insert({vote_id: 46, voter_name: 'NAME7', choice_id: 10, poll_id: 2, vote_weight: 4}),
        knex('votes').insert({vote_id: 47, voter_name: 'NAME7', choice_id: 11, poll_id: 2, vote_weight: 3}),
        knex('votes').insert({vote_id: 48, voter_name: 'NAME7', choice_id: 12, poll_id: 2, vote_weight: 2}),
        knex('votes').insert({vote_id: 49, voter_name: 'NAME7', choice_id: 13, poll_id: 2, vote_weight: 1}),
        knex('votes').insert({vote_id: 51, voter_name: 'NAME8', choice_id: 6, poll_id: 2, vote_weight: 8}),
        knex('votes').insert({vote_id: 52, voter_name: 'NAME8', choice_id: 7, poll_id: 2, vote_weight: 7}),
        knex('votes').insert({vote_id: 53, voter_name: 'NAME8', choice_id: 8, poll_id: 2, vote_weight: 6}),
        knex('votes').insert({vote_id: 54, voter_name: 'NAME8', choice_id: 9, poll_id: 2, vote_weight: 5}),
        knex('votes').insert({vote_id: 55, voter_name: 'NAME8', choice_id: 10, poll_id: 2, vote_weight: 4}),
        knex('votes').insert({vote_id: 56, voter_name: 'NAME8', choice_id: 11, poll_id: 2, vote_weight: 3}),
        knex('votes').insert({vote_id: 57, voter_name: 'NAME8', choice_id: 12, poll_id: 2, vote_weight: 2}),
        knex('votes').insert({vote_id: 58, voter_name: 'NAME8', choice_id: 13, poll_id: 2, vote_weight: 1}),
        knex('votes').insert({vote_id: 60, voter_name: 'NAME9', choice_id: 6, poll_id: 2, vote_weight: 8}),
        knex('votes').insert({vote_id: 61, voter_name: 'NAME9', choice_id: 7, poll_id: 2, vote_weight: 7}),
        knex('votes').insert({vote_id: 62, voter_name: 'NAME9', choice_id: 8, poll_id: 2, vote_weight: 6}),
        knex('votes').insert({vote_id: 63, voter_name: 'NAME9', choice_id: 9, poll_id: 2, vote_weight: 5}),
        knex('votes').insert({vote_id: 64, voter_name: 'NAME9', choice_id: 10, poll_id: 2, vote_weight: 4}),
        knex('votes').insert({vote_id: 65, voter_name: 'NAME9', choice_id: 11, poll_id: 2, vote_weight: 3}),
        knex('votes').insert({vote_id: 66, voter_name: 'NAME9', choice_id: 12, poll_id: 2, vote_weight: 2}),
        knex('votes').insert({vote_id: 67, voter_name: 'NAME9', choice_id: 13, poll_id: 2, vote_weight: 1}),
        knex('votes').insert({vote_id: 69, voter_name: 'NAME10', choice_id: 6, poll_id: 2, vote_weight: 8}),
        knex('votes').insert({vote_id: 70, voter_name: 'NAME10', choice_id: 7, poll_id: 2, vote_weight: 7}),
        knex('votes').insert({vote_id: 71, voter_name: 'NAME10', choice_id: 8, poll_id: 2, vote_weight: 6}),
        knex('votes').insert({vote_id: 72, voter_name: 'NAME10', choice_id: 9, poll_id: 2, vote_weight: 5}),
        knex('votes').insert({vote_id: 73, voter_name: 'NAME10', choice_id: 10, poll_id: 2, vote_weight: 4}),
        knex('votes').insert({vote_id: 74, voter_name: 'NAME10', choice_id: 11, poll_id: 2, vote_weight: 3}),
        knex('votes').insert({vote_id: 75, voter_name: 'NAME10', choice_id: 12, poll_id: 2, vote_weight: 2}),
        knex('votes').insert({vote_id: 76, voter_name: 'NAME10', choice_id: 13, poll_id: 2, vote_weight: 1}),
        knex('votes').insert({vote_id: 77, voter_name: 'NAME11', choice_id: 14, poll_id: 3, vote_weight: 4}),
        knex('votes').insert({vote_id: 78, voter_name: 'NAME11', choice_id: 15, poll_id: 3, vote_weight: 3}),
        knex('votes').insert({vote_id: 79, voter_name: 'NAME11', choice_id: 16, poll_id: 3, vote_weight: 2}),
        knex('votes').insert({vote_id: 80, voter_name: 'NAME11', choice_id: 17, poll_id: 3, vote_weight: 1}),
        knex('votes').insert({vote_id: 82, voter_name: 'NAME12', choice_id: 14, poll_id: 3, vote_weight: 4}),
        knex('votes').insert({vote_id: 83, voter_name: 'NAME12', choice_id: 15, poll_id: 3, vote_weight: 3}),
        knex('votes').insert({vote_id: 84, voter_name: 'NAME12', choice_id: 16, poll_id: 3, vote_weight: 2}),
        knex('votes').insert({vote_id: 85, voter_name: 'NAME12', choice_id: 17, poll_id: 3, vote_weight: 1}),
        knex('votes').insert({vote_id: 87, voter_name: 'NAME13', choice_id: 14, poll_id: 3, vote_weight: 4}),
        knex('votes').insert({vote_id: 88, voter_name: 'NAME13', choice_id: 15, poll_id: 3, vote_weight: 3}),
        knex('votes').insert({vote_id: 89, voter_name: 'NAME13', choice_id: 16, poll_id: 3, vote_weight: 2}),
        knex('votes').insert({vote_id: 90, voter_name: 'NAME13', choice_id: 17, poll_id: 3, vote_weight: 1}),
        knex('votes').insert({vote_id: 91, voter_name: 'NAME14', choice_id: 18, poll_id: 4, vote_weight: 5}),
        knex('votes').insert({vote_id: 92, voter_name: 'NAME14', choice_id: 19, poll_id: 4, vote_weight: 4}),
        knex('votes').insert({vote_id: 93, voter_name: 'NAME14', choice_id: 20, poll_id: 4, vote_weight: 3}),
        knex('votes').insert({vote_id: 94, voter_name: 'NAME14', choice_id: 21, poll_id: 4, vote_weight: 2}),
        knex('votes').insert({vote_id: 95, voter_name: 'NAME14', choice_id: 22, poll_id: 4, vote_weight: 1}),
        knex('votes').insert({vote_id: 97, voter_name: 'NAME15', choice_id: 18, poll_id: 4, vote_weight: 5}),
        knex('votes').insert({vote_id: 98, voter_name: 'NAME15', choice_id: 19, poll_id: 4, vote_weight: 4}),
        knex('votes').insert({vote_id: 99, voter_name: 'NAME15', choice_id: 20, poll_id: 4, vote_weight: 3}),
        knex('votes').insert({vote_id: 100, voter_name: 'NAME15', choice_id: 21, poll_id: 4, vote_weight: 2}),
        knex('votes').insert({vote_id: 101, voter_name: 'NAME15', choice_id: 22, poll_id: 4, vote_weight: 1}),
        knex('votes').insert({vote_id: 103, voter_name: 'NAME16', choice_id: 18, poll_id: 4, vote_weight: 5}),
        knex('votes').insert({vote_id: 104, voter_name: 'NAME16', choice_id: 19, poll_id: 4, vote_weight: 4}),
        knex('votes').insert({vote_id: 105, voter_name: 'NAME16', choice_id: 20, poll_id: 4, vote_weight: 3}),
        knex('votes').insert({vote_id: 106, voter_name: 'NAME16', choice_id: 21, poll_id: 4, vote_weight: 2}),
        knex('votes').insert({vote_id: 107, voter_name: 'NAME16', choice_id: 22, poll_id: 4, vote_weight: 1}),
        knex('votes').insert({vote_id: 109, voter_name: 'NAME17', choice_id: 18, poll_id: 4, vote_weight: 5}),
        knex('votes').insert({vote_id: 110, voter_name: 'NAME17', choice_id: 19, poll_id: 4, vote_weight: 4}),
        knex('votes').insert({vote_id: 111, voter_name: 'NAME17', choice_id: 20, poll_id: 4, vote_weight: 3}),
        knex('votes').insert({vote_id: 112, voter_name: 'NAME17', choice_id: 21, poll_id: 4, vote_weight: 2}),
        knex('votes').insert({vote_id: 113, voter_name: 'NAME17', choice_id: 22, poll_id: 4, vote_weight: 1}),
        knex('votes').insert({vote_id: 115, voter_name: 'NAME18', choice_id: 18, poll_id: 4, vote_weight: 5}),
        knex('votes').insert({vote_id: 116, voter_name: 'NAME18', choice_id: 19, poll_id: 4, vote_weight: 4}),
        knex('votes').insert({vote_id: 117, voter_name: 'NAME18', choice_id: 20, poll_id: 4, vote_weight: 3}),
        knex('votes').insert({vote_id: 118, voter_name: 'NAME18', choice_id: 21, poll_id: 4, vote_weight: 2}),
        knex('votes').insert({vote_id: 119, voter_name: 'NAME18', choice_id: 22, poll_id: 4, vote_weight: 1}),
        knex('votes').insert({vote_id: 121, voter_name: 'NAME19', choice_id: 18, poll_id: 4, vote_weight: 5}),
        knex('votes').insert({vote_id: 122, voter_name: 'NAME19', choice_id: 19, poll_id: 4, vote_weight: 4}),
        knex('votes').insert({vote_id: 123, voter_name: 'NAME19', choice_id: 20, poll_id: 4, vote_weight: 3}),
        knex('votes').insert({vote_id: 124, voter_name: 'NAME19', choice_id: 21, poll_id: 4, vote_weight: 2}),
        knex('votes').insert({vote_id: 125, voter_name: 'NAME19', choice_id: 22, poll_id: 4, vote_weight: 1}),
        knex('votes').insert({vote_id: 127, voter_name: 'NAME20', choice_id: 18, poll_id: 4, vote_weight: 5}),
        knex('votes').insert({vote_id: 128, voter_name: 'NAME20', choice_id: 19, poll_id: 4, vote_weight: 4}),
        knex('votes').insert({vote_id: 129, voter_name: 'NAME20', choice_id: 20, poll_id: 4, vote_weight: 3}),
        knex('votes').insert({vote_id: 130, voter_name: 'NAME20', choice_id: 21, poll_id: 4, vote_weight: 2}),
        knex('votes').insert({vote_id: 131, voter_name: 'NAME20', choice_id: 22, poll_id: 4, vote_weight: 1}),
        knex('votes').insert({vote_id: 132, voter_name: 'NAME21', choice_id: 23, poll_id: 5, vote_weight: 6}),
        knex('votes').insert({vote_id: 133, voter_name: 'NAME21', choice_id: 24, poll_id: 5, vote_weight: 5}),
        knex('votes').insert({vote_id: 134, voter_name: 'NAME21', choice_id: 25, poll_id: 5, vote_weight: 4}),
        knex('votes').insert({vote_id: 135, voter_name: 'NAME21', choice_id: 26, poll_id: 5, vote_weight: 3}),
        knex('votes').insert({vote_id: 136, voter_name: 'NAME21', choice_id: 27, poll_id: 5, vote_weight: 2}),
        knex('votes').insert({vote_id: 137, voter_name: 'NAME21', choice_id: 28, poll_id: 5, vote_weight: 1}),
        knex('votes').insert({vote_id: 139, voter_name: 'NAME22', choice_id: 23, poll_id: 5, vote_weight: 6}),
        knex('votes').insert({vote_id: 140, voter_name: 'NAME22', choice_id: 24, poll_id: 5, vote_weight: 5}),
        knex('votes').insert({vote_id: 141, voter_name: 'NAME22', choice_id: 25, poll_id: 5, vote_weight: 4}),
        knex('votes').insert({vote_id: 142, voter_name: 'NAME22', choice_id: 26, poll_id: 5, vote_weight: 3}),
        knex('votes').insert({vote_id: 143, voter_name: 'NAME22', choice_id: 27, poll_id: 5, vote_weight: 2}),
        knex('votes').insert({vote_id: 144, voter_name: 'NAME22', choice_id: 28, poll_id: 5, vote_weight: 1}),
        knex('votes').insert({vote_id: 146, voter_name: 'NAME23', choice_id: 23, poll_id: 5, vote_weight: 6}),
        knex('votes').insert({vote_id: 147, voter_name: 'NAME23', choice_id: 24, poll_id: 5, vote_weight: 5}),
        knex('votes').insert({vote_id: 148, voter_name: 'NAME23', choice_id: 25, poll_id: 5, vote_weight: 4}),
        knex('votes').insert({vote_id: 149, voter_name: 'NAME23', choice_id: 26, poll_id: 5, vote_weight: 3}),
        knex('votes').insert({vote_id: 150, voter_name: 'NAME23', choice_id: 27, poll_id: 5, vote_weight: 2}),
        knex('votes').insert({vote_id: 151, voter_name: 'NAME23', choice_id: 28, poll_id: 5, vote_weight: 1}),
        knex('votes').insert({vote_id: 153, voter_name: 'NAME24', choice_id: 23, poll_id: 5, vote_weight: 6}),
        knex('votes').insert({vote_id: 154, voter_name: 'NAME24', choice_id: 24, poll_id: 5, vote_weight: 5}),
        knex('votes').insert({vote_id: 155, voter_name: 'NAME24', choice_id: 25, poll_id: 5, vote_weight: 4}),
        knex('votes').insert({vote_id: 156, voter_name: 'NAME24', choice_id: 26, poll_id: 5, vote_weight: 3}),
        knex('votes').insert({vote_id: 157, voter_name: 'NAME24', choice_id: 27, poll_id: 5, vote_weight: 2}),
        knex('votes').insert({vote_id: 158, voter_name: 'NAME24', choice_id: 28, poll_id: 5, vote_weight: 1}),
        knex('votes').insert({vote_id: 160, voter_name: 'NAME25', choice_id: 23, poll_id: 5, vote_weight: 6}),
        knex('votes').insert({vote_id: 161, voter_name: 'NAME25', choice_id: 24, poll_id: 5, vote_weight: 5}),
        knex('votes').insert({vote_id: 162, voter_name: 'NAME25', choice_id: 25, poll_id: 5, vote_weight: 4}),
        knex('votes').insert({vote_id: 163, voter_name: 'NAME25', choice_id: 26, poll_id: 5, vote_weight: 3}),
        knex('votes').insert({vote_id: 164, voter_name: 'NAME25', choice_id: 27, poll_id: 5, vote_weight: 2}),
        knex('votes').insert({vote_id: 165, voter_name: 'NAME25', choice_id: 28, poll_id: 5, vote_weight: 1}),
        knex('votes').insert({vote_id: 167, voter_name: 'NAME26', choice_id: 23, poll_id: 5, vote_weight: 6}),
        knex('votes').insert({vote_id: 168, voter_name: 'NAME26', choice_id: 24, poll_id: 5, vote_weight: 5}),
        knex('votes').insert({vote_id: 169, voter_name: 'NAME26', choice_id: 25, poll_id: 5, vote_weight: 4}),
        knex('votes').insert({vote_id: 170, voter_name: 'NAME26', choice_id: 26, poll_id: 5, vote_weight: 3}),
        knex('votes').insert({vote_id: 171, voter_name: 'NAME26', choice_id: 27, poll_id: 5, vote_weight: 2}),
        knex('votes').insert({vote_id: 172, voter_name: 'NAME26', choice_id: 28, poll_id: 5, vote_weight: 1})
      ]);
    });
};