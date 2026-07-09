require('dotenv').config()
const express = require('express');
const app = express();
const githubdata = {
  "login": "sumit2898",
  "id": 196522979,
  "node_id": "U_kgDOC7az4w",
  "avatar_url": "https://avatars.githubusercontent.com/u/196522979?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sumit2898",
  "html_url": "https://github.com/sumit2898",
  "followers_url": "https://api.github.com/users/sumit2898/followers",
  "following_url": "https://api.github.com/users/sumit2898/following{/other_user}",
  "gists_url": "https://api.github.com/users/sumit2898/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sumit2898/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sumit2898/subscriptions",
  "organizations_url": "https://api.github.com/users/sumit2898/orgs",
  "repos_url": "https://api.github.com/users/sumit2898/repos",
  "events_url": "https://api.github.com/users/sumit2898/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sumit2898/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sumit Kumar",
  "company": "Dyal Singh College , South Campus , University of Delhi",
  "blog": "",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "College Student || Frontend Developer  || Aspire to Data Scientist ||\r\nPursuing Data Structure & Algorithm",
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-26T10:22:46Z",
  "updated_at": "2026-06-17T07:04:05Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/login', (req,res)=>{
    res.send("you are login")
})

app.get('/github' , (req,res) => {
    res.json(githubdata)
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});