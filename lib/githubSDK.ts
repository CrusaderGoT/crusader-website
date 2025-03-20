import { request } from "@octokit/request";

const github = request.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
});

async function getRepositories() {
    let repos = null;
    let error = null;

    try {
        const d = await github("GET /user/repos", {
            type: "public",
            sort: "updated",
            direction: "asc",
        });

        if (!d.data) {
            error = new Error(`Code ${d.status}: Error Fetching Repositories`);
        } else {
            repos = d.data;
        }
    } catch (e) {
        error = new Error("Error Fetching Repositories");
    } finally {
        return { repos, error };
    }
}

async function getRepositoryLanguagues() {
    let languanges = null;
    let error = null;
    let owner= "ff"
    let repo = "fkfk"

    try {
        const d = await github(`GET /repos/${owner}/${repo}/languages`);

        if (!d.data) {
            error = new Error(`Code ${d.status}: Error Fetching Repositories`);
        } else {
            languanges = d.data;
        }
    } catch (e) {
        error = new Error("Error Fetching Repositories");
    } finally {
        return { languanges, error };
    }
}

type RepositoryType = NonNullable<
    Awaited<ReturnType<typeof getRepositories>>["repos"]
>[0];

export { getRepositories, github, type RepositoryType };

