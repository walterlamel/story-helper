import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Personnage extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  
  @column()
  public name: string
  
  @column()
  public type: string

  @column()
  public adjectifs: string

  @column()
  public psychologie: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
