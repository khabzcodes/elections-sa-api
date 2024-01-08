import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ResultsController],
  providers: [ResultsService],
  imports: [PrismaModule],
})
export class ResultsModule {}
