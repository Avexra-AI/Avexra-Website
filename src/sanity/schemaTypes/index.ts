import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";

export const schemaTypes: SchemaTypeDefinition[] = [
	postType,
	categoryType,
	blockContentType,
];
