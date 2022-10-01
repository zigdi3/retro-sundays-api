import { Column, ColumnOptions, ColumnType } from 'typeorm'

const typesMappingForSQLite: { [key: string]: ColumnType } = {

  // Numéricos exatos
  bigint: 'bigint',
  numeric: 'numeric',
  bit: 'boolean',
  smallint: 'integer',
  decimal: 'decimal',
  smallmoney: 'double',
  int: 'int',
  tinyint: 'integer',
  money: 'double',

  // Numéricos aproximados
  float: 'double',
  real: 'real',

  // Data e hora
  date: 'date',
  datetime: 'datetime',
  datetime2: 'datetime',
  datetimeoffset: null,
  smalldatetime: null,
  time: 'time',

  // Cadeias de caracteres
  char: 'varchar',
  text: 'text',
  varchar: 'varchar',

  // Cadeias de caracteres Unicode
  nchar: 'varchar',
  ntext: 'text',
  nvarchar: 'varchar',

  // Cadeia de caracteres binária
  binary: null,
  varbinary: null,
  image: 'blob',

  // Outros tipos de dados
  cursor: null,
  rowversion: null,
  hierarchyid: null,
  uniqueidentifier: null,
  sql_variant: null,
  xml: null
}

export function resolveDbType (mssqlType: ColumnType): ColumnType {
  const isTestEnv = process.env.NODE_ENV === 'test'
  if (isTestEnv && mssqlType.toString() in typesMappingForSQLite) {
    return typesMappingForSQLite[mssqlType.toString()]
  }
  return mssqlType
}

export function DbAwareColumn (columnOptions: ColumnOptions): PropertyDecorator {
  if (columnOptions.type) {
    columnOptions.type = resolveDbType(columnOptions.type)
  }
  if (typeof columnOptions.default === 'function') {
    if (columnOptions.default() === 'getdate()') {
      columnOptions.default = () => 'datetime(\'now\',\'localtime\')'
    }
  }
  return Column(columnOptions)
}
