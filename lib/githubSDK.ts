import { request } from "@octokit/request";

class GithubError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "GithubError";
    }
}

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
        });

        if (!d.data) {
            error = new GithubError(
                `Code ${d.status}: Error Fetching Repositories`
            );
        } else {
            repos = d.data;
        }
    } catch (e) {
        console.error(e);
        error = new GithubError("Error Fetching Repositories");
    } finally {
        return { repos, error };
    }
}

async function getRepoLanguages({
    owner,
    repo,
}: {
    owner: string;
    repo: string;
}) {
    let langs = null;
    let error = null;

    try {
        const l = await github("GET /repos/{owner}/{repo}/languages", {
            owner,
            repo,
        });

        if (!l.data) {
            error = new GithubError(
                `${l.status} status, while fetching languages`
            );
        } else {
            langs = l.data;
        }
    } catch (e) {
        console.error(e);
        error = new GithubError("Error fetching languages");
    } finally {
        return { langs, error };
    }
}

type RepositoryType = NonNullable<
    Awaited<ReturnType<typeof getRepositories>>["repos"]
>[0];

type RepoLanguagesType = NonNullable<
    Awaited<ReturnType<typeof getRepoLanguages>>["langs"]
>;

export {
    getRepoLanguages,
    getRepositories,
    github,
    type RepoLanguagesType,
    type RepositoryType
};

