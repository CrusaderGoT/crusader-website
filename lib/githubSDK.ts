import { request } from "@octokit/request";

const github = request.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
});

const githubRepositories = await github("GET /user/repos", {
    type: "public",
    sort: "updated",
    direction: "asc",
});

export { github, githubRepositories };
