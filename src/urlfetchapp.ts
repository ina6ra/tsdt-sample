var UrlFetchApp: GoogleAppsScript.URL_Fetch.UrlFetchApp;

export function gasFetch(url:string) {
  var res:GoogleAppsScript.URL_Fetch.HTTPResponse = UrlFetchApp.fetch(url);
  return true;
}
