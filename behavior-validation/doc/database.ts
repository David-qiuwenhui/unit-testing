export interface User {
  id: number;
  name: string;
}

export class Database {
  private dataStore: User[] = [];

  addUser(user: User): void {
    this.dataStore.push(user);

    // axios等请求
    // axios("/addUser")
  }

  getUser(id: number): User | undefined {
    return this.dataStore.find((user) => user.id === id);
  }
}
