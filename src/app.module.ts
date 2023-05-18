import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UniversityModule } from './university/university.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'hds',
      password: '12345',
      database: 'nest_db',
      entities: [__dirname + "/**/*.entity{.js,.ts}"],
      synchronize: true
    }),
    UserModule,
    UniversityModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
