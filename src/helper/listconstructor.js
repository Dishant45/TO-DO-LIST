export class CreateTODO {
  constructor(todoContent) {
    this.id = faker.random.uuid();
    this.content = todoContent;
  }
}
