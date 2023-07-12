export class Book {
  id = "";
  name = "";
  desc = "";

  public ChangeName(name: string): void {
    this.name = name;
  }

  public ChangeDesc(desc: string): void {
    this.desc = desc;
  }
}
