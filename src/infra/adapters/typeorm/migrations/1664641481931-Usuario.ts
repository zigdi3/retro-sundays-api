import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";

export class Usuario_1664641481931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'Usuario',
            columns: [
                {
                    name: 'CodigoUsuario',
                    type: 'INTEGER',
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'CodigoPerfilUsuario',
                    type: 'INTEGER',
                    default: 10
                },
                {
                    name: 'NomeUsuario',
                    type: 'VARCHAR(80)'
                },
                {
                    name: 'Ativo',
                    type: 'BOOLEAN',
                },
                {
                    name: 'InseridoEm',
                    type: 'DATE',
                    default: 'NOW()'
                },
                {
                    name: 'InseridoPor',
                    type: 'INTEGER'
                },
                {
                    name: 'ModificadoEm',
                    type: 'DATE',
                    isNullable: true
                },
                {
                    name: 'ModificadoPor',
                    type: 'INTEGER',
                    isNullable: true
                }

            ]
        }))


        await queryRunner.createTable(new Table({
            name: 'PerfilUsuario',
            columns: [
                {
                    name: 'CodigoPerfilUsuario',
                    type: 'INTEGER',
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'UsuarioPerfilUsuario',
                    type: 'INTEGER',
                },
                {
                    name: 'ChavePerfilUsuario',
                    type: 'VARCHAR(30)',
                    isUnique: true
                },
                {
                    name: 'InseridoEm',
                    type: 'DATE',
                    default: 'NOW()'
                },
                {
                    name: 'InseridoPor',
                    type: 'INTEGER'
                },
                {
                    name: 'ModificadoEm',
                    type: 'DATE',
                    isNullable: true
                },
                {
                    name: 'ModificadoPor',
                    type: 'INTEGER',
                    isNullable: true
                }
            ]
        }))


        await queryRunner.createTable(new Table({
            name: 'UsuarioPerfilUsuario',
            columns: [
                {
                    name: 'CodigoUsuarioPerfilUsuario',
                    type: 'INTEGER',
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'PerfilUsuario',
                    type: 'INTEGER',
                },
                {
                    name: 'CodigoUsuario',
                    type: 'INTEGER',
                },
                {
                    name: 'CodigoPerfilUsuario',
                    type: 'INTEGER'
                },
                {
                    name: 'InseridoEm',
                    type: 'DATE',
                    default: 'NOW()'
                },
                {
                    name: 'InseridoPor',
                    type: 'INTEGER',
                    default: '1'
                },
                {
                    name: 'ModificadoEm',
                    type: 'DATE',
                    isNullable: true
                },
                {
                    name: 'ModificadoPor',
                    type: 'INTEGER',
                    isNullable: true
                }
            ]
        }))


        await queryRunner.createForeignKey('UsuarioPerfilUsuario', new TableForeignKey({
            name: 'FK_Usario_UsuarioPerfilUsuario_CodigoUsuario',
            columnNames: ['CodigoUsuario'],
            referencedTableName: 'Usuario',
            referencedColumnNames: ['CodigoUsuario']
        }))
        await queryRunner.createForeignKey('UsuarioPerfilUsuario', new TableForeignKey({
            name: 'FK_UsuarioPerfilUsuario_PerfilUsuario_CodigoPerfilUsuario',
            columnNames: ['CodigoPerfilUsuario'],
            referencedTableName: 'PerfilUsuario',
            referencedColumnNames: ['CodigoPerfilUsuario']
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('UsuarioPerfilUsuario', 'FK_UsuarioPerfilUsuario_PerfilUsuario_CodigoPerfilUsuario')
        await queryRunner.dropForeignKey('UsuarioPerfilUsuario', 'FK_Usario_UsuarioPerfilUsuario_CodigoUsuario')
        await queryRunner.dropTable('UsuarioPerfilUsuario')
        await queryRunner.dropTable('PerfilUsuario')
        await queryRunner.dropTable('Usuario')

    }

}
