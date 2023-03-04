export interface Todo {
  createdAt: Date
  name: string
  status: 'DONE' | 'PENDING' | 'BACKLOG'
}