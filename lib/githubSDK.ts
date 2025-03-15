import { request } from "@octokit/request";

const github = request.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
});

export { github };
