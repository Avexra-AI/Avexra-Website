"use client";

/**
 * Sanity Studio configuration
 * Studio route: /studio
 */

import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	apiVersion,

	schema: {
		types: schemaTypes,
	},

	plugins: [
		structureTool({ structure }),
		visionTool({ defaultApiVersion: apiVersion }),
	],
});
