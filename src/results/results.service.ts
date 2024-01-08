import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ResultsService {
  constructor(private prisma: PrismaService) {}

  findByYear(year: string) {
    const results = this.prisma.results.findMany({
      where: { year: parseInt(year) },
      orderBy: { votes: 'desc' },
    });
    return results;
  }
}
