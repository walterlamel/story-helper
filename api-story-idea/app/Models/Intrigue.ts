import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Place from 'App/Models/Place'

export default class Intrigue extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public desc: string

  @column()
  public detail: string
  
  @column()
  public img: string

  @column()
  public isActive: boolean

  
  @manyToMany(() => Place, {
    pivotTable : 'link_places_intrigues'
  })
  public places: ManyToMany<typeof Place>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
