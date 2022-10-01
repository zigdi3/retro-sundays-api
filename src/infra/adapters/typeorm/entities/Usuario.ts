import { Entity, Index, ManyToMany, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { DbAwareColumn } from "../mapping-for-sqlite-helper";
import { PerfilUsuario } from "./PerfilUsuario";

@Index('Usuario_PK', ['CodigoUsuario'], { unique: true })
@Entity('Usuario', { schema: 'dbo' })
export class Usuario {
  @DbAwareColumn({ type: 'int', primary: true, name: 'CodigoUsuario', default: () => '(0' })
  codigoUsuario: number

  @DbAwareColumn({ type: 'string', name: 'NomeUsuario', length: 30 })
  nomeUsuario: string

  @DbAwareColumn({ type: 'boolean', name: 'Ativo', default: () => '(0)' })
  ativo: boolean


  // @OneToMany(() => PerfilUsuario, (perfilUsuario) => perfilUsuario.usuario, { eager: true })
  // perfilUsuario: PerfilUsuario[]
}