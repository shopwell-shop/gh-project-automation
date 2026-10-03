import { describe, expect, it, vi } from "vitest";
import { getLabelByName } from "../../src/api/github";
import { createMockToolkit } from "../helpers";

describe("getLabelByName", () => {
    it("queries the Shopwell GitHub organization", async () => {
        const toolkit = createMockToolkit();
        toolkit.github.graphql = vi.fn().mockResolvedValue({ repository: { label: undefined } });

        await getLabelByName(toolkit, "shopwell", "needs-triage");

        const [query] = vi.mocked(toolkit.github.graphql).mock.calls[0];
        expect(query).toContain('repository(owner: "shopwell-shop", name: $repository)');
    });
});
