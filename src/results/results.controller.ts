import { Controller, Get, Param } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get(':year')
  findByYear(@Param('year') year: string) {
    return this.resultsService.findByYear(year);
  }
}
