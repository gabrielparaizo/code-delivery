import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';

@Module({
  controllers: [PlacesController]
})
export class MapsModule {}
