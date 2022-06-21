'use strict';

/**
 *  lesson controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lesson.lesson'
, ({ strapi }) =>  ({
    
    
    async findOne(ctx, next) {

        // get lesson data
        const response = await super.findOne(ctx); 
        const lessons = response.data.id;
        
        // Add populate "orders" in api
        const entries = await strapi.entityService.findOne('plugin::users-permissions.user', ctx.state.user.id, {
            // fields: ['LessonTitle', 'Lesson One'],
            // filters: { id: ctx.state.user.id },
            // sort: { createdAt: 'DESC' },
            populate: { orders: true },
        });

        
        // get user payed
        const userbuy = await entries.orders;
        
        // Function Validation is user buy product or not
        const search = async (lessons, userbuy) => {

            for (var i=0; i < userbuy.length; i++) {

                for (var b=0; b < userbuy[i].productBuyed.length; b++) {
                    
                    if (userbuy[i].productBuyed[b].id === lessons) {
                        return response;
                    }
                }
            }
            return ctx.body = "you dont have prem"
        }
        // return data
        return search(lessons, await userbuy);
        
        // return lessons; 
    }
})


// const entries = await strapi.entityService.findOne('plugin::users-permissions.user', {
//     // fields: ['LessonTitle', 'Lesson One'],
//     filters: { id: ctx.state.user.id },
//     // sort: { createdAt: 'DESC' },
//     populate: { orders: true },
// });


// const hello = strapi.db.query('api::lesson.lesson').findMany({
//     populate: true,
//   });
//   const fromUser = await strapi.db.query('api::lesson.lesson').findMany({where: { "LessonTitle": "esson Two" }});
//   const fromUser = await strapi.entityService.findOne('api::lesson.lesson', 1, {fields: ["LessonTitle": "Lesson One"]});

// async find(ctx) {
//     ctx.query = { ...ctx.query, local: 'en' }
//     const { data, meta } = await super.find(ctx);
//     const mineDate = data;
//     meta.date = Date.now()
//     return { data, meta };
// },
);
