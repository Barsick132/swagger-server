'use strict';

exports.accessCheck = function (knex, data) {
    return knex.select('vol_id', 'vol_fullname', 'vol_admin').from('volunteer')
        .where({vol_email: data.vol_email, vol_hashpass: data.vol_hashpass});
};

exports.insertQuote = function (knex, body) {
    return knex('quotes').insert(body).returning('qot_id');
};