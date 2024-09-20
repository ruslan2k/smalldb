export interface IStorageAdapter {
  read: () => Promise<any>
  write: (_: any) => Promise<void>
}
