import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,
  UpdateDateColumn, Index, OneToMany, JoinColumn, Unique } from 'typeorm';
import { v4 } from 'uuid';

@Entity({ name: 'users'})
export class User extends BaseEntity {

   @PrimaryGeneratedColumn('uuid',{name: 'id'})
   public id: string = v4();

   @Column({ name: 'name', type: 'text' })
   public name = '';

   @Column({ name: 'description', type: 'text' })
   public description = '';

   @CreateDateColumn({ name: 'create_date', type: 'timestamptz', update: false })
   public createDate: Date = new Date();

   @UpdateDateColumn({ name: 'update_date', type: 'timestamptz', update: true })
   public updateDate: Date = new Date();

   public constructor(client?: Partial<User>) {
     super();
     if (client) {
       this.id = client.id ?? this.id;
       this.name = client.name ?? this.name;
       this.description = client.description ?? this.description;
     }
   }
}