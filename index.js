task = function (cfg = {}) {
let data = {
   "project_id":39,
   "handler_id":0,
   "category":"FortiWeb-Cloud",
   "keyword_ids":"",
   "reproducibility":10,
   "severity":50,
   "priority":30,
   "eta_date":"",
   "review_required":21.3,
   "reported_buildnumber":1111,
   "summary": `[WAFCLD TASK] ${cfg.title || "test"}`,
   "description":"/** This is just a SHORTCUT to Teams task & FS **/",
   "additional_info": cfg.href || "https://teams.microsoft.com/l/entity"
}

let form = new FormData()

Object.keys(data).forEach(key=>form.append(key, data[key]))

fetch('https://mantis.fortinet.com/bug_report.php', {method: 'post', body: form}).then(rsp=>{console.log(rsp)})

}
