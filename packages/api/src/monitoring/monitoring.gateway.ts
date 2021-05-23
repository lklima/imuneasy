import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { MonitoringService } from './monitoring.service';
import { CreateMonitoringDto } from './dto/create-monitoring.dto';
import { UpdateMonitoringDto } from './dto/update-monitoring.dto';

@WebSocketGateway(4001)
export class MonitoringGateway {
  constructor(private readonly monitoringService: MonitoringService) {}

  @SubscribeMessage('createMonitoring')
  create(@MessageBody() createMonitoringDto: CreateMonitoringDto) {
    return this.monitoringService.create(createMonitoringDto);
  }

  @SubscribeMessage('findAllMonitoring')
  findAll() {
    return this.monitoringService.findAll();
  }

  @SubscribeMessage('findOneMonitoring')
  findOne(@MessageBody() id: number) {
    return this.monitoringService.findOne(id);
  }

  @SubscribeMessage('updateMonitoring')
  update(@MessageBody() updateMonitoringDto: UpdateMonitoringDto) {
    return this.monitoringService.update(updateMonitoringDto.id, updateMonitoringDto);
  }

  @SubscribeMessage('removeMonitoring')
  remove(@MessageBody() id: number) {
    return this.monitoringService.remove(id);
  }
}
