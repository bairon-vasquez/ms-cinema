import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'screenings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.datetime("date")
      table.integer("movie_id").unsigned().references("movies.id").onDelete("CASCADE") //para poder referenciar la clase Movie y su respectivo atributo el oneDelete es en caso de que se borre Movie
      table.integer("theater_id").unsigned().references("theaters.id").onDelete("CASCADE")
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
