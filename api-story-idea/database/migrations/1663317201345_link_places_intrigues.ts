/*
import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class extends BaseSchema {
  protected tableName = 'link_places_intrigues'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('place_id').unsigned().references('places.id')
      table.integer('intrigue_id').unsigned().references('intrigues.id')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
*/
