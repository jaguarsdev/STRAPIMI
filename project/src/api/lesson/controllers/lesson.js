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
        const lessons = response.data.attributes.UniqueID;
        // get user payed
        const userbuy = await ctx.state.user.Payed;

        // Function Validation is user buy product or not
        const search = async (nameKey, myArray) => {
            for (var i=0; i < myArray.length; i++) {
                if (myArray[i].uniqueid === nameKey) {
                    return response;
                }
            }
            return ctx.body = "you dont have prem"
        }
        // return data
        return search(lessons, await userbuy);

        // const hello = strapi.db.query('api::lesson.lesson').findMany({
        //     populate: true,
        //   });
        //   const fromUser = await strapi.db.query('api::lesson.lesson').findMany({where: { "LessonTitle": "esson Two" }});

        // return fromUser;

    }
    
    // async find(ctx) {
    //     ctx.query = { ...ctx.query, local: 'en' }
    //     const { data, meta } = await super.find(ctx);
    //     const mineDate = data;
    //     meta.date = Date.now()
    //     return { data, meta };
    // },
    
})
);
