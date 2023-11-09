// Use type safe message keys with `next-intl`
type Messages = typeof import('./src/locales/en.json');

declare interface IntlMessages extends Messages {}

declare namespace NodeJS {
  interface ProcessEnv {}
}
