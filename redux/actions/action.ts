export const CHANGE_NAV_COLOR="CHANGE_NAV_COLOR";
export const CHANGE_NAV_POSITION="CHANGE_NAV_POSITION";
export const CHANGE_NAV_THEME="CHANGE_NAV_THEME";
export const CHANGE_LANGUAGE="CHANGE_LANGUAGE";

export interface SetNavColor {
    type: typeof CHANGE_NAV_COLOR;
    value: string;
}
export interface SetNavPosition {
    type: typeof CHANGE_NAV_POSITION;
    value: string;
}
export interface SetNavTheme {
    type: typeof CHANGE_NAV_THEME;
    value: string;
}
export interface SetLanguage {
    type: typeof CHANGE_LANGUAGE;
    value: string;
}
export type commonTypes=
    | SetNavColor
    | SetNavPosition
    | SetNavTheme
    | SetLanguage