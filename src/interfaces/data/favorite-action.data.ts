import { UUID } from 'crypto'

export interface FavoriteAction {
  id: UUID;
  name: string;
  url: string;
}
