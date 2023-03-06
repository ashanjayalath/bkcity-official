export const CHANGE_NAV_COLOR="CHANGE_NAV_COLOR";
export const CHANGE_NAV_POSITION="CHANGE_NAV_POSITION";
export const CHANGE_NAV_THEME="CHANGE_NAV_THEME";
export const CHANGE_LANGUAGE="CHANGE_LANGUAGE";
export const FIREBASE_AUTH="FIREBASE_AUTH";
export const SELECTED_PACKAGE="SELECTED_PACKAGE";
export interface SetFirebaseSignState{
    type: typeof FIREBASE_AUTH;
    value: boolean;
}
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
export interface SetSelectedPackage {
    type: typeof SELECTED_PACKAGE;
    value: number;
}

export type commonTypes=
    | SetNavColor
    | SetNavPosition
    | SetNavTheme
    | SetLanguage
    | SetFirebaseSignState
    | SetSelectedPackage