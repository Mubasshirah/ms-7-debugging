document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

function submitIssue(e) {
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random()*100000000) + '';
  const status = 'Open';

  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')){
    issues = JSON.parse(localStorage.getItem('issues'));
    console.log(issues)
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('issueInputForm').reset();
  fetchIssues();
  e.preventDefault();
}

const closeIssue = id => {
  // console.log();
  const issues = JSON.parse(localStorage.getItem('issues'));
  // console.log(issues)
  const currentIssue= issues.find(issue =>{
    return issue.id===JSON.stringify(id);
  });
  // console.log(currentIssue.status);
  currentIssue.status='Closed'
  
 
  // currentIssue.status = 'Closed';

  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
}

const deleteIssue = id => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  console.log(issues)
  // const remainingIssues = issues.find(issue=> {
  //   return issue.id!==JSON.stringify(id);
  // } );
  // remainingIssues.status='Delete';
  localStorage.setItem('issues', JSON.stringify(remainingIssues));
}

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  // console.log(issues)
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    const {id, description, severity, assignedTo, status} = issues[i];
    // console.log(issues[i])

    issuesList.innerHTML +=   `<div class="well">
                              <h6>Issue ID: ${id} </h6>
                              <p><span class="label label-info"> ${status} </span></p>
                              <h3> ${description} </h3>
                              <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                              <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                              <a href="#" onclick="closeIssue(${id})" class="btn btn-warning">Close</a>
                              <a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
                              </div>`;
  }
}
