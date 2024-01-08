import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [PrismaModule, ResultsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
