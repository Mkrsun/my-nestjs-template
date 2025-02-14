import { Module } from '@nestjs/common';
import { ReviewController } from './controller/review.controller';
import { ReviewService } from '../application/review.service';
import { DbRepository } from 'src/db/dbRepository';
import { MssqlRepository } from 'src/db/mssql/mssql.repository.impl';

@Module({
  controllers: [ReviewController],
  providers: [
    ReviewService,
    { provide: DbRepository, useClass: MssqlRepository },
  ],
})
export class ReviewModule {}
