import { IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PayoutsQueryDto {
  @ApiPropertyOptional({ description: 'Page number', default: 1, minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiPropertyOptional({
    description: 'Results per page (max 100)',
    default: 20,
    maximum: 100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number = 20;
}

export interface PayoutEntryDto {
  address: string;
  amount: string;
  transaction_hash: string | null;
  paid_at: string | null;
  rank: number;
}

export interface PaginatedPayoutsDto {
  data: PayoutEntryDto[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
