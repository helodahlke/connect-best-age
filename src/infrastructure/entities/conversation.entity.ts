// import { MessageData } from 'src/interfaces/data/message.data'
// import {
//     Column,
//     CreateDateColumn,
//     Entity,
//     JoinColumn,
//     ManyToOne,
//     OneToMany,
//     PrimaryGeneratedColumn,
//     UpdateDateColumn,
//   } from 'typeorm'

// @Entity('conversation') 
// // o sender vai ser semrpe = ao usuário principal, 
// //sendo assim, o senderId vai ser uma relation de 1:1 com o user e o receiver uma relation de 1:1 com o Friend.
// export class FavoriteActionEntity {

//   @PrimaryGeneratedColumn('uuid')
//   id: string

//   @Column({ name: 'sender_id', nullable: false })
//   senderId: string

//   @Column({ name: 'receiver_id', nullable: false })
//   receiverId: string

//   @OneToMany(() => MessageData, message => message)
//   mensagem: string

//   fromData(){

//   }
//   toData(){}
// }
