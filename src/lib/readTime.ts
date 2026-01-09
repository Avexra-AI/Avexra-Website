export function extractTextFromPortableText(content: any[]): string {
	if (!Array.isArray(content)) return "";

	return content
		.map((block) => {
			// normal text blocks
			if (block._type === "block" && Array.isArray(block.children)) {
				return block.children.map((child: any) => child.text || "").join(" ");
			}

			// code blocks
			if (block._type === "code") {
				return block.code || "";
			}

			return "";
		})
		.join(" ");
}
