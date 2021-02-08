'use strict'
let myCookies = {};
function setCookie()
{
  myCookies["_email"] = document.getElementById("email_address").value;
 
 
  document.cookie = "";
  let expires = new Date(Date.now()+30 * 24 * 3600 * 1000).toString();
  let cookieString = "";
  for (let key in myCookies)
  {
    cookieString = key+"="+myCookies[key]+";"+expires+";";
    document.cookie = cookieString;
  }
}
function loadCookies()
{
  myCookies = {};
  let kv = document.cookie.split(";");
  for (let id in kv)
  {
    let cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
  document.getElementById("email_address").value = myCookies["_email"];

}
  