import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFieldsToTheCompaniesTable1617393416536
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('companies', [
      new TableColumn({ name: 'url', type: 'varchar' }),
      new TableColumn({ name: 'description', type: 'varchar' }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('companies', [
      new TableColumn({ name: 'url', type: 'varchar' }),
      new TableColumn({ name: 'description', type: 'varchar' }),
    ]);
  }
}
