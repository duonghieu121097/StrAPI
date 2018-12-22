'use strict';

/**
 * Note.js controller
 *
 * @description: A set of functions called "actions" for managing `Note`.
 */

module.exports = {

  /**
   * Retrieve note records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.note.search(ctx.query);
    } else {
      return strapi.services.note.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a note record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.note.fetch(ctx.params);
  },

  /**
   * Count note records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.note.count(ctx.query);
  },

  /**
   * Create a/an note record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.note.add(ctx.request.body);
  },

  /**
   * Update a/an note record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.note.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an note record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.note.remove(ctx.params);
  },

  /**
   * Add relation to a/an note record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.note.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an note record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.note.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an note record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.note.removeRelation(ctx.params, ctx.request.body);
  }
};
