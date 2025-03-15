import { github } from "@/lib/githubSDK";

const githubRepositories = await github("GET /user/repos", {
    type: "public",
    sort: "updated",
    direction: "asc",
});

export { githubRepositories };

