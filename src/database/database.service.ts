import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from 'src/config/config.keys';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        //ssl: true,
        type: 'postgres',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.DBUSER),
        password: config.get(Configuration.DBPSW),
        database: config.get(Configuration.DBNAME),
        port: parseInt(config.get(Configuration.DBPORT)),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
