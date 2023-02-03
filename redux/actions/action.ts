export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";
export interface SetIncrementAmount {
    type: typeof INCREMENT;
    payload: number;
}
export interface SetDecrementAmount {
    type: typeof DECREMENT;
    payload: number;
}
export type commonTypes=
    | SetIncrementAmount
    | SetDecrementAmount