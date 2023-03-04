export interface Todo {
  id: string
  createdAt: Date
  name: string
  status: 'DONE' | 'PENDING' | 'BACKLOG'
}