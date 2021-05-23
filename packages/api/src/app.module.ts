import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/database.config';
import { MonitoringModule } from './monitoring/monitoring.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MonitoringModule,
  ]
})
export class AppModule {}
