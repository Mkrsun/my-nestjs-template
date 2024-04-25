import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
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
