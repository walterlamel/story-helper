import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Type from 'App/Models/Type'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public name: string

  @column()
  public typeId: number

  @column()
  public desc: string
  
  @column()
  public img: string

  @column()
  public is_active: boolean

  
  @belongsTo(() => Type, {
    foreignKey: 'typeId'
  })
  public type: BelongsTo<typeof Type>
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
