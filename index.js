task = function (cfg = {}) {
  let data = {
    project_id: 39,
    handler_id: 0,
    category: "FortiWeb-Cloud",
    keyword_ids: "",
    reproducibility: 10,
    severity: 50,
    priority: 30,
    eta_date: "",
    review_required: cfg.version || 21.3,
    reported_buildnumber: 1111,
    summary: `[WAFCLD TASK] ${cfg.summary || "test"}`,
    description: "/** This is just a SHORTCUT to Teams task & FS **/",
    additional_info: cfg.href || "https://teams.microsoft.com/l/entity",
  };

  let form = new FormData();

  Object.keys(data).forEach((key) => form.append(key, data[key]));

  fetch("https://mantis.fortinet.com/bug_report.php", {
    method: "post",
    body: form,
  }).then((rsp) => {
    if (rsp.status === 200 && rsp.redirected === true) {
      console.log(
        `Mantis ticket created:
         ${rsp.url}

         summary: ${data.summary}
         teams: ${data.additional_info}
       `
      );
    }
  });
};

task({
   href: 'https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.planner/_djb2_msteams_prefix_823506895?webUrl=https%3a%2f%2ftasks.office.com%2f2c36c478-3d00-452f-8535-48396f5f01f0%2fHome%2fPlanViews%2f7lZNTDj5qkirMY2eGH3gTGUAB3Rh%3fType%3dPlanLink%26Channel%3dTeamsTab&label=UI+improvement+for+FortiWeb+Cloud+in+Tasks&context=%7b%0d%0a++%22subEntityId%22%3a+%22J_y6Y77RZEO2LOAi0bFo9GUAB0Ni%22%2c%0d%0a++%22channelId%22%3a+%2219%3a29a837ad8b444795b42f6e789d815277%40thread.tacv2%22%0d%0a%7d&tenantId=2c36c478-3d00-452f-8535-48396f5f01f0',
   summary: 'UI improvement for FortiWeb Cloud in Tasks'
})
