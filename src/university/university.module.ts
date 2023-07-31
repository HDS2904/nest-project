import { Module } from '@nestjs/common';
import { UniversityService } from './university.service';
import { UniversityResolver } from './university.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { universityProvider } from './entities/university.provider';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...universityProvider,
    UniversityResolver,
    UniversityService
  ]
})
export class UniversityModule {}
