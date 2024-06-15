import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TournamentTeamCreateDto {
  @IsString()
  @IsOptional()
  tournamentId?: string

  @IsString()
  @IsOptional()
  teamId?: string

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

export class TournamentTeamUpdateDto {
  @IsString()
  @IsOptional()
  tournamentId?: string

  @IsString()
  @IsOptional()
  teamId?: string

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
