import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewModule } from './review/infrastructure/review.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
