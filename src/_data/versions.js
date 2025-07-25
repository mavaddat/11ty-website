import semver from "semver";
import fetchGitHubReleases from "./githubReleases.js";

const HARDCODED_VERSIONS = [
	{
		tag: "v3.1.2",
		docs_url: "https://www.11ty.dev/docs/",
		minimumNodeVersion: 18,
	},
	{
		tag: "v3.1.1",
		docs_url: "https://www.11ty.dev/docs/",
		minimumNodeVersion: 18,
	},
	{
		tag: "v3.1.0",
		docs_url: "https://www.11ty.dev/docs/",
		minimumNodeVersion: 18,
	},
	{
		tag: "v3.0.0",
		docs_url: "https://www.11ty.dev/docs/",
		minimumNodeVersion: 18,
	},
	{
		tag: "v2.0.1",
		docs_url: "https://v2-0-1.11ty.dev/docs/",
		minimumNodeVersion: 14,
	},
	{
		tag: "v2.0.0",
		docs_url: "https://v2-0-0.11ty.dev/docs/",
		minimumNodeVersion: 14,
	},
	{
		tag: "v1.0.2",
		docs_url: "https://v1-0-2.11ty.dev/docs/",
		minimumNodeVersion: 12,
	},
	{
		tag: "v1.0.1",
		docs_url: "https://v1-0-1.11ty.dev/docs/",
		minimumNodeVersion: 12,
	},
	{
		tag: "v1.0.0",
		docs_url: "https://v1-0-0.11ty.dev/docs/",
		minimumNodeVersion: 12,
	},
	{
		tag: "v0.12.1",
		docs_url: "https://v0-12-1.11ty.dev/docs/",
	},
	{
		tag: "v0.12.0",
		docs_url: "https://v0-12-0.11ty.dev/docs/",
	},
	{
		tag: "v0.11.1",
		docs_url: "https://v0-11-1.11ty.dev/docs/",
	},
	{
		tag: "v0.11.0",
		docs_url: "https://v0-11-0.11ty.dev/docs/",
	},
	{
		tag: "v0.10.0",
		docs_url: "https://v0-10-0.11ty.dev/docs/",
	},
	{
		tag: "v0.9.0",
		docs_url: "https://v0-9-0.11ty.dev/docs/",
	},
	{
		tag: "v0.8.3",
		docs_url: "https://v0-8-3.11ty.dev/docs/",
	},
	{
		tag: "v0.8.2",
		docs_url: "https://v0-8-2.11ty.dev/docs/",
	},
	{
		tag: "v0.8.1",
		docs_url: "https://v0-8-1.11ty.dev/docs/",
	},
	{
		tag: "v0.8.0",
		docs_url: "https://v0-8-0.11ty.dev/docs/",
	},
	{
		tag: "v0.7.1",
		docs_url: "https://v0-7-1.11ty.dev/docs/",
	},
	{
		tag: "v0.7.0",
		docs_url: "https://v0-7-0.11ty.dev/docs/",
	},
	{
		tag: "v0.6.0",
		docs_url: "https://v0-6-0.11ty.dev/docs/",
	},
	{
		tag: "v0.5.4",
		docs_url: "https://v0-5-4.11ty.dev/docs/",
	},
	{
		tag: "v0.5.3",
		docs_url: "https://v0-5-3.11ty.dev/docs/",
	},
	{
		tag: "v0.5.2",
		docs_url: "https://v0-5-2.11ty.dev/docs/",
	},
	{
		tag: "v0.5.1",
		docs_url: "https://v0-5-1.11ty.dev/docs/",
	},
	{
		tag: "v0.5.0",
		docs_url: "https://v0-5-0.11ty.dev/docs/",
	},
	{
		tag: "v0.4.0",
		docs_url: "https://v0-4-0.11ty.dev/docs/",
	},
	{
		tag: "v0.3.6",
		docs_url: "https://v0-3-6.11ty.dev/docs/",
	},
	{
		tag: "v0.3.5",
	},
	{
		tag: "v0.3.4",
	},
	{
		tag: "v0.3.3",
	},
	{
		tag: "v0.3.1",
	},
	{
		tag: "v0.3.0",
	},
	{
		tag: "v0.2.15",
	},
	{
		tag: "v0.2.14",
	},
	{
		tag: "v0.2.13",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.12",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.11",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.10",
	},
	{
		tag: "v0.2.9",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.8",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.7",
	},
	{
		tag: "v0.2.6",
	},
	{
		tag: "v0.2.5",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.4",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.3",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.2",
	},
	{
		tag: "v0.2.1",
		ignore_release_notes: true,
	},
	{
		tag: "v0.2.0",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.9",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.8",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.7",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.6",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.5",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.4",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.3",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.2",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.1",
		ignore_release_notes: true,
	},
	{
		tag: "v0.1.0",
		ignore_release_notes: true,
	},
];

let githubReleases = await fetchGitHubReleases();

for(let version of HARDCODED_VERSIONS) {
	let key = version.tag.slice(1);
	if(githubReleases[key]) {
		githubReleases[key] = {
			...githubReleases[key],
			...version,
		}
	} else {
		githubReleases[key] = {
			...version
		};
	}

	// Override tag only
	githubReleases[key].tagOnly = false;
}

let versions = Object.values(githubReleases);

versions.sort((a, b) => {
	if(semver.gt(a.tag, b.tag)) {
		return -1;
	}
	if(semver.lt(a.tag, b.tag)) {
		return 1;
	}
	return 0;
})

// versions.unshift(	{
// 	tag: "LATEST",
// 	docs_url: "https://www.11ty.dev/docs/",
// 	ignore_release_notes: true,
// });

export default versions;
