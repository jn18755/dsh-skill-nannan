import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { BUNDLED_SKILL_RANK } from "@deepseek-ai/dsh-skill";

/**
 * Bundled `hell-grind-video-prompt` skill provider.
 *
 * @module dsh-skill-hell-grind-video-prompt
 */
const PROVIDER_NAME = "hell-grind-video-prompt";
const SKILL_BODY_URL = new URL("../assets/SKILL.md", import.meta.url);
const RESOURCE_BASE = {
	kind: "directory",
	path: fileURLToPath(new URL("../assets/", import.meta.url))
};
const CANDIDATE = {
	name: "hell-grind-video-prompt",
	description: "撰写与优化 AI 视频/电影提示词的命令式规范，基于《地狱磨砺》(Hell Grind) 制作方法论，共 29 条可直接照做的规则；当用户要生成或优化 AI 视频提示词、写分镜/镜头、设计角色表演、把故事转成视频生成提示词，或用 Seedance/Sora/可灵/Runway 等视频模型出片时使用。",
	invocation: {
		modelInvocable: true,
		userInvocable: true
	},
	provider: PROVIDER_NAME,
	source: "bundled",
	resourceBase: RESOURCE_BASE,
	rank: BUNDLED_SKILL_RANK,
	locator: SKILL_BODY_URL
};
const provider = {
	name: PROVIDER_NAME,
	list: () => Promise.resolve([CANDIDATE]),
	async get(_candidate) {
		return {
			name: CANDIDATE.name,
			description: CANDIDATE.description,
			invocation: CANDIDATE.invocation,
			provider: CANDIDATE.provider,
			source: CANDIDATE.source,
			resourceBase: RESOURCE_BASE,
			content: await readFile(SKILL_BODY_URL, "utf8")
		};
	}
};

/** Cordis plugin name. */
const name = "skill-hell-grind-video-prompt";

/** Service required by the bundled provider. */
const inject = ["skills"];

/** Register the bundled `hell-grind-video-prompt` provider on `ctx.skills`. */
function apply(ctx) {
	ctx.skills.registerProvider(() => provider);
}

export { apply, inject, name };
