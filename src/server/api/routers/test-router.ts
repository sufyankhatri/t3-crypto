import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { testServiceFunc } from "../services/test-service";

export const testRouter = createTRPCRouter({
  test: publicProcedure.query(() => {
    return testServiceFunc(1);
  }),
});
