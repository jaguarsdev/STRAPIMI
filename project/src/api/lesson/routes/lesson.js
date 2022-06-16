'use strict';

/**
 * lesson router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lesson.lesson'
, {
    prefix: '',
    populate: '*',
    // only: ['find', 'findOne'],
    except: [],
    config: {
      find: {},
    findOne: {
        //   policies: ['global::includeUserRelations'],
          middlewares: [],
      },
      create: {},
      update: {},
      delete: {},
    },
}
);
// module.exports = {
//     routes: [
//       {
//         method: 'GET',
//         path: '/lessons',
//         handler: 'lessons.findOne',
//         config: {
//           /**
//             The `is-admin` policy found at `./src/api/restaurant/policies/is-admin.js`
//             is executed before the `find` action in the `Restaurant.js` controller.
//           */
//         //   policies: ['includeUserRelations']
//         }
//       }
//     ]
//   }
