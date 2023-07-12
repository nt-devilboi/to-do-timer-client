export interface ILocalStore {

    get get(): string

    remove: () => void
    set: (entity: string) => void
}
