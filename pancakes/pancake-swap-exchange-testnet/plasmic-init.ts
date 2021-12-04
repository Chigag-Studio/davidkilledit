import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "eyRRP9nBQFwZeeubhp7TK8",  // ID of a project you are using
      token: "XEcPdFwfFqb0UN5IFIFkY53cFwwnLI4M1kibNRr4YlKMX8lsO3kjtOEpQAS97opNKQ8CntuZyzqZL1qw89Dw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
