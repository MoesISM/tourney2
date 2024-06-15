import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class MatchCreateDto {
  @IsNumber()
  @IsNotEmpty()
  round: number

  @IsString()
  @IsOptional()
  tournamentId?: string

  @IsString()
  @IsOptional()
  team1Id?: string

  @IsString()
  @IsOptional()
  team2Id?: string

  @IsString()
  @IsOptional()
  winnerId?: string

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

export class MatchUpdateDto {
  @IsNumber()
  @IsOptional()
  round?: number

  @IsString()
  @IsOptional()
  tournamentId?: string

  @IsString()
  @IsOptional()
  team1Id?: string

  @IsString()
  @IsOptional()
  team2Id?: string

  @IsString()
  @IsOptional()
  winnerId?: string

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
