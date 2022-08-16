import { createReactQueryHooks } from "@trpc/react";

import { AppRouter } from "../../../node/trpc/src/index";

export const trpc = createReactQueryHooks<AppRouter>();
