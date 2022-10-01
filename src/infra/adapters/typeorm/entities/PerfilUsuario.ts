import { Entity, Index, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { DbAwareColumn } from "../mapping-for-sqlite-helper";
import { Usuario } from "./Usuario";

@Entity('PerfilUsuario', { schema: 'dbo' })
export class PerfilUsuario {
  @DbAwareColumn({ type: 'int', primary: true, name: 'CodigoPerfilUsuario' })
  codigoPerfilUsuario: number

  @DbAwareColumn({ type: 'string', name: 'UsuarioPerfilUsuario' })
  usuarioPerfilUsuario: number

  @DbAwareColumn({ type: 'string', name: 'ChavePerfilUsuario', length: 30 })
  nomeUsuario: string


  // @ManyToMany(() => Usuario, (usuario) => usuario.perfilUsuario)
  // @JoinTable({
  //   schema: 'dbo',
  //   name: 'UsuarioPerfilUsuario',
  //   joinColumns: [{ name: 'CodigoPerfilUsuario', referencedColumnName: 'codigoPerfilUsuario' }],
  //   inverseJoinColumns: [{ name: 'CodigoUsuario', referencedColumnName: 'codigoUsuario' }]
  // })
  // usuario: Usuario[]
}