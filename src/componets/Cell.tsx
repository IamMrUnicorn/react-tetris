import { CellOptions } from "../types"

interface Props {
  type: CellOptions
}

export const Cell = ({ type }: Props) => {

  return <div className={`cell ${type}`} />
}