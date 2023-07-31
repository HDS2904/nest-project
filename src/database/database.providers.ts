import { Sequelize } from 'sequelize-typescript';
import { University } from 'src/university/entities/university.entity';
import { User } from 'src/user/entities/user.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'db',
        port: 5432,
        username: 'hds',
        password: '12345',
        database: 'node_db',
      });
      sequelize.addModels([
        University,
        User
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];