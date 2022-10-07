/**
 * Item
 * 
 * Objet qui correspond à une carte à piocher. 
 * 
 * name : nom de l'élément
 * type : place | personnage | intrigue
 * desc : description longue des éléments
 * img : url de l'image pour la représenter
 * is_active : reste en brouillon si false
 */

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      
      table.string('name').notNullable()
      table.text('desc').notNullable().unique()
      table.string('img')
      table.boolean('is_active').defaultTo(false)
      
      //ForeignKey
      table.integer('type_id').notNullable().references('id').inTable('types')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
