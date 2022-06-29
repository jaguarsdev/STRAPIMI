'use strict';

/**
 * teacher router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::teacher.teacher', {
    prefix: '',
    // only: ['find', 'findOne'],
    // populate : `TeacherImage`,
    except: [],
    config: {
        find: {},
        findOne: {},
        create: {},
        update: {},
        delete: {},
    },
});
