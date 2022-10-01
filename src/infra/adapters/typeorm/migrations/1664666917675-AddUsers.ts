import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsers_1664666917675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        // await queryRunner.query('INSERT INTO PerfilUsuario (ChavePerfilUsuario ) VALUES ( \'SISTEMA\' )')
        // await queryRunner.query('INSERT INTO PerfilUsuario (ChavePerfilUsuario ) VALUES ( \'PRESIDENTE\' )')
        // await queryRunner.query('INSERT INTO PerfilUsuario (ChavePerfilUsuario ) VALUES (  \'OPERADOR\' )')
        // await queryRunner.query('INSERT INTO PerfilUsuario (ChavePerfilUsuario ) VALUES ( \'CLIENTE\' )')
        // await queryRunner.query('INSERT INTO PerfilUsuario (havePerfilUsuario ) VALUES (  \'VISITANTE\' )')

        // await queryRunner.query('INSERT INTO Usuario (CodigoPerfilUsuario, NomeUsuario , Ativo) VALUES (1, \'Master Puppies\' , 1)')

        // await queryRunner.query('INSERT INTO UsuarioPerfilUsuario (PerfilUsuario, CodigoUsuario, CodigoUsuarioPerfilUsuario ) VALUES ( 1 ,1, 1 )')

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        // await queryRunner.query('DELETE FROM PerfilUsuario WHERE ChaverPerfil =  \'SISTEMA\'')
        // await queryRunner.query('DELETE FROM PerfilUsuario WHERE ChaverPerfil =   \'PRESIDENTE\' )')
        // await queryRunner.query('DELETE FROM PerfilUsuario WHERE ChaverPerfil =   \'OPERADOR\' )')
        // await queryRunner.query('DELETE FROM PerfilUsuario WHERE ChaverPerfil =   \'CLIENTE\' )')
        // await queryRunner.query('DELETE FROM PerfilUsuario WHERE ChaverPerfil =   \'VISITANTE\' )')

        // await queryRunner.query('DELETE FROM Usuario WHERE NomeUsuario = \'Master Puppies\' AND Ativo= 1')

        // await queryRunner.query('DELETE FROM UsuarioPerfilUsuario WHERE 1 = 1 AND PerfilUsuario = 1 AND CodigoUsuario = 1 AND CodigoUsuarioPerfilUsuario = 1 ')


    }


}
