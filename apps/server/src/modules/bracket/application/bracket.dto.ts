import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class BracketCreateDto {
  @IsString()
  @IsOptional()
  tournamentId?: string

  @IsString()
  @IsOptional()
  matchId?: string

  @IsString()
  @IsOptional()
  parentMatchId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class BracketUpdateDto {
  @IsString()
  @IsOptional()
  tournamentId?: string

  @IsString()
  @IsOptional()
  matchId?: string

  @IsString()
  @IsOptional()
  parentMatchId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
