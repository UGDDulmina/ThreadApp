import { createRouteHandler } from "uploadthing/next-legacy";

import { ourFileRouter } from "./core";

export default createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});
